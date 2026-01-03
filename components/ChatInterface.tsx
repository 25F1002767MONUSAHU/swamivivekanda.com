
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Hello! I am your Nexus Oracle. How can I help you today?', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    const modelMsg: Message = {
      id: modelMsgId,
      role: 'model',
      text: '',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMsg]);

    try {
      let fullText = '';
      // Fix: renamed streamChat to streamWisdom
      const stream = geminiService.streamWisdom(userMsg.text);
      
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(m => 
          m.id === modelMsgId ? { ...m, text: fullText } : m
        ));
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => prev.map(m => 
        m.id === modelMsgId ? { ...m, text: 'Sorry, I encountered an error processing your request.' } : m
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-900/30 rounded-3xl border border-gray-800 overflow-hidden relative">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
          >
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs ${
                msg.role === 'user' ? 'bg-indigo-600' : 'bg-gray-700'
              }`}>
                {msg.role === 'user' ? 'U' : 'AI'}
              </div>
              <div className={`px-4 py-3 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                  : 'bg-gray-800 text-gray-200 border border-gray-700/50'
              }`}>
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text || (isLoading && msg.role === 'model' ? '...' : '')}</p>
                <div className="mt-1 text-[10px] opacity-50 text-right">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-gray-800/50 rounded-full h-2 w-16" />
          </div>
        )}
      </div>

      <div className="p-4 bg-gray-900/50 border-t border-gray-800">
        <div className="relative max-w-4xl mx-auto">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your message..."
            className="w-full bg-gray-950 text-white rounded-2xl border border-gray-800 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 px-4 py-4 pr-14 resize-none min-h-[60px] max-h-[200px] outline-none transition-all"
            rows={1}
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-3 bottom-3 p-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-xl transition-all active:scale-90"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-500 mt-2">Powered by Gemini 3 Flash</p>
      </div>
    </div>
  );
};

export default ChatInterface;
