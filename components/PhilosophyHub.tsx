
import React, { useState } from 'react';
import { Language } from '../types';

interface PhilosophyHubProps {
  lang: Language;
}

const PhilosophyHub: React.FC<PhilosophyHubProps> = ({ lang }) => {
  const isEn = lang === Language.EN;
  const [activeYoga, setActiveYoga] = useState(0);

  const yogaDetails = isEn ? [
    { 
      title: "Karma Yoga", 
      aspect: "The Path of Selfless Action", 
      desc: "Karma Yoga is the path of action. It teaches us how to work in the world without being bound by the results. By performing our duties selflessly, we purify our hearts. Vivekananda transformed social service from simple charity into a rigorous spiritual practice, stating that service to man is service to God.", 
      principles: [
        "Work without desire for personal gain or the fruits of labor",
        "Every act must be seen as an offering to the Divine",
        "Non-attachment to success or failure brings ultimate peace",
        "Service to humanity (Daridra Narayana) is the highest worship"
      ],
      method: "The science of work where the worker remains free from the chains of action through unselfishness."
    },
    { 
      title: "Bhakti Yoga", 
      aspect: "The Path of Devotion", 
      desc: "Bhakti Yoga is the path of pure, unselfish love. It is the science of directing human emotions toward the Divine. Swamiji taught that devotion should be driven by love, not fear. It is the easiest path for those who are emotional by nature, leading to supreme intensity of spiritual realization.", 
      principles: [
        "Love for love's sake alone, without bargaining or expectation",
        "Seeing and serving the Divine in every living being",
        "The five attitudes (Bhavas) of devotion toward the Beloved",
        "Purity of heart and total self-surrender to the Truth"
      ],
      method: "Transmuting worldly emotions into divine love through prayer, chanting, and constant remembrance."
    },
    { 
      title: "Raja Yoga", 
      aspect: "The Path of Meditation", 
      desc: "Based on Patanjali's Yoga Sutras, Raja Yoga is the scientific control of the mind. It presents a systematic method of exploring consciousness through eight limbs (Ashtanga). It appeals to scientific minds because its truths can be verified through direct experience rather than blind faith.", 
      principles: [
        "Ethical foundations: Yama (restraints) and Niyama (observances)",
        "Control of Prana (Life Force) through regulated breathing",
        "Withdrawal of senses (Pratyahara) and focused concentration",
        "Achieving Samadhi—the state of super-conscious union"
      ],
      method: "A psychological approach to achieving mastery over the internal nature through concentration."
    },
    { 
      title: "Jnana Yoga", 
      aspect: "The Path of Knowledge", 
      desc: "The path of discriminative wisdom for the intellectual seeker. It involves the philosophical analysis of the self to distinguish the Real from the Unreal. It leads to the direct realization that the individual soul (Atman) is fundamentally identical with the Absolute Reality (Brahman).", 
      principles: [
        "Deep inquiry into the nature of absolute and eternal Truth",
        "Discrimination between the permanent and the impermanent",
        "Renunciation of selfish desires through superior wisdom",
        "Realization of 'I am That' (Aham Brahmasmi)"
      ],
      method: "The path of the intellect, using reasoning and introspection to transcend the ego."
    }
  ] : [
    { 
      title: "कर्म योग", 
      aspect: "निस्वार्थ सेवा का मार्ग", 
      desc: "कर्म योग कार्य करने का वह विज्ञान है जहाँ हम फल की इच्छा किए बिना अपना कर्तव्य निभाते हैं। यह हमें सिखाता है कि संसार में रहते हुए भी हम कार्यों के बंधन से कैसे मुक्त रह सकते हैं। स्वामीजी ने सिखाया कि 'नर सेवा ही नारायण सेवा' है, यानी मनुष्यों की सेवा करना ही ईश्वर की सच्ची पूजा है।", 
      principles: [
        "फल की इच्छा और स्वार्थ के बिना पूरी ईमानदारी से काम करना",
        "हर कार्य को ईश्वर के प्रति एक पवित्र अर्पण के रूप में देखना",
        "सफलता और विफलता के विचारों से ऊपर उठकर कार्य करना",
        "मानवता की सेवा को ही अपना धर्म और सबसे बड़ी पूजा मानना"
      ],
      method: "कार्य करने का वह तरीका जहाँ कार्यकर्ता निस्वार्थ भाव से कार्य करते हुए भी मानसिक रूप से मुक्त रहता है।"
    },
    { 
      title: "भक्ति योग", 
      aspect: "प्रेम और समर्पण का मार्ग", 
      desc: "भक्ति योग भावनाओं को ईश्वर की ओर मोड़ने का मार्ग है। यह शुद्ध और निस्वार्थ प्रेम का मार्ग है। स्वामीजी ने सिखाया कि भक्ति डर से नहीं, बल्कि प्रेम से होनी चाहिए। यह उन लोगों के लिए सबसे आसान मार्ग है जो स्वभाव से भावुक हैं और प्रेम के माध्यम से सत्य को पाना चाहते हैं।", 
      principles: [
        "बिना किसी लेन-देन या अपेक्षा के केवल प्रेम के लिए प्रेम करना",
        "हर जीवित प्राणी में उसी परमात्मा के दर्शन करना और प्रेम बाँटना",
        "पाँच भावों (Bhavas) के माध्यम से ईश्वर से गहरा संबंध बनाना",
        "हृदय की पूर्ण शुद्धता और सच्चाई के प्रति पूर्ण आत्म-समर्पण"
      ],
      method: "प्रार्थना, कीर्तन और निरंतर ईश्वर के स्मरण के माध्यम से मानवीय भावनाओं को दिव्य प्रेम में बदलना।"
    },
    { 
      title: "राज योग", 
      aspect: "ध्यान और आत्म-संयम का मार्ग", 
      desc: "पतंजलि के योग सूत्रों पर आधारित, राज योग मन पर वैज्ञानिक नियंत्रण पाने का मार्ग है। यह अष्टांग योग के आठ अंगों के माध्यम से चेतना को समझने की विधि है। यह तार्किक मस्तिष्क को आकर्षित करता है क्योंकि इसके सत्य को अनुभव के माध्यम से सिद्ध किया जा सकता है।", 
      principles: [
        "नैतिक आधार: यम (अनुशासन) और नियम (पवित्रता) का पालन",
        "प्राणायाम के माध्यम से प्राण (ऊर्जा) और सांसों पर नियंत्रण",
        "इंद्रियों को वश में करना (प्रत्याहार) और मन को एकाग्र करना",
        "समाधि की अवस्था—परम चेतना और ईश्वर के साथ मिलन प्राप्त करना"
      ],
      method: "एकाग्रता और मानसिक अनुशासन के माध्यम से अपनी आंतरिक शक्ति पर विजय प्राप्त करने का मार्ग।"
    },
    { 
      title: "ज्ञान योग", 
      aspect: "विवेक और सत्य का मार्ग", 
      desc: "यह मार्ग बुद्धिजीवियों और सत्य के खोजी लोगों के लिए है। इसमें दार्शनिक विश्लेषण के माध्यम से 'सत्य' और 'असत्य' के बीच भेद किया जाता है। इसका अंतिम लक्ष्य यह अनुभव करना है कि हमारी आत्मा वास्तव में उस अनंत परमात्मा (ब्रह्म) का ही अंश है।", 
      principles: [
        "सत्य की वास्तविक और शाश्वत प्रकृति की निरंतर खोज करना",
        "नित्य (अमर) और अनित्य (नश्वर) के बीच विवेकपूर्ण भेद करना",
        "उच्च ज्ञान के माध्यम से समस्त स्वार्थी इच्छाओं का त्याग करना",
        "अनुभव करना कि 'मैं ही ब्रह्म हूँ' (अहं ब्रह्मास्मि)"
      ],
      method: "बुद्धि और तर्क का मार्ग, जहाँ हम अपनी वास्तविक पहचान को जानने के लिए अहंकार का त्याग करते हैं।"
    }
  ];

  const vedantaPrinciples = isEn ? [
    { title: "Potential Divinity", desc: "Each soul is potentially divine. The goal of life is to manifest this divinity within by controlling nature, external and internal." },
    { title: "Unity of Existence", desc: "There is only one underlying reality manifesting as the multiplicity of the universe. All that exists is the manifestation of the One." },
    { title: "No Secular vs Sacred", desc: "Labor is prayer. Life is itself religion. Every act, when performed selflessly, is a step toward spiritual realization." }
  ] : [
    { title: "संभावित दिव्यता", desc: "हर आत्मा में दिव्यता छिपी हुई है। जीवन का लक्ष्य अपनी आंतरिक और बाहरी प्रकृति को वश में करके इस दिव्यता को प्रकट करना है।" },
    { title: "अस्तित्व की एकता", desc: "पूरे ब्रह्मांड में केवल एक ही सच्चाई है जो अनेक रूपों में दिखती है। जो कुछ भी है, वह उसी एक परमात्मा का रूप है।" },
    { title: "कोई भेद नहीं", desc: "कार्य ही पूजा है। जीवन अपने आप में एक धर्म है। निस्वार्थ भाव से किया गया हर कार्य हमें सत्य के करीब ले जाता है।" }
  ];

  return (
    <div className="py-24 animate-in fade-in duration-1000 space-y-40">
      <section className="text-center space-y-12 max-w-5xl mx-auto reveal">
        <h2 className="text-8xl md:text-[10rem] font-serif font-black text-white tracking-tighter leading-none">
          {isEn ? 'Practical' : 'व्यावहारिक'} <span className="text-orange-600">{isEn ? 'Vedanta.' : 'वेदांत।'}</span>
        </h2>
        <p className="text-stone-400 text-3xl font-light leading-relaxed">
          {isEn 
            ? "Vivekananda transformed ancient wisdom into a manual for modern life. Spirituality is not just for the forest, but for the factory, the home, and the world."
            : "स्वामी विवेकानंद ने प्राचीन ज्ञान को आधुनिक जीवन जीने की कला में बदल दिया। आध्यात्मिकता केवल जंगलों के लिए नहीं, बल्कि हमारे घर, कार्यस्थल और समाज के लिए भी है।"}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vedantaPrinciples.map((p, i) => (
          <div key={i} className="glass-panel p-12 rounded-[4rem] border-white/5 space-y-6 hover:border-orange-500/30 transition-all group">
            <h4 className="text-orange-500 font-black tracking-[0.4em] text-xs uppercase">{p.title}</h4>
            <p className="text-stone-300 text-xl font-light leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-6">
            {yogaDetails.map((yoga, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveYoga(i)} 
                  className={`w-full p-12 rounded-[4rem] text-left transition-all group ${activeYoga === i ? 'bg-orange-600 text-white shadow-2xl saffron-glow scale-105' : 'glass-panel border-white/5 text-stone-500 hover:text-stone-200'}`}
                >
                    <span className="text-[11px] uppercase tracking-[0.5em] font-black block mb-4 opacity-60">{yoga.aspect}</span>
                    <h3 className="text-5xl font-serif font-black">{yoga.title}</h3>
                </button>
            ))}
        </div>
        
        <div className="lg:col-span-8">
            <div className="glass-panel p-20 rounded-[6rem] border-white/10 h-full flex flex-col justify-between space-y-16 bg-stone-900/40 backdrop-blur-3xl shadow-2xl">
                <div className="space-y-10">
                    <h4 className="text-7xl font-serif text-white">{yogaDetails[activeYoga].title}</h4>
                    <p className="text-stone-300 text-2xl font-light italic leading-relaxed">{yogaDetails[activeYoga].desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/5">
                        {yogaDetails[activeYoga].principles.map((p, j) => (
                            <div key={j} className="flex gap-6 items-start group/p">
                                <div className="w-3 h-3 rounded-full bg-orange-500 mt-2.5 flex-shrink-0 saffron-glow group-hover/p:scale-150 transition-transform" />
                                <span className="text-stone-400 text-xl font-light leading-relaxed">{p}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-10 bg-orange-600/5 rounded-[3rem] border border-orange-500/10">
                    <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase block mb-4">{isEn ? 'THE METHOD' : 'साधना की विधि'}</span>
                    <p className="text-stone-300 text-xl font-serif italic">{yogaDetails[activeYoga].method}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyHub;
