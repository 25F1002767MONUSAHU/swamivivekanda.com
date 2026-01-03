
import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, isSidebarOpen, toggleSidebar }) => {
  const getTitle = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return 'Grand Home';
      case AppView.CHRONICLES: return 'Life Chronicles';
      case AppView.WISDOM_CHAT: return 'Sacred Dialogue';
      case AppView.YOGA_STUDIO: return 'The Four Pillars';
      case AppView.SCRIBE: return 'Philosopher\'s Desk';
      case AppView.EXPLORER: return 'Global Archive';
      default: return 'Viveka';
    }
  };

  const getSubtitle = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return 'Arise, Awake, and Stop Not';
      case AppView.CHRONICLES: return 'THE JOURNEY OF AN IMMORTAL SOUL';
      case AppView.WISDOM_CHAT: return 'CONVERSATIONS WITH ETERNAL TRUTH';
      case AppView.YOGA_STUDIO: return 'PATHWAYS TO SELF-REALIZATION';
      case AppView.SCRIBE: return 'TRANSCRIBING THOUGHT INTO ACTION';
      case AppView.EXPLORER: return 'SEEKING THE LIGHT WORLDWIDE';
      default: return 'MODERN VEDANTA';
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
      
      <div className="hidden sm:flex items-center gap-6">
        <div className="flex gap-2">
           {[1,2,3].map(i => (
             <div key={i} className={`w-10 h-10 rounded-full border border-white/10 ${i === 2 ? 'bg-stone-800' : 'bg-stone-900/30'} flex items-center justify-center text-xs font-bold text-stone-500`}>
               {i}
             </div>
           ))}
        </div>
        <div className="px-5 py-2.5 rounded-full border border-orange-500/20 bg-orange-500/5 flex items-center gap-3 backdrop-blur-xl group cursor-help">
          <div className="w-2 h-2 rounded-full bg-orange-600 shadow-[0_0_10px_rgba(249,115,22,1)]" />
          <span className="text-[10px] font-bold text-orange-200 uppercase tracking-[0.2em]">DIRECT GUIDANCE ACTIVE</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
