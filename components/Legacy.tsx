
import React from 'react';

const Legacy: React.FC = () => {
  return (
    <div className="py-12 animate-in fade-in duration-1000 space-y-32">
      <section className="text-center space-y-8">
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">Global <span className="text-orange-600">Impact.</span></h2>
        <p className="text-stone-500 uppercase tracking-[0.8em] font-bold text-xs">ECHOES ACROSS CENTURIES</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
            <div className="space-y-6">
                <h3 className="text-4xl font-serif text-white">National Youth Day</h3>
                <p className="text-stone-400 text-lg leading-relaxed font-light">
                    In 1984, the Government of India declared January 12 as National Youth Day. Swamiji personified the eternal energy of the youth and their restless quest for truth.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-stone-900/40 rounded-3xl border border-white/5">
                    <p className="text-white font-serif text-2xl mb-2">Gandhi</p>
                    <p className="text-stone-500 text-xs font-light italic">"Loved my country a thousand-fold after reading him."</p>
                </div>
                <div className="p-8 bg-stone-900/40 rounded-3xl border border-white/5">
                    <p className="text-white font-serif text-2xl mb-2">Tesla</p>
                    <p className="text-stone-500 text-xs font-light italic">"Fascinated by Swamiji's views on Energy and Akasha."</p>
                </div>
            </div>
        </div>

        <div className="glass-panel p-16 rounded-[4rem] border-white/10 space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-orange-600/5 text-[10rem] font-serif">1893</div>
            <h3 className="text-4xl font-serif text-white italic">The World Stage</h3>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
                His message at the Parliament of Religions established the foundation for modern interfaith dialogue. He presented Hinduism not as primitive, but as a sophisticated philosophical system with universal relevance.
            </p>
            <div className="pt-8 border-t border-white/5">
                <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">Modern Relevance</p>
                <p className="text-stone-200 mt-2">Anti-extremism, Mental Health, Global Integration, and Social Justice.</p>
            </div>
        </div>
      </div>

      <div className="text-center space-y-12">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mx-auto animate-ping" />
        <h3 className="text-6xl font-serif text-white italic max-w-4xl mx-auto">"Strength is Life. Weakness is Death."</h3>
        <p className="text-stone-600 uppercase tracking-[1em] font-bold text-xs">VIVEKANANDA 1863-1902</p>
      </div>
    </div>
  );
};

export default Legacy;
