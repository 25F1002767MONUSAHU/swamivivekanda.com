
import React from 'react';
import { AppView } from '../types';

interface DashboardProps {
  onViewChange: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  return (
    <div className="space-y-48 pb-40 -mt-8 -mx-8 animate-in fade-in duration-1000 select-none bg-[#050505]">
      {/* 1. CINEMATIC HERO: THE VOID OF WISDOM */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background Atmosphere */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-orange-600/10 blur-[150px] rounded-full animate-blob mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-stone-900/40 blur-[180px] rounded-full animate-blob animation-delay-2000" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="flex flex-col items-center space-y-12">
            <div className="flex items-center gap-6 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-orange-500/50" />
              <span className="text-orange-500 uppercase tracking-[0.8em] font-bold text-[10px] md:text-xs">The Sovereign Voice of Vedanta</span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-orange-500/50" />
            </div>
            
            <h1 className="text-8xl md:text-[15rem] font-serif font-bold text-white tracking-tighter leading-none relative group transition-all duration-1000">
              VIVEKA
              <span className="block text-2xl md:text-4xl mt-4 text-orange-600 font-light tracking-[0.5em] italic">NANDA</span>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
            </h1>
            
            <p className="text-xl md:text-3xl text-stone-400 font-serif italic max-w-4xl mx-auto leading-relaxed opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              "Arise, awake, and stop not till the goal is reached."
            </p>

            <div className="flex flex-wrap justify-center gap-10 pt-12 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
              <button 
                onClick={() => onViewChange(AppView.CHRONICLES)}
                className="group relative px-16 py-6 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              >
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-3 text-lg">
                  Explore The Legacy
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </button>
              <button 
                onClick={() => onViewChange(AppView.WISDOM_CHAT)}
                className="px-16 py-6 border border-white/10 text-white font-bold rounded-full backdrop-blur-3xl hover:bg-white/5 transition-all active:scale-95 text-lg"
              >
                The Wisdom Oracle
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40">
          <div className="w-6 h-10 border-2 border-stone-800 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. THE CHRONICLE NARRATIVE: THE MAN-MAKING MISSION */}
      <section className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-none">
                A Journey <br /> of <span className="text-orange-600">Absolute Light.</span>
              </h2>
              <div className="h-[2px] w-40 saffron-gradient" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-stone-400 text-xl font-light leading-relaxed">
              <p>
                Born in 1863 as <span className="text-white font-medium italic">Narendranath Datta</span>, he emerged as the bridge between ancient Vedic wisdom and the modern scientific mind. His encounter with Sri Ramakrishna ignited a spiritual fire that would illuminate the world.
              </p>
              <p>
                His mission was <span className="text-orange-500 font-medium">"Man-making"</span>—the belief that divinity is already within every human being, waiting to be manifested through strength, character, and selfless service.
              </p>
            </div>

            <div className="glass-panel p-16 rounded-[4rem] border-white/5 bg-stone-900/20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 text-orange-600/5 text-[15rem] font-serif group-hover:text-orange-600/10 transition-colors">1893</div>
               <div className="relative z-10 space-y-8">
                  <span className="px-4 py-1 border border-orange-500/30 rounded-full text-orange-500 text-[10px] font-bold uppercase tracking-widest">Global Milestone</span>
                  <h3 className="text-4xl md:text-6xl font-serif font-bold text-white">The Chicago Triumph</h3>
                  <p className="text-stone-300 text-2xl font-serif italic leading-relaxed">
                    "Sisters and brothers of America!" With these words, a young monk from India dissolved the sectarian walls of the world, teaching universal tolerance and acceptance.
                  </p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-32">
            <div className="glass-panel rounded-[4rem] border-white/10 p-12 flex flex-col items-center text-center space-y-10 group hover:border-orange-500/30 transition-all duration-700 shadow-2xl">
              {/* Premium Om SVG Upgrade */}
              <div className="relative h-48 w-48">
                <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600/20 animate-spin-slow">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-24 h-24 text-orange-600 fill-current drop-shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                    <path d="M12.001 2.001c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM12 7a1 1 0 0 1 1 1v2.586l1.293-1.293a1 1 0 1 1 1.414 1.414L12.414 13l2.293 2.293a1 1 0 0 1-1.414 1.414L12 14.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L11.586 13 9.293 10.707a1 1 0 0 1 1.414-1.414L12 10.586V8a1 1 0 0 1 1-1z" />
                    {/* Symbol representing Unity/Om in abstract form */}
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize="6" className="font-serif">🕉️</text>
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-serif font-bold text-white tracking-widest uppercase">Atman</h4>
                <p className="text-stone-500 text-sm font-light leading-relaxed">"Each soul is potentially divine. The goal is to manifest this divinity."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PATHWAYS: INTERACTIVE EXPLORATION */}
      <section className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white leading-none">The <span className="text-stone-700 italic">Yogas.</span></h2>
            <p className="text-orange-500 font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs">Four paths to a single truth</p>
          </div>
          <p className="text-stone-500 text-lg max-w-md font-light italic text-right leading-relaxed">
            Swamiji integrated the Heart, the Head, the Hand, and the Soul into a unified science of living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Karma', sub: 'Action', desc: 'Selfless service as worship.', color: 'from-orange-600/30' },
            { name: 'Bhakti', sub: 'Devotion', desc: 'The science of higher love.', color: 'from-rose-600/30' },
            { name: 'Raja', sub: 'Mind', desc: 'Control of the inner psychic force.', color: 'from-indigo-600/30' },
            { name: 'Jnana', sub: 'Wisdom', desc: 'Realization through intellect.', color: 'from-amber-600/30' },
          ].map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onViewChange(AppView.YOGA_STUDIO)}
              className="group relative h-[650px] rounded-[4rem] overflow-hidden border border-white/5 hover:border-orange-500/40 transition-all duration-700 cursor-pointer shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-20 group-hover:opacity-100 transition-all duration-1000`} />
              <div className="absolute inset-0 bg-stone-950/40 group-hover:opacity-0 transition-opacity" />
              <div className="absolute inset-0 p-14 flex flex-col justify-end space-y-6">
                <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px]">{item.sub} Yoga</span>
                <h4 className="text-5xl font-serif font-bold text-white group-hover:tracking-wider transition-all duration-700">{item.name}</h4>
                <p className="text-stone-300 text-lg font-light opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                  {item.desc} Deep dive into the methodology of {item.name}.
                </p>
                <div className="pt-4">
                  <div className="h-[1px] w-0 group-hover:w-full bg-orange-500 transition-all duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISION FOR HUMANITY: REFORMS */}
      <section className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-panel p-20 rounded-[5rem] border-white/5 space-y-10 group hover:bg-orange-600/5 transition-colors">
            <h3 className="text-5xl font-serif font-bold text-white">Women's <br /> Sovereignty</h3>
            <p className="text-stone-400 text-xl font-light leading-relaxed">
              "There is no chance for the welfare of the world unless the condition of women is improved. It is not possible for a bird to fly on only one wing."
            </p>
            <div className="flex items-center gap-4 text-orange-500 font-bold tracking-widest text-xs">
              <span className="h-[1px] w-12 bg-orange-500" /> REFORMER VISION
            </div>
          </div>
          
          <div className="glass-panel p-20 rounded-[5rem] border-white/5 space-y-10 group hover:bg-white/5 transition-colors">
            <h3 className="text-5xl font-serif font-bold text-white">Education as <br /> Manifestation</h3>
            <p className="text-stone-400 text-xl font-light leading-relaxed">
              "Education is the manifestation of the perfection already in man." Swamiji championed an education that builds character and empowers the self.
            </p>
            <div className="flex items-center gap-4 text-white font-bold tracking-widest text-xs">
              <span className="h-[1px] w-12 bg-white" /> THE SCRIBE'S IDEAL
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMMORTAL FOOTER: INTERNATIONAL EXCELLENCE */}
      <footer className="pt-60 pb-24 text-center space-y-32">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-7xl md:text-9xl font-serif font-bold text-white italic opacity-80 leading-tight tracking-tighter">
            Strength is <span className="text-orange-600">Life.</span> <br /> Weakness is <span className="text-stone-800">Death.</span>
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <p className="text-stone-600 uppercase tracking-[1em] font-bold text-[10px]">The Eternal Legacy • Vivekananda 1863-1902</p>
          </div>
        </div>

        <div className="flex justify-center gap-20 text-stone-500 text-[10px] font-bold uppercase tracking-[0.5em]">
           <button onClick={() => onViewChange(AppView.CHRONICLES)} className="hover:text-white transition-colors">Chronicles</button>
           <button onClick={() => onViewChange(AppView.WISDOM_CHAT)} className="hover:text-white transition-colors">Wisdom</button>
           <button onClick={() => onViewChange(AppView.YOGA_STUDIO)} className="hover:text-white transition-colors">The Four Yogas</button>
        </div>
        
        <div className="space-y-4">
           <div className="flex justify-center gap-2">
             {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-600/30" />)}
           </div>
           <p className="text-[10px] text-stone-800 font-bold uppercase tracking-[0.3em]">Excellence Redefined • 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
