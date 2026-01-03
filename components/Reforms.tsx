
import React from 'react';

const Reforms: React.FC = () => {
  return (
    <div className="space-y-24 py-12 animate-in fade-in duration-1000">
      <div className="text-center space-y-6 mb-12">
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">Social <span className="text-orange-600">Vision.</span></h2>
        <div className="flex items-center justify-center gap-6">
           <div className="h-[1px] w-12 bg-stone-800" />
           <p className="text-stone-500 uppercase tracking-[0.8em] font-bold text-[10px]">THE RECONSTRUCTION OF HUMANITY</p>
           <div className="h-[1px] w-12 bg-stone-800" />
        </div>
      </div>

      {/* Section 1: Education */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
            <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs">Foundation of Progress</span>
            <h3 className="text-5xl font-serif text-white">Education as <br/> Manifestation</h3>
            <p className="text-stone-400 text-xl font-light leading-relaxed">
              "Education is the manifestation of perfection already in man." Vivekananda rejected the notion that education meant filling an empty vessel. Instead, it should draw out the inherent potential.
            </p>
            <div className="space-y-4">
                {[
                    "Character-building: The primary goal",
                    "Life-centered: Preparing for real-world challenges",
                    "Mass education: Accessible to all, not just the elite",
                    "National Roots: Based on Indian values while learning from the West"
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                        <span className="text-stone-300 font-light">{item}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="glass-panel p-16 rounded-[4rem] border-white/5 bg-orange-600/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 text-orange-600/5 text-[15rem] font-serif transition-colors">ED</div>
            <p className="text-stone-200 text-2xl font-serif italic leading-relaxed relative z-10">
                "We want that education by which character is formed, strength of mind is increased, the intellect is expanded, and by which one can stand on one's own feet."
            </p>
        </div>
      </section>

      {/* Section 2: Women's Empowerment */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 glass-panel p-16 rounded-[4rem] border-white/5 bg-stone-900/40 text-center">
            <h4 className="text-orange-500 uppercase tracking-widest text-[10px] font-bold mb-8">SISTER NIVEDITA</h4>
            <p className="text-stone-300 font-light leading-relaxed">
                Margaret Noble (Sister Nivedita) became the embodiment of his vision. She opened schools for girls in Calcutta, blending Indian traditions with modern methods, and served during plagues and famines, proving that his ideals could be practically implemented.
            </p>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
            <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs">The Sovereign Soul</span>
            <h3 className="text-5xl font-serif text-white">The Wing of <br/> Sovereignty</h3>
            <p className="text-stone-400 text-xl font-light leading-relaxed">
              "There is no chance for the welfare of the world unless the condition of women is improved. It is not possible for a bird to fly on only one wing."
            </p>
            <p className="text-stone-500 leading-relaxed font-light">
                Vivekananda advocated for giving women education and autonomy, believing that "Educate your women first and leave them to themselves; then they will tell you what reforms are necessary."
            </p>
        </div>
      </section>

      {/* Section 3: Caste and Poverty */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-6">
            <h3 className="text-5xl font-serif text-white">Daridra Narayana</h3>
            <p className="text-stone-400 text-xl font-light leading-relaxed italic">
                "Where should you go to seek God—are not all the poor, the miserable, the weak, Gods? Why not worship them first?"
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-10 rounded-[3rem] border-white/5 space-y-4">
                <h4 className="text-orange-500 font-bold text-sm">Against Birth-Caste</h4>
                <p className="text-stone-400 text-sm font-light">
                    Postulated that the original Varna system was based on qualities (Gunas), not birth. Cited sages like Vyasa and Narada as proof that spiritual position is earned.
                </p>
            </div>
            <div className="glass-panel p-10 rounded-[3rem] border-white/5 space-y-4">
                <h4 className="text-orange-500 font-bold text-sm">National Sin</h4>
                <p className="text-stone-400 text-sm font-light">
                    Called the neglect of the masses India's greatest national sin. "Priest-power and foreign conquest have trodden them down for centuries."
                </p>
            </div>
            <div className="glass-panel p-10 rounded-[3rem] border-white/5 space-y-4">
                <h4 className="text-orange-500 font-bold text-sm">Service as Worship</h4>
                <p className="text-stone-400 text-sm font-light">
                    Coined the term 'Daridra Narayana' (God in the form of the poor). Transformed social service from charity into a rigorous spiritual practice.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Reforms;
