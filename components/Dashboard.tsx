
import React from 'react';
import { AppView } from '../types';

interface DashboardProps {
  onViewChange: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  return (
    <div className="space-y-64 pb-64 -mt-10 -mx-8 select-none overflow-hidden mesh-bg min-h-screen">
      
      {/* 1. HERO PORTAL: THE MONOLITH */}
      <section className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden">
        {/* Layered Background Depth */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10" />
          
          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-orange-600/5 blur-[250px] rounded-full animate-pulse" />
          
          {/* Floating V Fragment */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
             <span className="text-[70vw] font-serif font-black text-white select-none leading-none -translate-y-20">V</span>
          </div>

          {/* Rotating Celestial Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <svg className="w-[1000px] h-[1000px] animate-rotate-slow" viewBox="0 0 100 100">
              <path id="heroPath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
              <text className="text-[2px] font-bold uppercase tracking-[1em] fill-orange-500 font-serif">
                <textPath xlinkHref="#heroPath">
                  THE SOUL IS ETERNAL • KNOWLEDGE IS THE GOAL • STRENGTH IS RELIGION • LOVE IS THE LAW • 
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-7xl reveal">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-orange-500" />
              <span className="text-orange-500 uppercase tracking-[1em] font-medium text-[9px]">Sovereign Archive</span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-orange-500" />
            </div>
            
            <h1 className="text-[14vw] md:text-[12rem] font-serif font-black text-white tracking-tighter leading-[0.8] mb-12">
              VIVEKA<br/>
              <span className="text-reveal-gold italic font-light italic">NANDA.</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-16">
            <p className="text-2xl md:text-4xl text-stone-300 font-serif italic leading-relaxed font-light">
              "The history of the world is the history of a few men who had faith in themselves."
            </p>

            <div className="flex flex-wrap justify-center gap-8 pt-10">
              <button 
                onClick={() => onViewChange(AppView.CHRONICLES)}
                className="px-16 py-6 saffron-gradient text-white font-bold rounded-full hover:scale-105 active:scale-95 shadow-[0_30px_70px_rgba(234,88,12,0.4)] transition-all flex items-center gap-4 text-xl group"
              >
                Unveil the Legacy
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button 
                onClick={() => onViewChange(AppView.PHILOSOPHY)}
                className="px-16 py-6 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all text-xl glass-panel group"
              >
                The Four Pillars
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 z-20">
          <span className="text-[9px] uppercase tracking-[0.6em] font-bold">Descend into Truth</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
      </section>

      {/* 2. THE PHILOSOPHICAL GALLERY - ASYMMETRIC GRID */}
      <section className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-7xl font-serif font-black text-white leading-none">Paths to <span className="text-orange-600">Freedom.</span></h2>
            <p className="text-stone-400 text-2xl font-light leading-relaxed">Vivekananda's synthesis of yoga—the head, heart, hand, and soul—creating the complete human.</p>
          </div>
          <div className="p-10 glass-card rounded-[3rem] border-white/5 bg-orange-600/5 saffron-glow">
             <p className="text-white font-serif text-3xl italic leading-snug">"Each soul is potentially divine. The goal is to manifest this divinity within."</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div 
            onClick={() => onViewChange(AppView.PHILOSOPHY)}
            className="lg:col-span-8 h-[700px] glass-card p-20 rounded-[5rem] flex flex-col justify-between group cursor-pointer overflow-hidden relative"
          >
            <div className="absolute -top-20 -right-20 p-16 text-[35rem] font-serif text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 group-hover:-translate-x-10 transition-all duration-1000 select-none">ॐ</div>
            <div className="space-y-8 relative z-10">
               <span className="text-orange-500 font-bold tracking-[0.5em] text-[10px] uppercase">UNIVERSAL SCIENCE</span>
               <h3 className="text-7xl font-serif font-black text-white leading-tight">Practical <br/> Vedanta.</h3>
               <p className="text-stone-400 text-2xl font-light leading-relaxed max-w-lg">
                 Spirituality that works in the laboratory of life. Not a set of dogmas, but a manual for living.
               </p>
            </div>
            <div className="flex items-center gap-6 relative z-10">
               <div className="w-20 h-[1px] bg-orange-500 group-hover:w-32 transition-all duration-700" />
               <span className="text-[10px] font-black tracking-[0.3em] text-white">CHOOSE YOUR PATH</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-10">
            <div 
              onClick={() => onViewChange(AppView.SOCIAL_VISION)}
              className="flex-1 glass-card p-12 rounded-[4rem] group cursor-pointer flex flex-col justify-center gap-6 border-stone-800"
            >
              <span className="text-orange-500 font-bold tracking-[0.3em] text-[9px] uppercase">SOCIAL REFORM</span>
              <h4 className="text-4xl font-serif font-bold text-white group-hover:text-orange-500 transition-colors">The Social <br/> Visionary</h4>
              <p className="text-stone-500 text-lg leading-relaxed font-light">Education, equality, and the end of social privilege.</p>
            </div>
            <div 
              onClick={() => onViewChange(AppView.INSTITUTIONS)}
              className="flex-1 saffron-gradient p-12 rounded-[4rem] group cursor-pointer hover:scale-[1.03] transition-all duration-700 shadow-2xl shadow-orange-900/30 flex flex-col justify-center gap-6"
            >
              <span className="text-white/60 font-bold tracking-[0.3em] text-[9px] uppercase">ACTIVE MISSION</span>
              <h4 className="text-4xl font-serif font-bold text-white">Service to <br/> Humanity</h4>
              <p className="text-white/80 text-lg leading-relaxed font-light">"Atmano Mokshartham Jagaddhitaya Cha"</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE "CHICAGO" CINEMATIC SPOTLIGHT */}
      <section className="relative py-64 bg-stone-900/20">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-orange-500/10 rounded-full animate-rotate-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-orange-500/5 rounded-full animate-rotate-slow [animation-direction:reverse]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-10 text-center space-y-20 relative z-10">
            <div className="space-y-6">
                <span className="text-orange-500 font-bold tracking-[0.8em] text-[10px] uppercase block">THE VOICE OF THE EAST</span>
                <h2 className="text-8xl md:text-[11rem] font-serif text-white font-black leading-none tracking-tighter">
                  SISTERS <span className="italic font-light">&</span> <br/> BROTHERS.
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-12">
                <div className="space-y-4">
                    <h5 className="text-orange-500 font-bold text-xs uppercase tracking-widest">Global Recognition</h5>
                    <p className="text-stone-400 font-light leading-relaxed">Declared the most popular and influential figure at the 1893 Parliament of Religions.</p>
                </div>
                <div className="space-y-4 border-l border-white/10 pl-12">
                    <h5 className="text-orange-500 font-bold text-xs uppercase tracking-widest">Universal Message</h5>
                    <p className="text-stone-400 font-light leading-relaxed">He taught that all religions lead to the same truth, as many rivers lead to one ocean.</p>
                </div>
                <div className="space-y-4 border-l border-white/10 pl-12">
                    <h5 className="text-orange-500 font-bold text-xs uppercase tracking-widest">Cultural Bridge</h5>
                    <p className="text-stone-400 font-light leading-relaxed">Integrated Western science with Eastern spirituality for the modern mind.</p>
                </div>
            </div>

            <button 
              onClick={() => onViewChange(AppView.CHRONICLES)}
              className="mt-12 px-14 py-5 bg-white text-black font-black rounded-full hover:bg-orange-500 hover:text-white transition-all text-xs tracking-[0.4em] uppercase"
            >
              Explore the Chronicles
            </button>
        </div>
      </section>

      {/* 4. THE COMPLETE ARCHIVE - IMMERSIVE PREVIEW */}
      <section className="max-w-7xl mx-auto px-10 space-y-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-6">
            <span className="text-orange-500 font-bold tracking-[0.6em] text-[11px] uppercase">VIVEKANANDA'S COMPLETE WORKS</span>
            <h3 className="text-8xl font-serif font-black text-white tracking-tighter">The Archive.</h3>
          </div>
          <p className="text-stone-500 max-w-md text-xl font-light leading-relaxed">
            Every lecture, letter, and poem. A digital library of nine volumes containing the essence of the eternal soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Raja Yoga", cat: "MEDITATION", id: AppView.LIBRARY, icon: "🧘" },
            { title: "Karma Yoga", cat: "ACTION", id: AppView.LIBRARY, icon: "⚡" },
            { title: "Jnana Yoga", cat: "WISDOM", id: AppView.LIBRARY, icon: "💡" },
            { title: "Bhakti Yoga", cat: "DEVOTION", id: AppView.LIBRARY, icon: "❤️" }
          ].map((item, i) => (
            <div 
              key={i}
              onClick={() => onViewChange(item.id)}
              className="glass-card p-12 rounded-[4rem] group cursor-pointer flex flex-col gap-10"
            >
              <div className="text-5xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">{item.icon}</div>
              <div className="space-y-4">
                  <p className="text-stone-600 font-black text-[9px] tracking-[0.4em] uppercase group-hover:text-orange-500 transition-colors">{item.cat}</p>
                  <h5 className="text-3xl font-serif text-white">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GRAND MASTERPIECE FOOTER */}
      <footer className="pt-40 pb-64 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-20 relative z-10 px-6">
          <div className="w-24 h-24 saffron-gradient rounded-3xl mx-auto flex items-center justify-center shadow-2xl ring-[12px] ring-orange-500/5 hover:scale-110 transition-transform duration-700">
            <span className="text-white font-serif font-black text-5xl">V</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-12">
             {['LEGACY', 'MISSION', 'ORACLE', 'CHRONICLES', 'EXPLORER'].map((nav, i) => (
               <button 
                key={i}
                onClick={() => onViewChange(AppView.DASHBOARD)} // Mock navigation
                className="text-stone-600 text-[11px] font-black uppercase tracking-[0.6em] hover:text-orange-500 hover:translate-y-[-2px] transition-all"
               >
                 {nav}
               </button>
             ))}
          </nav>

          <div className="space-y-6">
            <div className="h-[1px] w-40 bg-stone-900 mx-auto" />
            <p className="text-[11px] text-stone-700 font-bold uppercase tracking-[0.5em]">IMMORTAL TRUTH • ETERNAL WISDOM • 2025</p>
            <p className="text-stone-500 italic font-serif text-lg">"Be bold and face the Truth!"</p>
          </div>
        </div>

        {/* Floating Om Icon */}
        <div className="absolute bottom-20 right-20 text-[15rem] font-serif text-white opacity-[0.02] pointer-events-none">🕉️</div>
      </footer>
    </div>
  );
};

export default Dashboard;
