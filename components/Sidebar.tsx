
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
    { id: AppView.WISDOM_CHAT, label: 'Wisdom Oracle', icon: '✨' },
    { id: AppView.YOGA_STUDIO, label: 'Four Yogas', icon: '🧘' },
    { id: AppView.SCRIBE, label: 'The Scribe', icon: '✍️' },
    { id: AppView.EXPLORER, label: 'Global Archive', icon: '🌐' },
  ];

  return (
    <aside className={`${isOpen ? 'w-72' : 'w-24'} flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] hidden md:flex flex-col p-4 bg-transparent z-50`}>
      <div className="flex-1 glass-panel rounded-[3rem] border-white/5 flex flex-col overflow-hidden">
        <div className="p-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl saffron-gradient flex items-center justify-center flex-shrink-0 shadow-2xl shadow-orange-500/20">
            <span className="text-white font-serif font-bold text-2xl">V</span>
          </div>
          {isOpen && (
            <div className="animate-in fade-in slide-in-from-left-4 duration-700">
              <span className="text-xl font-serif font-bold text-white tracking-widest">VIVEKA</span>
              <p className="text-[8px] text-orange-500 uppercase tracking-[0.4em] font-bold mt-1">Wisdom Path</p>
            </div>
          )}
        </div>

        <nav className="flex-1 px-4 space-y-3 mt-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group relative overflow-hidden ${
                currentView === item.id 
                  ? 'bg-orange-500/10 text-orange-500 shadow-[inset_0_0_20px_rgba(249,115,22,0.05)]' 
                  : 'text-stone-500 hover:text-stone-200 hover:bg-white/5'
              }`}
            >
              <span className={`text-xl transition-transform duration-500 group-hover:scale-110 ${currentView === item.id ? 'grayscale-0' : 'grayscale opacity-50'}`}>
                {item.icon}
              </span>
              {isOpen && <span className="font-medium tracking-wide text-sm">{item.label}</span>}
              {currentView === item.id && (
                <div className="absolute left-0 w-1 h-6 bg-orange-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-white/5">
          {isOpen ? (
            <div className="animate-in fade-in duration-1000">
              <p className="text-[9px] text-stone-600 uppercase tracking-[0.6em] font-bold leading-relaxed">
                "Strength is Life"
              </p>
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
