
import React from 'react';
import { AppView, Language } from '../types';

interface SidebarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  lang: Language;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, isOpen, toggleSidebar, lang }) => {
  const isEn = lang === Language.EN;

  const navItems = [
    { id: AppView.DASHBOARD, label: isEn ? 'Grand Home' : 'मुख्य पृष्ठ', icon: '🏛️' },
    { id: AppView.CHRONICLES, label: isEn ? 'Life Chronicles' : 'जीवन इतिहास', icon: '📜' },
    { id: AppView.PHILOSOPHY, label: isEn ? 'The Four Yogas' : 'चार स्तंभ', icon: '🧘' },
    { id: AppView.SOCIAL_VISION, label: isEn ? 'Social Vision' : 'सामाजिक दृष्टि', icon: '⚖️' },
    { id: AppView.INSTITUTIONS, label: isEn ? 'The Mission' : 'मिशन', icon: '🕍' },
    { id: AppView.LIBRARY, label: isEn ? 'Complete Works' : 'संपूर्ण ग्रंथ', icon: '📚' },
    { id: AppView.LEGACY, label: isEn ? 'Global Legacy' : 'वैश्विक विरासत', icon: '🌍' },
    { id: AppView.WISDOM_CHAT, label: isEn ? 'Wisdom Oracle' : 'पावन संवाद', icon: '✨' },
    { id: AppView.EXPLORER, label: isEn ? 'Explorer' : 'अन्वेषक', icon: '🌐' },
  ];

  return (
    <aside className={`${isOpen ? 'w-88' : 'w-24'} flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] hidden lg:flex flex-col p-6 bg-transparent z-50`}>
      <div className="flex-1 glass-card rounded-[4rem] border-white/5 flex flex-col overflow-hidden saffron-glow">
        
        <div className="p-12 flex items-center gap-6">
          <div className="w-16 h-16 rounded-[1.5rem] saffron-gradient flex items-center justify-center flex-shrink-0 shadow-2xl group cursor-pointer hover:rotate-12 transition-transform duration-500">
            <span className="text-white font-serif font-black text-4xl">V</span>
          </div>
          {isOpen && (
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <span className="text-3xl font-serif font-black text-white tracking-widest leading-none">VIVEKA</span>
              <p className="text-[8px] text-orange-500 uppercase tracking-[0.6em] font-black mt-2">{isEn ? 'The Eternal Light' : 'अनंत प्रकाश'}</p>
            </div>
          )}
        </div>

        <nav className="flex-1 px-6 space-y-1.5 mt-8 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-6 px-6 py-4 rounded-[2rem] transition-all group relative overflow-hidden ${
                currentView === item.id 
                  ? 'bg-orange-600/15 text-orange-500 shadow-[inset_0_0_40px_rgba(249,115,22,0.1)] border border-orange-500/10' 
                  : 'text-stone-500 hover:text-stone-200 hover:bg-white/5 border border-transparent'
              }`}
            >
              <span className={`text-2xl transition-all duration-700 ${currentView === item.id ? 'grayscale-0' : 'grayscale opacity-40 group-hover:opacity-100'}`}>
                {item.icon}
              </span>
              {isOpen && <span className={`tracking-widest ${isEn ? 'text-[10px] font-black uppercase' : 'text-sm font-bold'}`}>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-12 border-t border-white/5">
          {isOpen && (
            <div className="animate-in fade-in duration-1000 bg-stone-900/60 p-6 rounded-[2.5rem] border border-white/5">
              <p className="text-[9px] text-orange-500 uppercase tracking-[0.5em] font-black mb-3">
                {isEn ? 'DAILY MANIFESTO' : 'दैनिक मंत्र'}
              </p>
              <p className={`text-xs text-stone-400 ${isEn ? 'italic font-serif' : 'font-bold'}`}>
                {isEn ? '"Arise, Awake, and Stop Not!"' : '"उठो, जागो और तब तक मत रुको!"'}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
