
import React from 'react';

const Institutions: React.FC = () => {
  return (
    <div className="py-12 animate-in fade-in duration-1000 space-y-32">
      <section className="text-center space-y-8">
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">The <span className="text-orange-600">Mission.</span></h2>
        <p className="text-stone-500 uppercase tracking-[0.8em] font-bold text-xs">RAMAKRISHNA ORDER & BELUR MATH</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="glass-panel p-16 rounded-[4rem] border-white/10 space-y-12 bg-stone-900/10">
            <div className="space-y-6">
                <h3 className="text-4xl font-serif text-white italic">The Consecration</h3>
                <p className="text-stone-400 text-lg leading-relaxed font-light">
                    On May 1, 1897, the Ramakrishna Mission was founded to propagate Practical Vedanta and provide social service—hospitals, relief centers, and schools.
                </p>
            </div>
            <div className="space-y-4">
                <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">Motto of the Order</p>
                <p className="text-3xl font-serif text-white">"Atmano Mokshartham Jagaddhitaya Cha"</p>
                <p className="text-stone-500 italic">"For one's own liberation and for the welfare of the world."</p>
            </div>
        </div>

        <div className="space-y-12">
            <h4 className="text-3xl font-serif text-white">The Symbolism of the Emblem</h4>
            <div className="grid grid-cols-2 gap-8">
                {[
                    { key: "Wavy Waters", val: "Karma (Action)" },
                    { key: "Lotus", val: "Bhakti (Devotion)" },
                    { key: "Rising Sun", val: "Jnana (Knowledge)" },
                    { key: "Serpent", val: "Raja Yoga / Kundalini" },
                    { key: "Swan", val: "Paramatman (The Self)" }
                ].map((item, i) => (
                    <div key={i} className="border-b border-white/5 pb-4 group">
                        <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">{item.key}</p>
                        <p className="text-stone-300 font-serif text-xl mt-1 group-hover:translate-x-2 transition-transform">{item.val}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <section className="bg-stone-950 p-20 rounded-[5rem] border border-white/5 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 text-orange-600/5 text-[12rem] font-serif pointer-events-none">BELUR</div>
        <div className="relative z-10 max-w-4xl space-y-8">
            <h3 className="text-5xl font-serif text-white">Belur Math: Architecture of Unity</h3>
            <p className="text-stone-400 text-xl font-light leading-relaxed">
                Swamiji designed the temple at Belur Math to incorporate elements from Hindu temples, Christian churches, Islamic mosques, and Buddhist stupas. It is a physical manifestation of the <span className="text-white font-medium">unity of all religions.</span>
            </p>
            <div className="flex gap-10 opacity-40 grayscale hover:grayscale-0 transition-all">
                <div className="h-1 w-20 bg-orange-500" />
                <div className="h-1 w-20 bg-stone-500" />
                <div className="h-1 w-20 bg-white" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Institutions;
