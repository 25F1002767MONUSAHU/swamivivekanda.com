
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const WisdomChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'model', 
      text: 'Namaste. I am a humble conduit for the teachings of Swami Vivekananda. In the silence of contemplation, what truth do you seek today?', 
      timestamp: new Date() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    const modelMsg: Message = { id: modelMsgId, role: 'model', text: '', timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);

    try {
      let fullText = '';
      const stream = geminiService.streamWisdom(text);
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(m => m.id === modelMsgId ? { ...m, text: fullText } : m));
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => prev.map(m => m.id === modelMsgId ? { ...m, text: 'The connection to the archives was interrupted. Please check your internet or try again in a moment.' } : m));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full rounded-[3rem] overflow-hidden relative shadow-2xl bg-[#050505] border border-white/5">
      {/* Background Decor - Large Subtle Om */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="opacity-[0.03] select-none scale-[2] md:scale-[3] transition-transform duration-1000">
          <svg viewBox="0 0 100 100" className="w-[300px] h-[300px] fill-white">
            <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="60" fontFamily="serif">🕉️</text>
          </svg>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 md:p-14 space-y-12 scroll-smooth relative z-10">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-6 duration-700`}>
            <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row' : 'flex-row'}`}>
              
              {/* Model Avatar */}
              {msg.role === 'model' && (
                <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-serif font-bold text-xl bg-stone-900 border border-white/10 text-stone-400 shadow-xl">
                  V
                </div>
              )}

              <div className="flex flex-col gap-2">
                <div className={`px-10 py-8 rounded-[2.5rem] shadow-2xl relative ${
                  msg.role === 'user' 
                    ? 'bg-[#ea580c] text-white rounded-tr-[1rem]' 
                    : 'bg-stone-900/40 backdrop-blur-3xl text-stone-200 border border-white/5 rounded-tl-[1rem]'
                }`}>
                  <p className={`text-xl md:text-2xl whitespace-pre-wrap leading-relaxed font-serif italic ${msg.role === 'user' ? 'font-normal' : 'font-light'}`}>
                    {msg.text || (isLoading && msg.role === 'model' ? '...' : '')}
                  </p>
                  <div className={`mt-6 text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 text-right ${msg.role === 'user' ? 'text-white' : 'text-stone-500'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>

              {/* User Avatar / "Me" Badge */}
              {msg.role === 'user' && (
                <div className="w-14 h-14 rounded-3xl flex-shrink-0 flex items-center justify-center bg-[#ea580c] text-white shadow-2xl border-4 border-[#050505]">
                  <span className="font-serif font-bold text-lg">Me</span>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start items-center gap-4 opacity-30 px-4">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        )}
      </div>

      {/* Input Bar Section */}
      <div className="p-12 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto relative group">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask Swamiji anything..."
            className="w-full bg-[#111] text-white rounded-full border border-white/10 px-10 py-6 text-xl focus:border-orange-500/40 outline-none transition-all placeholder:text-stone-700 shadow-[0_10px_40px_rgba(0,0,0,0.5)] pr-24"
          />
          <button 
            onClick={handleSend} 
            disabled={!inputValue.trim() || isLoading} 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-stone-800 hover:bg-stone-700 disabled:bg-stone-900/50 disabled:text-stone-800 text-white rounded-full transition-all active:scale-95 flex items-center justify-center shadow-2xl group-hover:bg-stone-700"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WisdomChat;
