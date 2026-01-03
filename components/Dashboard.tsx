
import React from 'react';
import { AppView } from '../types';

interface DashboardProps {
  onViewChange: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  return (
    <div className="space-y-48 pb-40 -mt-8 -mx-8 animate-in fade-in duration-1000 select-none bg-[#050505]">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-orange-600/10 blur-[150px] rounded-full animate-blob mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-stone-900/40 blur-[180px] rounded-full animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative z-10 text-center px-6 space-y-12">
          <div className="flex items-center justify-center gap-6 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-orange-500/50" />
            <span className="text-orange-500 uppercase tracking-[0.8em] font-bold text-xs">COMPREHENSIVE DIGITAL ARCHIVE</span>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-orange-500/50" />
          </div>
          
          <h1 className="text-8xl md:text-[16rem] font-serif font-bold text-white tracking-tighter leading-none relative group transition-all duration-1000">
            VIVEKA
            <span className="block text-2xl md:text-5xl mt-6 text-orange-600 font-light tracking-[0.5em] italic">NANDA</span>
          </h1>
          
          <p className="text-xl md:text-4xl text-stone-400 font-serif italic max-w-5xl mx-auto leading-relaxed opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            "Arise, awake, and stop not till the goal is reached."
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-12 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <button 
              onClick={() => onViewChange(AppView.CHRONICLES)}
              className="px-16 py-6 saffron-gradient text-white font-bold rounded-full hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(234,88,12,0.3)] transition-all flex items-center gap-4 text-xl"
            >
              Enter The Chronicles
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <button 
              onClick={() => onViewChange(AppView.LIBRARY)}
              className="px-16 py-6 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all text-xl"
            >
              The Complete Works
            </button>
          </div>
        </div>
      </section>

      {/* 2. SUMMARY PREVIEWS */}
      <section className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div 
            onClick={() => onViewChange(AppView.PHILOSOPHY)}
            className="glass-panel p-20 rounded-[5rem] border-white/5 space-y-8 cursor-pointer group hover:bg-orange-600/5 transition-all duration-700"
        >
            <span className="text-orange-500 font-bold tracking-widest text-xs uppercase">The Four Pillars</span>
            <h3 className="text-5xl font-serif text-white">The Yogas</h3>
            <p className="text-stone-400 text-xl font-light leading-relaxed">Karma, Bhakti, Raja, and Jnana. Deep dive into the methodology of spiritual science.</p>
        </div>
        <div 
            onClick={() => onViewChange(AppView.SOCIAL_VISION)}
            className="glass-panel p-20 rounded-[5rem] border-white/5 space-y-8 cursor-pointer group hover:bg-white/5 transition-all duration-700"
        >
            <span className="text-white font-bold tracking-widest text-xs uppercase">Reform & Vision</span>
            <h3 className="text-5xl font-serif text-white">Social Vision</h3>
            <p className="text-stone-400 text-xl font-light leading-relaxed">Education for the masses, women's empowerment, and the end of hereditary caste.</p>
        </div>
      </section>

      {/* 3. QUOTE SECTION */}
      <section className="py-40 bg-stone-900/20 text-center">
        <div className="max-w-4xl mx-auto space-y-12 px-10">
            <div className="h-[2px] w-20 saffron-gradient mx-auto" />
            <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight font-light">
                "Each soul is potentially divine. The goal is to manifest this divinity within."
            </h2>
            <div className="h-[2px] w-20 saffron-gradient mx-auto" />
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="pb-24 text-center space-y-12">
        <div className="flex justify-center gap-12 text-stone-600 text-[10px] font-bold uppercase tracking-[0.5em]">
           <button onClick={() => onViewChange(AppView.INSTITUTIONS)} className="hover:text-white transition-colors">Institutions</button>
           <button onClick={() => onViewChange(AppView.LEGACY)} className="hover:text-white transition-colors">Legacy</button>
           <button onClick={() => onViewChange(AppView.WISDOM_CHAT)} className="hover:text-white transition-colors">Oracle</button>
        </div>
        <p className="text-[10px] text-stone-800 font-bold uppercase tracking-[0.3em]">IMMORTAL GUIDE • EST. 2025</p>
      </footer>
    </div>
  );
};

export default Dashboard;
