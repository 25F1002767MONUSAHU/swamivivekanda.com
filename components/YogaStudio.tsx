
import React, { useState } from 'react';

interface YogaDetail {
  title: string;
  icon: string;
  subtitle: string;
  desc: string;
  principles: string[];
  quote: string;
  longDesc: string;
  technicalDetails?: string[];
}

const YogaStudio: React.FC = () => {
  const [selectedYoga, setSelectedYoga] = useState<YogaDetail | null>(null);

  const yogas: YogaDetail[] = [
    { 
      title: 'Karma Yoga', 
      icon: '⚡', 
      subtitle: 'The Path of Selfless Action', 
      desc: 'Selfless service without attachment to results. "To work you have the right, but not to the fruits thereof."',
      principles: [
        'Non-attachment to the fruits of labor',
        'Service to man is service to God',
        'Equality of all work',
        'Purity of motive'
      ],
      quote: "Every duty is holy, and devotion to duty is the highest form of the worship of God.",
      longDesc: "Karma Yoga is the path of action. It teaches us how to work in the world without being bound by the results of our actions. By performing our duties selflessly, we purify our hearts and eventually realize our true nature.",
      technicalDetails: [
        'Perform your duty without desire for personal gain',
        'Work becomes worship when done as an offering to God',
        'Non-attachment brings freedom even while acting',
        'The ideal practice for active people in worldly affairs'
      ]
    },
    { 
      title: 'Bhakti Yoga', 
      icon: '❤️', 
      subtitle: 'The Path of Devotion', 
      desc: 'Transmuting emotions into divine love. Approaching the Divine through the heart.',
      principles: [
        'Love for love\'s sake',
        'The five bhavas (attitudes)',
        'Constant remembrance',
        'Self-surrender'
      ],
      quote: "Bhakti is a series or succession of mental efforts at religious realization beginning with ordinary worship and ending in a supreme intensity of love for Ishvara.",
      longDesc: "Bhakti Yoga is the natural path for those who are emotional by nature. It is the science of higher love. It teaches us how to direct our emotions toward the Divine. Swamiji taught that Bhakti is the easiest path for the modern age.",
      technicalDetails: [
        'Love as the highest spiritual practice',
        'God can be approached through any name or form',
        'Devotion purifies the heart and leads to union',
        'Service to humanity is the highest form of devotion'
      ]
    },
    { 
      title: 'Raja Yoga', 
      icon: '🧘', 
      subtitle: 'The Path of Meditation', 
      desc: 'Scientific control of the mind through concentration and ethical living (Ashtanga Yoga).',
      principles: [
        'Ethical foundations (Yama/Niyama)',
        'Control of Prana (Breath)',
        'Concentration (Dharana)',
        'Super-consciousness (Samadhi)'
      ],
      quote: "Concentration is the essence of all knowledge; nothing can be done without it.",
      longDesc: "Raja Yoga is the 'Royal Path'. It is a scientific approach to spiritual realization. By controlling the mind and senses, the practitioner attains the highest state of consciousness.",
      technicalDetails: [
        'Yama: Non-violence, truthfulness, non-stealing',
        'Niyama: Purity, contentment, self-discipline',
        'Asana & Pranayama: Physical and breath control',
        'Pratyahara: Withdrawal of senses inward',
        'Dharana, Dhyana, Samadhi: The internal journey'
      ]
    },
    { 
      title: 'Jnana Yoga', 
      icon: '💡', 
      subtitle: 'The Path of Knowledge', 
      desc: 'The path of discriminative wisdom. Analyzing the Real from the Unreal through intellect.',
      principles: [
        'Discrimination (Viveka)',
        'Renunciation (Vairagya)',
        'The Six Treasures of mind control',
        'Intense longing for freedom'
      ],
      quote: "The goal of mankind is knowledge... that is the one ideal placed before us by Hindu philosophy.",
      longDesc: "Jnana Yoga is the path of the intellect. It involves deep philosophical inquiry into the nature of reality. The seeker uses the power of discrimination to distinguish the permanent from the impermanent.",
      technicalDetails: [
        'Study of sacred texts and philosophical inquiry',
        'Discrimination between self and non-self',
        'Detachment from material identification',
        'Direct realization of identity with Brahman'
      ]
    }
  ];

  if (selectedYoga) {
    return (
      <div className="animate-in fade-in zoom-in-95 duration-500 h-full">
        <button 
          onClick={() => setSelectedYoga(null)}
          className="mb-8 flex items-center gap-2 text-stone-500 hover:text-orange-500 transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Back to Pillars
        </button>

        <div className="glass-panel p-8 md:p-16 rounded-[3rem] border-stone-800 space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="space-y-4">
              <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">{selectedYoga.subtitle}</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">{selectedYoga.title}</h2>
            </div>
            <div className="text-8xl opacity-20">{selectedYoga.icon}</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="p-8 bg-stone-900/50 rounded-3xl border border-stone-800 italic text-xl text-stone-300 font-serif leading-relaxed">
                "{selectedYoga.quote}"
              </div>
              <div className="space-y-6">
                <h4 className="text-white font-bold text-lg uppercase tracking-widest border-b border-orange-500/30 pb-2 inline-block">The Deep Essence</h4>
                <p className="text-stone-400 text-lg leading-relaxed font-light">
                  {selectedYoga.longDesc}
                </p>
              </div>
              {selectedYoga.technicalDetails && (
                <div className="space-y-4 p-8 bg-orange-500/5 rounded-3xl border border-orange-500/10">
                  <h4 className="text-orange-500 font-bold text-xs uppercase tracking-widest">Methodology</h4>
                  <ul className="space-y-3">
                    {selectedYoga.technicalDetails.map((detail, idx) => (
                      <li key={idx} className="text-stone-300 text-sm flex gap-3">
                        <span className="text-orange-500">•</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Core Principles</h4>
              <div className="grid gap-4">
                {selectedYoga.principles.map((principle, idx) => (
                  <div key={idx} className="p-6 bg-stone-900/30 border border-stone-800/50 rounded-2xl flex items-center gap-4 group hover:bg-orange-500/5 hover:border-orange-500/20 transition-all">
                    <div className="w-8 h-8 rounded-full saffron-gradient flex items-center justify-center text-white text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-stone-200 font-medium">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-6 animate-in fade-in duration-700">
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <div className="inline-block px-4 py-1 border border-orange-500/20 rounded-full bg-orange-500/5">
          <span className="text-orange-500 text-[10px] uppercase font-bold tracking-[0.3em]">Spiritual Science</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">The Four Pillars</h2>
        <p className="text-stone-400 text-lg font-light leading-relaxed">
          Vivekananda taught that a complete human being needs a synthesis of all four paths: 
          <span className="text-white font-medium"> The Heart, The Head, The Hand, and The Soul.</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {yogas.map((yoga, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedYoga(yoga)}
            className="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group border-stone-800 hover:border-orange-500/40 transition-all duration-500 cursor-pointer hover:-translate-y-2 shadow-xl"
          >
            <div className="absolute top-0 right-0 p-8 text-7xl opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700">{yoga.icon}</div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4 block">{yoga.subtitle}</span>
            <h3 className="text-4xl font-serif font-bold text-white mb-6">{yoga.title}</h3>
            <p className="text-stone-300 leading-relaxed font-light mb-8 line-clamp-2">{yoga.desc}</p>
            <div className="flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:gap-4 transition-all">
              EXPLORE FULL TEACHINGS <span>→</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-12 bg-stone-900/40 rounded-[3rem] border border-stone-800 text-center">
        <h3 className="text-2xl font-serif font-bold text-white mb-4">"Man-making is my mission"</h3>
        <p className="text-stone-400 max-w-2xl mx-auto italic font-light">
          Swamiji believed that one should be as broad as the sky and as deep as the ocean, integrating these four paths to manifest the divinity already within.
        </p>
      </div>
    </div>
  );
};

export default YogaStudio;
