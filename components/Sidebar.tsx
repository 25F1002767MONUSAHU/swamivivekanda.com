
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
    { id: AppView.DASHBOARD, label: 'Portal Home', icon: '🏛️' },
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
    <aside className={`${isOpen ? 'w-80' : 'w-24'} flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] hidden lg:flex flex-col p-4 bg-transparent z-50`}>
      <div className="flex-1 glass-panel rounded-[3.5rem] border-white/5 flex flex-col overflow-hidden">
        <div className="p-10 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl saffron-gradient flex items-center justify-center flex-shrink-0 shadow-2xl shadow-orange-500/30 ring-4 ring-orange-500/10">
            <span className="text-white font-serif font-bold text-3xl">V</span>
          </div>
          {isOpen && (
            <div className="animate-in fade-in slide-in-from-left-6 duration-700">
              <span className="text-2xl font-serif font-bold text-white tracking-[0.15em]">VIVEKA</span>
              <p className="text-[8px] text-orange-500 uppercase tracking-[0.5em] font-bold mt-1">THE ETERNAL PATH</p>
            </div>
          )}
        </div>

        <nav className="flex-1 px-5 space-y-2 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-5 px-5 py-4 rounded-2xl transition-all group relative overflow-hidden ${
                currentView === item.id 
                  ? 'bg-orange-500/15 text-orange-500 shadow-[inset_0_0_30px_rgba(249,115,22,0.1)]' 
                  : 'text-stone-500 hover:text-stone-200 hover:bg-white/5'
              }`}
            >
              <span className={`text-2xl transition-transform duration-500 group-hover:scale-110 ${currentView === item.id ? 'grayscale-0' : 'grayscale opacity-60'}`}>
                {item.icon}
              </span>
              {isOpen && <span className="font-semibold tracking-wide text-sm">{item.label}</span>}
              {currentView === item.id && (
                <div className="absolute right-2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,1)]" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-10 border-t border-white/5">
          {isOpen ? (
            <div className="animate-in fade-in duration-1000 bg-stone-900/40 p-5 rounded-3xl border border-white/5">
              <p className="text-[10px] text-orange-500 uppercase tracking-[0.6em] font-bold leading-relaxed mb-2">
                DAILY MANTRAS
              </p>
              <p className="text-xs text-stone-400 italic font-light">"Arise, Awake, and Stop Not!"</p>
            </div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-orange-500/20 mx-auto" />
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
