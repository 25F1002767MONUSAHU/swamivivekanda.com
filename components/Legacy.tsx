
import React from 'react';
import { Language } from '../types';

interface LegacyProps { lang: Language; }

const Legacy: React.FC<LegacyProps> = ({ lang }) => {
  const isEn = lang === Language.EN;

  return (
    <div className="py-24 animate-in fade-in duration-1000 space-y-40">
      <section className="text-center space-y-12 max-w-5xl mx-auto">
        <h2 className="text-8xl md:text-[10rem] font-serif font-black text-white tracking-tighter leading-none">
          {isEn ? 'Global' : 'दुनिया पर'} <span className="text-orange-600">{isEn ? 'Impact.' : 'असर।'}</span>
        </h2>
        <p className="text-stone-500 uppercase tracking-[1em] font-black text-[10px] reveal">{isEn ? 'ECHOES ACROSS CENTURIES' : 'सदियों तक गूँजती उनकी आवाज़'}</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-16">
            <div className="space-y-8">
                <h3 className="text-6xl font-serif text-white leading-tight">{isEn ? 'The National Awakening' : 'राष्ट्र की जागृति'}</h3>
                <p className="text-stone-400 text-2xl font-light leading-relaxed">
                    {isEn 
                      ? "Swamiji revitalized the soul of India during colonial subjugation. He declared that January 12 be celebrated as National Youth Day, as he personified the eternal energy and restless quest for truth of the modern generation."
                      : "स्वामीजी ने गुलामी के दौर में भारत की सोई हुई आत्मा को जगाया। उनके जन्मदिन (12 जनवरी) को 'राष्ट्रीय युवा दिवस' के रूप में मनाया जाता है, क्योंकि वे युवाओं की अनंत शक्ति और सत्य की खोज के प्रतीक हैं।"}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="p-10 glass-panel rounded-[3rem] border border-white/5 group hover:border-orange-500/30 transition-all bg-stone-900/40">
                    <p className="text-white font-serif text-3xl mb-4">{isEn ? 'Gandhi' : 'गांधी'}</p>
                    <p className="text-stone-400 text-lg font-light italic leading-relaxed">
                      {isEn ? '"After reading him, my love for India grew a thousand-fold."' : '"स्वामीजी को पढ़ने के बाद मेरे मन में देश के लिए प्यार हज़ार गुना बढ़ गया।"'}
                    </p>
                </div>
                <div className="p-10 glass-panel rounded-[3rem] border border-white/5 group hover:border-orange-500/30 transition-all bg-stone-900/40">
                    <p className="text-white font-serif text-3xl mb-4">{isEn ? 'Netaji' : 'नेताजी'}</p>
                    <p className="text-stone-400 text-lg font-light italic leading-relaxed">
                      {isEn ? '"Vivekananda is the father of modern Indian nationalism."' : '"विवेकानंद आधुनिक भारतीय राष्ट्रवाद के आध्यात्मिक पिता हैं।"'}
                    </p>
                </div>
            </div>
        </div>

        <div className="glass-panel p-20 rounded-[5rem] border-white/10 space-y-12 relative overflow-hidden bg-stone-900/60 backdrop-blur-3xl">
            <div className="absolute top-0 right-0 p-16 text-orange-600/5 text-[15rem] font-serif select-none">1893</div>
            <h3 className="text-5xl font-serif text-white italic leading-tight">{isEn ? 'The Global Architect' : 'वैश्विक पथ-प्रदर्शक'}</h3>
            <p className="text-stone-400 text-2xl font-light leading-relaxed">
                {isEn 
                  ? "Beyond India, his triumph at Chicago established Hinduism as a sophisticated philosophy. He pioneered modern interfaith dialogue and fascinated scientists like Nikola Tesla with the Vedantic concepts of Energy and Akasha."
                  : "शिकागो की जीत ने दुनिया के सामने हिंदू धर्म को एक उच्च दर्शन के रूप में रखा। उन्होंने आधुनिक धार्मिक संवाद की नींव रखी और निकोला टेस्ला जैसे वैज्ञानिकों को 'ऊर्जा' और 'आकाश' के विचारों से मंत्रमुग्ध कर दिया।"}
            </p>
            <div className="pt-10 border-t border-white/10 space-y-4">
                <p className="text-orange-500 font-black tracking-[0.4em] text-[10px] uppercase">{isEn ? 'Enduring Relevance' : 'आज के समय में महत्व'}</p>
                <div className="flex flex-wrap gap-4">
                    {[
                      isEn ? "Mental Health" : "मानसिक स्वास्थ्य",
                      isEn ? "Global Harmony" : "वैश्विक सद्भाव",
                      isEn ? "Social Justice" : "सामाजिक न्याय"
                    ].map((tag, i) => (
                      <span key={i} className="px-6 py-2 rounded-full border border-white/10 text-stone-300 text-sm font-bold uppercase tracking-widest">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <div className="text-center space-y-16 py-20 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
           <span className="text-[30rem] font-serif font-black text-white select-none italic">Sovereign</span>
        </div>
        <div className="w-4 h-4 rounded-full bg-orange-600 mx-auto animate-ping relative z-10" />
        <h3 className="text-7xl md:text-9xl font-serif text-white font-black italic max-w-6xl mx-auto leading-none tracking-tighter relative z-10">
          {isEn ? '"Strength is Life. Weakness is Death."' : '"शक्ति ही जीवन है, कमज़ोरी ही मृत्यु है।"'}
        </h3>
        <p className="text-stone-600 uppercase tracking-[1.5em] font-black text-xs relative z-10">SWAMI VIVEKANANDA • 1863-1902</p>
      </div>
    </div>
  );
};

export default Legacy;
