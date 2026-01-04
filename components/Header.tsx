
import React from 'react';
import { AppView, Language } from '../types';

interface HeaderProps {
  currentView: AppView;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  lang: Language;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, isSidebarOpen, toggleSidebar, lang, toggleLanguage }) => {
  const isEn = lang === Language.EN;

  const getTitle = () => {
    if (isEn) {
      switch (currentView) {
        case AppView.DASHBOARD: return 'Grand Home';
        case AppView.CHRONICLES: return 'Life Chronicles';
        case AppView.WISDOM_CHAT: return 'Sacred Dialogue';
        case AppView.PHILOSOPHY: return 'The Four Pillars';
        case AppView.SOCIAL_VISION: return 'Social Vision';
        case AppView.INSTITUTIONS: return 'The Mission';
        case AppView.LIBRARY: return 'Complete Works';
        case AppView.LEGACY: return 'Global Legacy';
        case AppView.EXPLORER: return 'Global Archive';
        default: return 'Viveka';
      }
    } else {
      switch (currentView) {
        case AppView.DASHBOARD: return 'मुख्य पृष्ठ';
        case AppView.CHRONICLES: return 'जीवन इतिहास';
        case AppView.WISDOM_CHAT: return 'पावन संवाद';
        case AppView.PHILOSOPHY: return 'चार स्तंभ';
        case AppView.SOCIAL_VISION: return 'सामाजिक दृष्टि';
        case AppView.INSTITUTIONS: return 'मिशन';
        case AppView.LIBRARY: return 'संपूर्ण ग्रंथ';
        case AppView.LEGACY: return 'वैश्विक विरासत';
        case AppView.EXPLORER: return 'वैश्विक संग्रह';
        default: return 'विवेक';
      }
    }
  };

  const getSubtitle = () => {
    if (isEn) {
      switch (currentView) {
        case AppView.DASHBOARD: return 'Arise, Awake, and Stop Not';
        case AppView.CHRONICLES: return 'THE JOURNEY OF AN IMMORTAL SOUL';
        default: return 'MODERN VEDANTA';
      }
    } else {
      switch (currentView) {
        case AppView.DASHBOARD: return 'उठो, जागो और तब तक मत रुको';
        case AppView.CHRONICLES: return 'एक अमर आत्मा की यात्रा';
        default: return 'आधुनिक वेदांत';
      }
    }
  };

  return (
    <header className="h-28 px-12 flex items-center justify-between sticky top-0 z-40 transition-all duration-500 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-8">
        <button 
          onClick={toggleSidebar} 
          className="w-12 h-12 flex items-center justify-center rounded-2xl glass-panel border-white/10 text-stone-400 hover:text-white hover:border-orange-500/30 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="space-y-0.5">
          <h1 className="text-4xl font-serif font-bold text-white tracking-tight">{getTitle()}</h1>
          <p className="text-[10px] text-stone-500 uppercase tracking-[0.4em] font-bold">{getSubtitle()}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Language Switcher */}
        <button 
          onClick={toggleLanguage}
          className="px-6 py-2.5 rounded-full border border-white/10 glass-panel hover:border-orange-500/40 transition-all flex items-center gap-3 group active:scale-95"
        >
          <span className={`text-xs font-bold tracking-widest ${isEn ? 'text-white' : 'text-stone-500'}`}>EN</span>
          <div className="w-[1px] h-3 bg-stone-700" />
          <span className={`text-sm font-bold ${!isEn ? 'text-orange-500' : 'text-stone-500'}`}>हिन्दी</span>
        </button>

        <div className="hidden sm:flex px-5 py-2.5 rounded-full border border-orange-500/20 bg-orange-500/5 items-center gap-3 backdrop-blur-xl">
          <div className="w-2 h-2 rounded-full bg-orange-600 shadow-[0_0_10px_rgba(249,115,22,1)]" />
          <span className="text-[10px] font-bold text-orange-200 uppercase tracking-[0.2em]">{isEn ? 'GUIDANCE ACTIVE' : 'मार्गदर्शन सक्रिय'}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
