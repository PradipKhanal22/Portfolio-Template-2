import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const CyberChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings, traveler. I am Cyber-Bot. Ask me anything about Alex\'s skills or projects.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
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
              <Bot className="w-5 h-5 text-cyber-cyan" />
              <h3 className="font-display font-bold text-cyber-cyan">Cyber Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-cyber-pink/20 text-cyber-pink' : 'bg-cyber-cyan/20 text-cyber-cyan'}`}>
                  {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`max-w-[75%] p-3 rounded-lg text-sm font-inter leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-cyber-pink/10 border border-cyber-pink/30 text-gray-100 rounded-tr-none' 
                    : 'bg-cyber-cyan/10 border border-cyber-cyan/30 text-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
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
                placeholder="Ask AI..."
                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-gray-500 font-inter"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="text-cyber-cyan hover:text-white disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CyberChat;