
import React from 'react';
import { Language } from '../types';

interface InstitutionsProps { lang: Language; }

const Institutions: React.FC<InstitutionsProps> = ({ lang }) => {
  const isEn = lang === Language.EN;

  return (
    <div className="py-24 animate-in fade-in duration-1000 space-y-40">
      <section className="text-center space-y-12 max-w-5xl mx-auto">
        <h2 className="text-8xl md:text-[10rem] font-serif font-black text-white tracking-tighter leading-none">
          {isEn ? 'The' : 'हमारा'} <span className="text-orange-600">{isEn ? 'Mission.' : 'मिशन।'}</span>
        </h2>
        <p className="text-stone-500 uppercase tracking-[1em] font-black text-[10px] reveal">{isEn ? 'RAMAKRISHNA ORDER & BELUR MATH' : 'रामकृष्ण मिशन और बेलूर मठ'}</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="glass-panel p-20 rounded-[5rem] border-white/10 space-y-16 bg-stone-900/40 backdrop-blur-3xl">
            <div className="space-y-8">
                <h3 className="text-5xl font-serif text-white italic">{isEn ? 'A Revolutionary Order' : 'एक क्रांतिकारी संगठन'}</h3>
                <p className="text-stone-400 text-2xl font-light leading-relaxed">
                    {isEn 
                      ? "Founded on May 1, 1897, the Ramakrishna Mission integrated spiritual realization with humanitarian service. Unlike traditional monasticism, it declared that manual labor and social relief are as sacred as meditation."
                      : "1 मई, 1897 को स्थापित, रामकृष्ण मिशन ने आध्यात्मिक ज्ञान को मानवीय सेवा के साथ जोड़ा। पुराने संन्यास के विपरीत, इसने घोषणा की कि समाज की सेवा करना और गरीबों की मदद करना उतना ही पवित्र है जितना कि ध्यान लगाना।"}
                </p>
            </div>
            <div className="p-12 bg-orange-600/5 rounded-[3rem] border border-orange-500/10 space-y-6">
                <span className="text-orange-500 font-black tracking-[0.4em] text-[10px] uppercase block">{isEn ? 'The Sovereign Motto' : 'मिशन का मूल मंत्र'}</span>
                <p className="text-4xl font-serif text-white leading-tight">"Atmano Mokshartham Jagaddhitaya Cha"</p>
                <p className="text-stone-400 text-xl italic font-light">
                  {isEn ? '“For one\'s own liberation and for the welfare of the world.”' : '“अपनी मुक्ति के लिए और संसार की भलाई के लिए।”'}
                </p>
            </div>
        </div>

        <div className="space-y-16">
            <h4 className="text-5xl font-serif text-white">{isEn ? 'Symbolism of the Divine' : 'प्रतीक का दिव्य अर्थ'}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                    { k: isEn ? "Wavy Waters" : "लहरें", v: isEn ? "Karma (Selfless Action)" : "निष्काम कर्म", i: "⚡" },
                    { k: isEn ? "Lotus" : "कमल", v: isEn ? "Bhakti (Pure Devotion)" : "शुद्ध भक्ति", i: "❤️" },
                    { k: isEn ? "Rising Sun" : "उगता सूरज", v: isEn ? "Jnana (Wisdom/Truth)" : "दिव्य ज्ञान", i: "💡" },
                    { k: isEn ? "Serpent" : "सर्प", v: isEn ? "Raja Yoga (Concentration)" : "राज योग", i: "🧘" },
                    { k: isEn ? "Swan" : "हंस", v: isEn ? "The Supreme Soul" : "परमात्मा", i: "🦢" }
                ].map((item, i) => (
                    <div key={i} className="glass-panel p-8 rounded-[3rem] border-white/5 group hover:border-orange-500/30 transition-all">
                        <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.i}</div>
                        <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.k}</p>
                        <p className="text-stone-300 font-serif text-2xl font-bold">{item.v}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <section className="bg-stone-950 p-24 rounded-[6rem] border border-white/5 relative overflow-hidden group">
        <div className="absolute -top-20 -right-20 p-20 text-orange-600/5 text-[18rem] font-serif select-none transition-all duration-1000 group-hover:scale-110">UNITY</div>
        <div className="relative z-10 max-w-5xl space-y-12">
            <h3 className="text-7xl font-serif text-white leading-tight">{isEn ? 'Belur Math: Architecture of Unity' : 'बेलूर मठ: अखंडता की मिसाल'}</h3>
            <p className="text-stone-400 text-2xl font-light leading-relaxed">
                {isEn 
                  ? "Swamiji envisioned a temple that embodied the universal message of Vedanta. The headquarters at Belur Math seamlessly blends Hindu, Islamic, Buddhist, and Christian architectural styles, serving as a physical manifestation of the harmony of all faiths."
                  : "स्वामीजी ने एक ऐसे मंदिर की कल्पना की थी जो वेदांत के सार्वभौमिक संदेश को प्रकट करे। बेलूर मठ का मुख्य मंदिर हिंदू, इस्लामी, बौद्ध और ईसाई वास्तुकला शैलियों का अद्भुत संगम है। यह दुनिया के सामने सभी धर्मों की एकता का एक सजीव प्रमाण है।"}
            </p>
            <div className="flex flex-wrap gap-12 pt-8">
                <div className="space-y-4">
                    <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase">{isEn ? 'Location' : 'स्थान'}</span>
                    <p className="text-white text-xl font-light">{isEn ? 'Bank of the Ganga, Howrah' : 'गंगा तट, हावड़ा'}</p>
                </div>
                <div className="space-y-4 border-l border-white/10 pl-12">
                    <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase">{isEn ? 'Philosophy' : 'दर्शन'}</span>
                    <p className="text-white text-xl font-light">{isEn ? 'Universal Harmony' : 'सार्वभौमिक सद्भाव'}</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Institutions;
