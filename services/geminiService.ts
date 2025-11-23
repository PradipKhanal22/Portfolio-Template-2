import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize Gemini Client
const apiKey = process.env.API_KEY || ''; // In a real app, ensure this is handled securely or via backend proxy
const ai = new GoogleGenAI({ apiKey });

const MODEL_NAME = "gemini-2.5-flash";

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
  if (!apiKey) {
    return "Error: API_KEY is missing in the environment variables.";
  }

  try {
    // Construct the prompt with history for context window (simplified for this demo)
    // Ideally, use chat.sendMessageStream for full history management
    const conversationHistory = history.map(msg => 
      `${msg.role === 'user' ? 'User' : 'Model'}: ${msg.text}`
    ).join('\n');

    const prompt = `
      ${SYSTEM_INSTRUCTION}
      
      Current Conversation:
      ${conversationHistory}
      
      User: ${newMessage}
      Model:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });

    return response.text || "System malfunction. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. Neural link unstable.";
  }
};
