import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatMessage } from "../types";

// Initialize Gemini Client
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const MODEL_NAME = "gemini-1.5-flash";

const SYSTEM_INSTRUCTION = `
You are CYBER-BOT, an advanced AI assistant for a Senior Web Developer's portfolio website.
Your persona is futuristic, professional, yet slightly witty and tech-savvy.
You are here to answer visitor questions about the developer.

Here is the developer's profile context:
- Name: Alex 'Neon' Code
- Role: Full Stack Developer & UI/UX Specialist
- Skills: React, TypeScript, Tailwind, Node.js, PHP, Laravel, SQL, Gemini API.
- Experience: 8+ years building premium web applications.
- Vibe: Cyberpunk, high-performance, clean code.

If asked about contact info, direct them to the contact form at the bottom.
Keep answers concise (under 100 words) and formatted nicely.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  if (!apiKey || !genAI) {
    return "⚠️ API Key not configured. Please set VITE_GEMINI_API_KEY in your .env file.";
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: MODEL_NAME,
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    // Build conversation history
    const conversationHistory = history
      .filter(msg => msg.role === 'user' || msg.role === 'model')
      .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
      .join('\n');

    const prompt = conversationHistory 
      ? `${conversationHistory}\n\nUser: ${newMessage}\nAssistant:`
      : `User: ${newMessage}\nAssistant:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text || "System malfunction. Please try again.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Provide more specific error messages
    if (error.message?.includes('API key')) {
      return "🔑 Invalid API Key. Please check your Gemini API configuration.";
    }
    if (error.message?.includes('quota')) {
      return "⏳ API quota exceeded. Please try again later.";
    }
    if (error.message?.includes('SAFETY')) {
      return "🛡️ Response blocked by safety filters. Please rephrase your question.";
    }
    
    return "⚡ Connection interrupted. Neural link unstable. Please try again.";
  }
};
