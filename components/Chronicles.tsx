
import React from 'react';

const Chronicles: React.FC = () => {
  const events = [
    { year: '1863', title: 'The Sun Rises', desc: 'Narendranath Datta is born in Calcutta, a child of nobility and deep spiritual yearning.' },
    { year: '1881', title: 'The Sacred Encounter', desc: 'Meets Sri Ramakrishna at Dakshineshwar. The question "Sir, have you seen God?" changes history forever.' },
    { year: '1886', title: 'Monastic Vows', desc: 'Following the Master\'s passing, the brotherhood is formed. Narendra becomes Swami Vivekananda.' },
    { year: '1888', title: 'Parivrajaka Path', desc: 'The Wandering Monk travels the length of India, discovering the soul of the common people.' },
    { year: '1892', title: 'Kanyakumari Vision', desc: 'Meditating on the last rock of India, he realizes his mission to uplift the masses through Vedanta.' },
    { year: '1893', title: 'The Chicago Storm', desc: 'The World Parliament of Religions. A single address makes him an international beacon of light.' },
    { year: '1897', title: 'The Mission Begins', desc: 'The Ramakrishna Mission is founded, dedicated to "Atmano Mokshartham Jagat Hitaya Cha".' },
    { year: '1902', title: 'Eternal Departure', desc: 'At the age of 39, he enters Mahasamadhi, leaving behind an immortal legacy.' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 animate-in fade-in duration-1000">
      <div className="text-center space-y-6 mb-32">
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">The Immortal <span className="text-orange-600">Arc.</span></h2>
        <div className="flex items-center justify-center gap-6">
           <div className="h-[1px] w-12 bg-stone-800" />
           <p className="text-stone-500 uppercase tracking-[0.8em] font-bold text-[10px]">1863 — 1902</p>
           <div className="h-[1px] w-12 bg-stone-800" />
        </div>
      </div>

      <div className="relative space-y-32 before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-orange-500 before:via-stone-800 before:to-transparent">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-16 h-16 rounded-3xl glass-panel border-white/10 bg-stone-950 shadow-2xl group-hover:border-orange-500 transition-all duration-700 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="text-orange-500 text-xs font-bold tracking-widest">{event.year}</span>
            </div>
            
            <div className="w-[calc(100%-6rem)] md:w-[42%] glass-panel p-10 rounded-[3rem] border-white/5 hover:border-orange-500/20 transition-all duration-700 shadow-2xl relative overflow-hidden group/card">
              <div className="absolute top-0 right-0 p-8 text-6xl text-orange-600/5 font-serif group-hover/card:text-orange-600/10 transition-all">{event.year}</div>
              <h3 className="font-serif font-bold text-3xl text-white mb-4 group-hover/card:text-orange-500 transition-colors">{event.title}</h3>
              <p className="text-stone-400 text-lg leading-relaxed font-light">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-60 text-center space-y-8">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mx-auto animate-ping" />
        <p className="text-stone-600 italic font-serif text-2xl">"The history of the world is the history of a few men who had faith in themselves."</p>
      </div>
    </div>
  );
};

export default Chronicles;
