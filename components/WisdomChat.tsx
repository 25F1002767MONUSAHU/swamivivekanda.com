
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message, Language } from '../types';

interface WisdomChatProps {
  lang: Language;
}

const WisdomChat: React.FC<WisdomChatProps> = ({ lang }) => {
  const isEn = lang === Language.EN;
  
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'model', 
      text: isEn 
        ? 'Namaste. I am a humble conduit for the teachings of Swami Vivekananda. In the silence of contemplation, what truth do you seek today?' 
        : 'नमस्ते। मैं स्वामी विवेकानंद की शिक्षाओं का एक विनम्र माध्यम हूँ। चिंतन के इस सन्नाटे में, आज आप कौन सा सत्य खोज रहे हैं?', 
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
      const promptWithLang = isEn ? text : `${text} (Please reply in Hindi)`;
      const stream = geminiService.streamWisdom(promptWithLang);
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(m => m.id === modelMsgId ? { ...m, text: fullText } : m));
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => prev.map(m => m.id === modelMsgId ? { ...m, text: isEn ? 'The connection was interrupted.' : 'कनेक्शन बाधित हो गया था।' } : m));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full rounded-[4rem] overflow-hidden relative shadow-2xl glass-card">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.02]">
         <span className="text-[50rem] font-serif font-black select-none">ॐ</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-12 md:p-20 space-y-16 scroll-smooth relative z-10 custom-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} reveal`}>
            <div className={`flex gap-6 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              <div className={`w-16 h-16 rounded-[1.5rem] flex-shrink-0 flex items-center justify-center font-serif font-black text-2xl shadow-2xl transition-all duration-700 ${
                msg.role === 'user' ? 'bg-orange-600 text-white border-2 border-[#050505]' : 'bg-stone-900 border border-white/10 text-stone-400'
              }`}>
                {msg.role === 'user' ? (isEn ? 'Me' : 'मैं') : 'V'}
              </div>

              <div className="flex flex-col gap-3">
                <div className={`px-12 py-10 rounded-[3rem] shadow-2xl relative border transition-all duration-1000 ${
                  msg.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-tr-[1rem] border-orange-500' 
                    : 'bg-stone-900/60 backdrop-blur-3xl text-stone-200 border-white/5 rounded-tl-[1rem] hover:border-orange-500/20'
                }`}>
                  <p className={`text-2xl md:text-3xl whitespace-pre-wrap leading-relaxed ${isEn ? 'font-serif italic font-light' : 'font-medium'}`}>
                    {msg.text || (isLoading && msg.role === 'model' ? '...' : '')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-16 bg-transparent relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto relative group">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={isEn ? "Seek the Light..." : "ज्ञान की खोज करें..."}
            className="w-full bg-[#111] text-white rounded-full border border-white/10 px-12 py-8 text-2xl focus:border-orange-500 focus:bg-[#151515] outline-none transition-all placeholder:text-stone-700 shadow-[0_20px_60px_rgba(0,0,0,0.8)] pr-28"
          />
          <button 
            onClick={handleSend} 
            disabled={!inputValue.trim() || isLoading} 
            className="absolute right-5 top-1/2 -translate-y-1/2 w-16 h-16 bg-orange-600 hover:bg-orange-500 text-white rounded-full transition-all active:scale-95 flex items-center justify-center shadow-2xl saffron-glow"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WisdomChat;
