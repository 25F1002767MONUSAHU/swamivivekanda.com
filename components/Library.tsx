
import React from 'react';

const Library: React.FC = () => {
  const books = [
    { title: "Raja Yoga", year: "1896", desc: "Scientific interpretation of Patanjali's Yoga Sutras for the West." },
    { title: "Karma Yoga", year: "1896", desc: "The path of selfless action and non-attachment." },
    { title: "Jnana Yoga", year: "1899", desc: "Rigorous philosophical analysis of Advaita Vedanta." },
    { title: "Bhakti Yoga", year: "Posth.", desc: "The science of higher love and emotional transmutation." },
    { title: "Inspired Talks", year: "1909", desc: "Informal teachings compiled by disciples at Thousand Island Park." },
    { title: "Colombo to Almora", year: "1897", desc: "Fiery speeches that awakened Indian national pride." }
  ];

  return (
    <div className="py-12 animate-in fade-in duration-1000 space-y-32">
      <section className="text-center space-y-8">
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">The <span className="text-orange-600">Archive.</span></h2>
        <p className="text-stone-500 uppercase tracking-[0.8em] font-bold text-xs">9 VOLUMES OF THE COMPLETE WORKS</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, i) => (
            <div key={i} className="glass-panel p-12 rounded-[3.5rem] border-white/5 hover:border-orange-500/30 transition-all duration-700 group cursor-default">
                <span className="text-orange-500 font-bold text-[10px] tracking-widest">{book.year}</span>
                <h3 className="text-3xl font-serif font-bold text-white mt-4 mb-6 group-hover:text-orange-500 transition-colors">{book.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">{book.desc}</p>
                <div className="mt-10 h-[1px] w-0 group-hover:w-full bg-orange-600 transition-all duration-1000" />
            </div>
        ))}
      </div>

      <div className="bg-orange-600/5 p-20 rounded-[5rem] border border-orange-500/10 text-center">
        <h3 className="text-4xl font-serif text-white mb-6">"Words are Secondary. Thoughts Live."</h3>
        <p className="text-stone-400 italic text-xl font-light">All profits from these publications support the charitable work of Ramakrishna Mission worldwide.</p>
      </div>
    </div>
  );
};

export default Library;
