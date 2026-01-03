
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
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    const modelMsg: Message = { id: modelMsgId, role: 'model', text: '', timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);

    try {
      let fullText = '';
      const stream = geminiService.streamWisdom(userMsg.text);
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(m => m.id === modelMsgId ? { ...m, text: fullText } : m));
      }
    } catch (error) {
      setMessages(prev => prev.map(m => m.id === modelMsgId ? { ...m, text: 'The connection to the archives was interrupted.' } : m));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full glass-panel rounded-[3rem] border-white/5 overflow-hidden relative shadow-2xl bg-stone-900/10">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif font-bold text-white select-none">OM</div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 scroll-smooth relative z-10">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
            <div className={`flex gap-6 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-lg shadow-xl ${
                msg.role === 'user' ? 'bg-orange-600 text-white' : 'bg-stone-800 text-orange-500 border border-white/5'
              }`}>
                {msg.role === 'user' ? '👤' : 'V'}
              </div>
              <div className={`px-8 py-6 rounded-[2rem] shadow-2xl relative ${
                msg.role === 'user' 
                  ? 'bg-orange-600 text-white rounded-tr-none' 
                  : 'bg-stone-900/60 backdrop-blur-xl text-stone-200 border border-white/5 rounded-tl-none'
              }`}>
                <p className="text-lg md:text-xl whitespace-pre-wrap leading-relaxed font-light font-serif italic">
                  {msg.text || (isLoading && msg.role === 'model' ? 'Recalling wisdom...' : '')}
                </p>
                <div className={`mt-4 text-[9px] uppercase tracking-[0.3em] font-bold opacity-40 text-right ${msg.role === 'user' ? 'text-white' : 'text-stone-500'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start items-center gap-4 opacity-40">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">The Oracle is reflecting</span>
          </div>
        )}
      </div>

      <div className="p-10 bg-stone-950/40 border-t border-white/5 relative z-10">
        <div className="relative max-w-5xl mx-auto flex gap-6">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Search for the truth within..."
            className="flex-1 bg-stone-900/80 text-white rounded-full border border-white/5 px-10 py-5 text-lg focus:border-orange-500/40 outline-none transition-all placeholder:text-stone-600 shadow-2xl"
          />
          <button 
            onClick={handleSend} 
            disabled={!inputValue.trim() || isLoading} 
            className="w-16 h-16 bg-orange-600 hover:bg-orange-500 disabled:bg-stone-800 text-white rounded-full transition-all active:scale-90 flex items-center justify-center shadow-xl shadow-orange-600/20"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WisdomChat;
