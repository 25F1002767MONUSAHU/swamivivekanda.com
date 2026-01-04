
import React from 'react';
import { Language } from '../types';

interface LibraryProps { lang: Language; }

const Library: React.FC<LibraryProps> = ({ lang }) => {
  const isEn = lang === Language.EN;
  
  const works = isEn ? [
    { title: "Raja Yoga", year: "1896", desc: "A scientific interpretation of Patanjali's Yoga Sutras, introducing meditation as a rational psychological method to the West." },
    { title: "Karma Yoga", year: "1896", desc: "The definitive guide to the path of selfless action, teaching how to achieve spiritual growth through worldly duties." },
    { title: "Jnana Yoga", year: "1899", desc: "A profound collection of lectures on Advaita Vedanta, exploring the intellectual path to identifying with the Absolute Reality." },
    { title: "Bhakti Yoga", year: "Posthumous", desc: "A masterclass on transmuting human emotions into divine love, describing the stages from basic worship to supreme ecstasy." },
    { title: "Inspired Talks", year: "1909", desc: "Spontaneous and deep teachings recorded during a seven-week spiritual retreat with dedicated students at Thousand Island Park." },
    { title: "Colombo to Almora", year: "1897", desc: "A collection of powerful, fiery lectures delivered in India after Swamiji's return from the West, awakening national pride." }
  ] : [
    { title: "राज योग", year: "1896", desc: "पतंजलि के योग सूत्रों की वैज्ञानिक व्याख्या, जिसने पश्चिम को ध्यान और मानसिक शक्तियों के रहस्यों से परिचित कराया।" },
    { title: "कर्म योग", year: "1896", desc: "निस्वार्थ सेवा के मार्ग का मार्गदर्शक ग्रंथ, जो सिखाता है कि कैसे अपने कार्यों को ही मुक्ति का साधन बनाया जाए।" },
    { title: "ज्ञान योग", year: "1899", desc: "अद्वैत वेदांत पर दिए गए गहन व्याख्यान, जो सत्य को जानने के लिए बुद्धि और विवेक का उपयोग करना सिखाते हैं।" },
    { title: "भक्ति योग", year: "Posth.", desc: "ईश्वर के प्रति अटूट प्रेम और समर्पण का विज्ञान, जो मानवीय भावनाओं को दिव्य भक्ति में बदल देता है।" },
    { title: "प्रेरणादायक बातें", year: "1909", desc: "अमेरिका के थाउजेंड आइलैंड पार्क में स्वामीजी द्वारा अपने करीबी शिष्यों को दी गई अत्यंत गहन और गुप्त शिक्षाओं का संग्रह।" },
    { title: "कोलंबो से अल्मोड़ा", year: "1897", desc: "पश्चिम से लौटने के बाद भारत में दिए गए वे तेजस्वी भाषण, जिन्होंने सोए हुए भारत में राष्ट्रीय चेतना और गौरव की लहर पैदा की।" }
  ];

  return (
    <div className="py-24 animate-in fade-in duration-1000 space-y-40">
      <section className="text-center space-y-12 max-w-5xl mx-auto">
        <h2 className="text-8xl md:text-[10rem] font-serif font-black text-white tracking-tighter leading-none">
          {isEn ? 'The' : 'ज्ञान का'} <span className="text-orange-600">{isEn ? 'Archive.' : 'भंडार।'}</span>
        </h2>
        <p className="text-stone-500 uppercase tracking-[1em] font-black text-[10px] reveal">
          {isEn ? '9 VOLUMES OF THE COMPLETE WORKS' : 'स्वामी विवेकानंद साहित्य के 9 विशाल खंड'}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {works.map((book, i) => (
            <div key={i} className="glass-panel p-16 rounded-[4rem] border-white/5 hover:border-orange-500/30 transition-all duration-700 group cursor-default bg-stone-900/40">
                <span className="text-orange-500 font-black text-[11px] tracking-widest uppercase mb-4 block">{book.year}</span>
                <h3 className="text-4xl font-serif font-black text-white mb-8 group-hover:text-orange-500 transition-colors leading-tight">{book.title}</h3>
                <p className="text-stone-400 text-xl font-light leading-relaxed">{book.desc}</p>
                <div className="mt-12 h-[2px] w-0 group-hover:w-full bg-orange-600 transition-all duration-1000" />
            </div>
        ))}
      </div>

      <div className="bg-orange-600/5 p-24 rounded-[6rem] border border-orange-500/10 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <h3 className="text-5xl md:text-6xl font-serif text-white mb-10 relative z-10 leading-tight">
          {isEn ? '"Words are Secondary. Thoughts Live."' : '"शब्द मिट जाते हैं, विचार अमर रहते हैं।"'}
        </h3>
        <p className="text-stone-400 italic text-2xl font-light max-w-4xl mx-auto relative z-10 leading-relaxed">
          {isEn 
            ? "Vivekananda's Complete Works encapsulate the soul of Practical Vedanta, serving as a beacon for humanity for over a century. All profits support the Mission's humanitarian work."
            : "स्वामीजी का साहित्य व्यावहारिक वेदांत की आत्मा है, जो सदियों से मानवता का मार्ग प्रशस्त कर रहा है। इन पुस्तकों की आय समाज सेवा के कार्यों में लगाई जाती है।"}
        </p>
      </div>
    </div>
  );
};

export default Library;
