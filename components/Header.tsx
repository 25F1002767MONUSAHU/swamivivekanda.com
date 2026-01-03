
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
      case AppView.DASHBOARD: return 'The Grand Portal';
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
      case AppView.CHRONICLES: return 'The Journey of an Immortal Soul';
      case AppView.WISDOM_CHAT: return 'Conversations with Eternal Truth';
      case AppView.YOGA_STUDIO: return 'Pathways to Self-Realization';
      case AppView.SCRIBE: return 'Transcribing Thought into Action';
      case AppView.EXPLORER: return 'Seeking the Light Worldwide';
      default: return 'Modern Vedanta';
    }
  };

  return (
    <header className="h-28 px-12 flex items-center justify-between sticky top-0 z-40 transition-all duration-500 bg-transparent">
      <div className="flex items-center gap-8">
        <button 
          onClick={toggleSidebar} 
          className="w-12 h-12 flex items-center justify-center rounded-2xl glass-panel border-white/5 text-stone-400 hover:text-white hover:border-orange-500/30 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="space-y-1">
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight">{getTitle()}</h1>
          <p className="text-[10px] text-stone-500 uppercase tracking-[0.5em] font-bold">{getSubtitle()}</p>
        </div>
      </div>
      
      <div className="hidden sm:flex items-center gap-6">
        <div className="flex -space-x-3">
           {[1,2,3].map(i => (
             <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-950 bg-stone-900 flex items-center justify-center text-xs font-bold text-stone-600">
               {i}
             </div>
           ))}
        </div>
        <div className="px-6 py-2.5 rounded-full border border-orange-500/20 bg-orange-500/5 flex items-center gap-3 backdrop-blur-xl group cursor-help">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_rgba(249,115,22,1)]" />
          <span className="text-[9px] font-bold text-orange-200 uppercase tracking-[0.3em]">Direct Guidance Active</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
