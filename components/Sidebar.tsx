
import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, isOpen, toggleSidebar }) => {
  const navItems = [
    { id: AppView.DASHBOARD, label: 'Grand Home', icon: '🏛️' },
    { id: AppView.CHRONICLES, label: 'Life Chronicles', icon: '📜' },
    { id: AppView.PHILOSOPHY, label: 'The Four Yogas', icon: '🧘' },
    { id: AppView.SOCIAL_VISION, label: 'Social Vision', icon: '⚖️' },
    { id: AppView.INSTITUTIONS, label: 'The Mission', icon: '🕍' },
    { id: AppView.LIBRARY, label: 'Complete Works', icon: '📚' },
    { id: AppView.LEGACY, label: 'Global Legacy', icon: '🌍' },
    { id: AppView.WISDOM_CHAT, label: 'Wisdom Oracle', icon: '✨' },
    { id: AppView.EXPLORER, label: 'Explorer', icon: '🌐' },
  ];

  return (
    <aside className={`${isOpen ? 'w-88' : 'w-24'} flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] hidden lg:flex flex-col p-6 bg-transparent z-50`}>
      <div className="flex-1 glass-card rounded-[4rem] border-white/5 flex flex-col overflow-hidden saffron-glow">
        
        <div className="p-12 flex items-center gap-6">
          <div className="w-16 h-16 rounded-[1.5rem] saffron-gradient flex items-center justify-center flex-shrink-0 shadow-2xl shadow-orange-500/40 ring-4 ring-orange-500/10 group cursor-pointer hover:rotate-12 transition-transform duration-500">
            <span className="text-white font-serif font-black text-4xl">V</span>
          </div>
          {isOpen && (
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <span className="text-3xl font-serif font-black text-white tracking-widest leading-none">VIVEKA</span>
              <p className="text-[8px] text-orange-500 uppercase tracking-[0.6em] font-black mt-2">The Eternal Light</p>
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
              <span className={`text-2xl transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 ${currentView === item.id ? 'grayscale-0' : 'grayscale opacity-40 group-hover:opacity-100'}`}>
                {item.icon}
              </span>
              {isOpen && <span className="font-black tracking-widest text-[10px] uppercase">{item.label}</span>}
              {currentView === item.id && (
                <div className="absolute right-4 w-2 h-2 bg-orange-600 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-12 border-t border-white/5">
          {isOpen ? (
            <div className="animate-in fade-in duration-1000 bg-stone-900/60 p-6 rounded-[2.5rem] border border-white/5">
              <p className="text-[9px] text-orange-500 uppercase tracking-[0.5em] font-black leading-relaxed mb-3">
                DAILY MANIFESTO
              </p>
              <p className="text-xs text-stone-400 italic font-serif leading-relaxed">"Arise, Awake, and Stop Not till the Goal is Reached!"</p>
            </div>
          ) : (
            <div className="w-3 h-3 rounded-full bg-orange-600/30 mx-auto animate-pulse shadow-2xl" />
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
