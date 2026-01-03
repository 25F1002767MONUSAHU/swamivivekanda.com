
import React, { useState } from 'react';

const PhilosophyHub: React.FC = () => {
  const [activeYoga, setActiveYoga] = useState(0);

  const yogaDetails = [
    {
      title: "Karma Yoga",
      aspect: "The Path of Action",
      desc: "Selfless action without attachment to results. Vivekananda presented it as the ideal for active people in worldly affairs.",
      principles: [
        "Perform duty without desire for personal gain",
        "Work as an offering to God",
        "Non-attachment to results brings freedom",
        "Life itself is religion; to labor is to pray"
      ],
      technical: "Based on the Bhagavad Gita principle: 'To work you have the right, but not to the fruits thereof.'"
    },
    {
      title: "Bhakti Yoga",
      aspect: "The Path of Devotion",
      desc: "The science of higher love. Transmuting emotions into divine devotion. Driven by love, not fear.",
      principles: [
        "Love for love's sake, without bargaining",
        "The five Bhavas (attitudes of the devotee)",
        "God can be worshipped in any name or form",
        "Service to humanity is the highest form of devotion"
      ],
      technical: "Bhakti is a succession of mental efforts at religious realization ending in supreme intensity of love."
    },
    {
      title: "Raja Yoga",
      aspect: "The Path of Meditation",
      desc: "Scientific control of the mind. Systematic method of exploring consciousness through internal focus.",
      principles: [
        "Yama & Niyama (Ethical foundations)",
        "Asana & Pranayama (Physical/Breath control)",
        "Pratyahara (Withdrawal of senses)",
        "Samadhi (Transcendental union)"
      ],
      technical: "Based on Patanjali's Yoga Sutras. Presented as a scientific method verifiable through experience."
    },
    {
      title: "Jnana Yoga",
      aspect: "The Path of Knowledge",
      desc: "Discriminative wisdom. Rigorous philosophical analysis to distinguish between the real and unreal.",
      principles: [
        "Study of sacred texts and inquiry",
        "Discrimination between Self and non-self",
        "Detachment from material identification",
        "Realization of identity with Brahman (The Absolute)"
      ],
      technical: "The path for the intellectual thinker. Uses reasoning as a bridge to something higher than intellect."
    }
  ];

  return (
    <div className="py-12 animate-in fade-in duration-1000 space-y-32">
      <section className="text-center space-y-10 max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">Practical <span className="text-orange-600">Vedanta.</span></h2>
        <p className="text-stone-400 text-2xl font-light leading-relaxed">
          The democratization of spirituality. Swamiji taught that divinity is the inherent potential of <span className="text-white font-medium">every soul</span>, and religion must be carried into the streets and the home.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-4">
            {yogaDetails.map((yoga, i) => (
                <button
                    key={i}
                    onClick={() => setActiveYoga(i)}
                    className={`w-full p-10 rounded-[3rem] text-left transition-all group ${
                        activeYoga === i ? 'bg-orange-600 text-white shadow-2xl' : 'glass-panel border-white/5 text-stone-500 hover:text-stone-200'
                    }`}
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold block mb-2 opacity-60">{yoga.aspect}</span>
                    <h3 className="text-4xl font-serif font-bold">{yoga.title}</h3>
                </button>
            ))}
        </div>

        <div className="lg:col-span-8">
            <div className="glass-panel p-16 rounded-[4rem] border-white/10 h-full flex flex-col justify-between space-y-12">
                <div className="space-y-8">
                    <h4 className="text-5xl font-serif text-white">{yogaDetails[activeYoga].title}</h4>
                    <p className="text-stone-300 text-2xl font-light italic leading-relaxed">
                        {yogaDetails[activeYoga].desc}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {yogaDetails[activeYoga].principles.map((p, j) => (
                            <div key={j} className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                <span className="text-stone-400 text-lg font-light leading-tight">{p}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-8 bg-stone-950 rounded-3xl border border-white/5">
                    <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-3">TECHNICAL BASIS</p>
                    <p className="text-stone-500 text-sm italic">{yogaDetails[activeYoga].technical}</p>
                </div>
            </div>
        </div>
      </div>

      <section className="bg-orange-600/5 p-20 rounded-[5rem] border border-orange-500/10 text-center space-y-12">
        <h3 className="text-5xl font-serif text-white">The Unity of Souls</h3>
        <p className="text-stone-400 text-xl font-light leading-relaxed max-w-3xl mx-auto">
            "The infinite oneness of the soul is the eternal sanction of all morality. No distinction, henceforth, between sacred and secular. Life is itself religion."
        </p>
        <div className="flex justify-center gap-12">
            <div className="text-center">
                <span className="text-orange-500 text-4xl font-bold font-serif">1</span>
                <p className="text-stone-500 uppercase text-[10px] mt-2 tracking-widest font-bold">REALITY</p>
            </div>
            <div className="text-center">
                <span className="text-orange-500 text-4xl font-bold font-serif">∞</span>
                <p className="text-stone-500 uppercase text-[10px] mt-2 tracking-widest font-bold">POTENTIAL</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyHub;
