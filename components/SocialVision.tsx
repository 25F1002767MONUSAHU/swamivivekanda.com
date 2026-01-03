
import React from 'react';

const SocialVision: React.FC = () => {
  return (
    <div className="py-12 animate-in fade-in duration-1000 space-y-32">
      <section className="text-center space-y-8">
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">Man-Making <span className="text-orange-600">Mission.</span></h2>
        <p className="text-stone-500 uppercase tracking-[0.8em] font-bold text-xs">SOCIAL REFORMS & EMPOWERMENT</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
            <div className="space-y-4">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">A Wing of Sovereignty</span>
                <h3 className="text-5xl font-serif text-white">Women's Empowerment</h3>
            </div>
            <p className="text-stone-400 text-xl font-light leading-relaxed italic">
                "There is no chance for the welfare of the world unless the condition of women is improved. It is not possible for a bird to fly on only one wing."
            </p>
            <p className="text-stone-500 font-light leading-relaxed">
                Vivekananda argued that without uplifting women, India could never progress. He advocated for giving women education and autonomy: "Educate your women first and leave them to themselves; then they will tell you what reforms are necessary for them."
            </p>
            <div className="glass-panel p-8 rounded-3xl border-white/5">
                <p className="text-stone-300 text-sm font-medium">Margaret Noble (Sister Nivedita) became the embodiment of this vision, establishing schools that blended Indian traditions with Western methods.</p>
            </div>
        </div>
        <div className="h-[600px] bg-stone-900/40 rounded-[4rem] border border-white/5 overflow-hidden flex items-center justify-center p-20 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent" />
            <div className="relative text-center space-y-6">
                <span className="text-8xl block group-hover:scale-110 transition-transform">⚖️</span>
                <h4 className="text-white font-serif text-3xl italic">"Educate & Leave Alone"</h4>
            </div>
        </div>
      </div>

      <section className="space-y-16">
        <div className="text-center">
            <h3 className="text-5xl font-serif text-white">The Myth of Hereditary Caste</h3>
            <p className="text-stone-500 font-light max-w-2xl mx-auto mt-4">Vivekananda vehemently criticized the hereditary system of his time as a social custom opposed to religion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="glass-panel p-12 rounded-[3.5rem] border-white/5 space-y-6 hover:bg-orange-600/5 transition-colors">
                <h5 className="text-orange-500 font-bold text-lg">Quality over Birth</h5>
                <p className="text-stone-400 font-light leading-relaxed">Originally based on Gunas (aptitude), not blood. Sages like Vyasa and Narada had uncertain parentage yet attained spiritual greatness.</p>
            </div>
            <div className="glass-panel p-12 rounded-[3.5rem] border-white/5 space-y-6 hover:bg-orange-600/5 transition-colors">
                <h5 className="text-orange-500 font-bold text-lg">National Sin</h5>
                <p className="text-stone-400 font-light leading-relaxed">Called the neglect of the masses India's greatest sin. "Foreign conquest trodden them down for centuries; they have forgotten they are human."</p>
            </div>
            <div className="glass-panel p-12 rounded-[3.5rem] border-white/5 space-y-6 hover:bg-orange-600/5 transition-colors">
                <h5 className="text-orange-500 font-bold text-lg">Daridra Narayana</h5>
                <p className="text-stone-400 font-light leading-relaxed">God in the form of the poor. Service to the miserable, the weak, and the poor is the highest form of worship.</p>
            </div>
        </div>
      </section>

      <div className="bg-stone-950 p-24 rounded-[5rem] text-center space-y-10 border border-white/5">
        <h3 className="text-5xl font-serif text-white">Education: The Manifestation</h3>
        <p className="text-stone-400 text-xl font-light italic max-w-3xl mx-auto">
            "Education is not the amount of information that is put into your brain... we want that education by which character is formed, strength of mind is increased, and one can stand on one's own feet."
        </p>
        <div className="flex flex-wrap justify-center gap-16 pt-10 opacity-60">
            <div className="space-y-2">
                <p className="text-white font-serif text-2xl">Man-Making</p>
                <p className="text-xs tracking-widest text-stone-600">CHARACTER</p>
            </div>
            <div className="space-y-2">
                <p className="text-white font-serif text-2xl">Holistic</p>
                <p className="text-xs tracking-widest text-stone-600">PHYSICAL/MENTAL</p>
            </div>
            <div className="space-y-2">
                <p className="text-white font-serif text-2xl">Mass Literacy</p>
                <p className="text-xs tracking-widest text-stone-600">EQUALITY</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialVision;
