import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Trash2, Copy, Check, Download, RotateCcw } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const CyberChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings, traveler. I am Cyber-Bot. Ask me anything about Alex\'s skills or projects.', timestamp: new Date() }
  ]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Quick action prompts
  const quickActions = [
    { icon: '💼', text: 'Tell me about Alex', prompt: 'Tell me about Alex\'s experience and expertise' },
    { icon: '🚀', text: 'Latest Projects', prompt: 'What are Alex\'s latest projects?' },
    { icon: '💻', text: 'Tech Stack', prompt: 'What technologies does Alex work with?' },
    { icon: '📬', text: 'Contact Info', prompt: 'How can I contact Alex?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messages, textToSend);
    
    // Typing animation
    setIsTyping(true);
    typeMessage(responseText);
  };

  const typeMessage = (text: string) => {
    let index = 0;
    const speed = 20; // ms per character
    setTypingText('');
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypingText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setMessages(prev => [...prev, { role: 'model', text: text, timestamp: new Date() }]);
        setTypingText('');
        setIsTyping(false);
        setIsLoading(false);
      }
    }, speed);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const clearChat = () => {
    setMessages([
      { role: 'model', text: 'Chat cleared. How can I assist you?', timestamp: new Date() }
    ]);
  };

  const downloadChat = () => {
    const chatText = messages.map(msg => 
      `[${msg.timestamp?.toLocaleTimeString() || ''}] ${msg.role === 'user' ? 'You' : 'Cyber-Bot'}: ${msg.text}`
    ).join('\n\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cyber-chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatTime = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:bg-cyber-cyan hover:text-black transition-all duration-300 animate-float ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[90vw] md:w-96 h-[500px] z-50 flex flex-col bg-cyber-black/90 backdrop-blur-xl border border-cyber-cyan/30 rounded-lg shadow-[0_0_40px_rgba(0,245,255,0.2)] overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyber-cyan/20 bg-cyber-cyan/5">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyber-cyan animate-pulse" />
              <div>
                <h3 className="font-display font-bold text-cyber-cyan">Cyber Assistant</h3>
                <p className="text-xs text-gray-400">AI-Powered • Always Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={downloadChat}
                className="text-gray-400 hover:text-cyber-cyan transition-colors"
                title="Download Chat"
              >
                <Download className="w-4 h-4" />
              </button>
              <button 
                onClick={clearChat}
                className="text-gray-400 hover:text-cyber-pink transition-colors"
                title="Clear Chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Quick Actions - Show when no messages */}
            {messages.length === 1 && (
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-3 font-inter">Quick Actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(action.prompt)}
                      className="flex items-center gap-2 p-2 rounded-lg bg-cyber-cyan/5 border border-cyber-cyan/20 hover:bg-cyber-cyan/10 hover:border-cyber-cyan/40 transition-all text-left group"
                    >
                      <span className="text-lg">{action.icon}</span>
                      <span className="text-xs text-gray-300 group-hover:text-white">{action.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} group`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-cyber-pink/20 text-cyber-pink' : 'bg-cyber-cyan/20 text-cyber-cyan'}`}>
                  {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className="flex flex-col gap-1 max-w-[75%]">
                  <div className={`p-3 rounded-lg text-sm font-inter leading-relaxed relative ${
                    msg.role === 'user' 
                      ? 'bg-cyber-pink/10 border border-cyber-pink/30 text-gray-100 rounded-tr-none' 
                      : 'bg-cyber-cyan/10 border border-cyber-cyan/30 text-gray-200 rounded-tl-none'
                  }`}>
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    {msg.role === 'model' && (
                      <button
                        onClick={() => copyToClipboard(msg.text, idx)}
                        className="absolute top-2 right-2 p-1 rounded bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy message"
                      >
                        {copiedIndex === idx ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-400 hover:text-white" />
                        )}
                      </button>
                    )}
                  </div>
                  <span className={`text-[10px] text-gray-500 px-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Typing Animation */}
            {isTyping && typingText && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-cyber-cyan/20 text-cyber-cyan">
                  <Bot size={14} />
                </div>
                <div className="max-w-[75%] p-3 rounded-lg text-sm font-inter leading-relaxed bg-cyber-cyan/10 border border-cyber-cyan/30 text-gray-200 rounded-tl-none">
                  <div className="whitespace-pre-wrap">{typingText}<span className="animate-pulse">▊</span></div>
                </div>
              </div>
            )}

            {isLoading && !isTyping && (
              <div className="flex items-center gap-2 text-cyber-cyan text-xs pl-12">
                <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-bounce delay-150"></span>
                Processing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-cyber-cyan/20 bg-black/20">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 focus-within:border-cyber-cyan/50 focus-within:shadow-[0_0_10px_rgba(0,245,255,0.2)] transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask AI... (Enter to send)"
                disabled={isLoading}
                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-gray-500 font-inter disabled:opacity-50"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="text-cyber-cyan hover:text-white disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 text-center font-inter">
              Powered by Gemini AI • {messages.length} messages
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CyberChat;