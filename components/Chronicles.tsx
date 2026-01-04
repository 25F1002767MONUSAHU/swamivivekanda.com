
import React, { useState } from 'react';
import { Language } from '../types';

interface ChroniclesProps {
  lang: Language;
}

const Chronicles: React.FC<ChroniclesProps> = ({ lang }) => {
  const isEn = lang === Language.EN;
  const [activeEra, setActiveEra] = useState<number>(0);

  const eras = isEn ? [
    {
      title: "Roots & Awakening (1863-1886)",
      events: [
        { 
          year: '1863', 
          title: 'The Sun Rises in Calcutta', 
          desc: 'Born as Narendranath Datta on January 12 during Makar Sankranti. His father, Vishwanath Datta, was a successful attorney, while his mother, Bhuvaneshwari Devi, shaped his spiritual soul. From childhood, he possessed a prodigious memory, memorizing Sanskrit grammar (Mugdhabodha) and passages from Ramayana by age seven.' 
        },
        { 
          year: '1881', 
          title: 'Sir, Have You Seen God?', 
          desc: 'At age 18, Narendra met Sri Ramakrishna. He asked: "Sir, have you seen God?" The reply changed history: "Yes, I see Him as clearly as I see you, only more intensely." This straightforward answer removed his doubts and began an extraordinary guru-disciple bond characterized by intellectual rigor.' 
        },
        { 
          year: '1886', 
          title: 'The Passing of the Master', 
          desc: 'On August 16, Sri Ramakrishna passed away. Before his death, he gave specific instructions to Narendra to form a monastic order. Narendra led his brother-disciples to establish the first monastery at Baranagar, formally taking vows of Sannyasa and assuming the name Swami Vivekananda.' 
        }
      ]
    },
    {
      title: "The Wandering Monk (1888-1893)",
      events: [
        { 
          year: '1888', 
          title: 'Parivrajaka: Discovery of India', 
          desc: 'Vivekananda traveled extensively across India with only a water pot and staff. He stayed with kings and cobblers, witnessing the crushing poverty of the masses. In the Himalayas, he experienced Nirvikalpa Samadhi, strengthening his resolve to serve humanity as a spiritual mission.' 
        },
        { 
          year: '1892', 
          title: 'The Kanyakumari Vision', 
          desc: 'At the southernmost tip of India, he meditated on a rock for three days. He saw that India\'s masses needed secular knowledge to improve their economy and spiritual knowledge for moral strength. He resolved to go to the West to share India\'s wisdom and learn their secrets of material prosperity.' 
        }
      ]
    },
    {
      title: "The World Stage (1893-1897)",
      events: [
        { 
          year: '1893', 
          title: 'The Chicago Triumph', 
          desc: 'On Sept 11, at the World\'s Parliament of Religions, he began: "Sisters and Brothers of America..." triggering a 2-minute standing ovation. He established Hinduism as a sophisticated philosophical system, teaching universal tolerance: "As different streams lead to one ocean, all paths lead to Thee."' 
        },
        { 
          year: '1894-96', 
          title: 'Vedanta in the West', 
          desc: 'He founded the Vedanta Society in New York and taught the four Yogas. He met the scientist Nikola Tesla, who was fascinated by his views on Energy and Akasha, and the Indologist Max Muller, who praised his work in bridging Eastern spirituality with Western rationality.' 
        }
      ]
    },
    {
      title: "The Final Mission (1897-1902)",
      events: [
        { 
          year: '1897', 
          title: 'Founding the Ramakrishna Mission', 
          desc: 'Returning to India to a hero\'s welcome, he founded the Mission on May 1st. Its motto: "Atmano Mokshartham Jagaddhitaya Cha" (For one\'s own liberation and the welfare of the world). He established Belur Math as the permanent headquarters, symbolizing religious harmony.' 
        },
        { 
          year: '1902', 
          title: 'The Mahasamadhi', 
          desc: 'On July 4, after teaching Sanskrit and meditating in the temple, he peacefully entered Mahasamadhi at 9:10 PM. He fulfilled his prophecy of not living to see forty years. He left behind a global legacy that continues to inspire millions toward strength, fearlessness, and service.' 
        }
      ]
    }
  ] : [
    {
      title: "शुरुआती जीवन और जागृति (1863-1886)",
      events: [
        { 
          year: '1863', 
          title: 'कोलकाता में दिव्य सूर्योदय', 
          desc: '12 जनवरी (मकर संक्रांति) को नरेंद्रनाथ दत्त का जन्म हुआ। उनके पिता विश्वनाथ दत्त एक सफल वकील थे और माता भुवनेश्वरी देवी ने उनके मन में आध्यात्मिकता के बीज बोए। बचपन से ही नरेंद्र की याददाश्त बहुत तेज थी, उन्होंने सात साल की उम्र में ही संस्कृत व्याकरण और रामायण-महाभारत के कई हिस्सों को याद कर लिया था।' 
        },
        { 
          year: '1881', 
          title: 'महाशय, क्या आपने ईश्वर को देखा है?', 
          desc: '18 साल की उम्र में नरेंद्र की मुलाकात श्री रामकृष्ण से हुई। उन्होंने वह प्रसिद्ध प्रश्न पूछा: "क्या आपने ईश्वर को देखा है?" उत्तर मिला: "हाँ, मैंने उन्हें देखा है, उतना ही स्पष्ट जितना मैं तुम्हें देख रहा हूँ।" इस जवाब ने उनके जीवन की दिशा बदल दी और एक महान गुरु-शिष्य संबंध की शुरुआत हुई।' 
        },
        { 
          year: '1886', 
          title: 'गुरु की विदाई और संकल्प', 
          desc: '16 अगस्त को श्री रामकृष्ण के निधन के बाद, नरेंद्र ने अपने गुरु-भाइयों के साथ मिलकर वराहनगर में पहला मठ बनाया। उन्होंने संन्यास लिया और स्वामी विवेकानंद नाम धारण किया। उनका लक्ष्य गुरु की शिक्षाओं को दुनिया के कोने-कोने तक पहुँचाना था।' 
        }
      ]
    },
    {
      title: "परिव्राजक: भारत भ्रमण (1888-1893)",
      events: [
        { 
          year: '1888', 
          title: 'भारत की खोज', 
          desc: 'वे एक कमंडल और लाठी लेकर पूरे भारत की यात्रा पर निकल पड़े। उन्होंने राजाओं के महलों से लेकर गरीबों की झोपड़ियों तक समय बिताया। हिमालय में उन्होंने गहन ध्यान लगाया, जिससे उन्हें समाज की सेवा करने और मानवता की भलाई का आध्यात्मिक संदेश मिला।' 
        },
        { 
          year: '1892', 
          title: 'कन्याकुमारी का दिव्य संदेश', 
          desc: 'भारत के सबसे अंतिम छोर पर एक शिला पर उन्होंने तीन दिनों तक ध्यान लगाया। उन्होंने महसूस किया कि भारत की जनता को गरीबी से उबरने के लिए आधुनिक विज्ञान और चारित्रिक बल के लिए आध्यात्मिक ज्ञान की आवश्यकता है। यहीं से उन्होंने पश्चिम जाने का संकल्प लिया।' 
        }
      ]
    },
    {
      title: "विश्व मंच पर विजय (1893-1897)",
      events: [
        { 
          year: '1893', 
          title: 'शिकागो विश्व धर्म सम्मेलन', 
          desc: '11 सितंबर को शिकागो में उन्होंने अपना प्रसिद्ध भाषण दिया: "अमेरिका की बहनों और भाइयों..."। पूरा हॉल दो मिनट तक तालियों से गूँजता रहा। उन्होंने दुनिया को सिखाया कि सभी धर्म एक ही परम सत्य की ओर ले जाते हैं, जैसे अलग-अलग नदियाँ एक ही समुद्र में मिलती हैं।' 
        },
        { 
          year: '1894-96', 
          title: 'पश्चिम में वेदांत का डंका', 
          desc: 'उन्होंने न्यूयॉर्क में वेदांत सोसाइटी बनाई और योग की शिक्षा दी। उन्होंने महान वैज्ञानिक निकोला टेस्ला और विद्वान मैक्स मुलर से मुलाकात की। टेस्ला उनके "प्राण" और "आकाश" के विचारों से बहुत प्रभावित हुए और माना कि विज्ञान और वेदांत एक ही सच्चाई के दो पहलू हैं।' 
        }
      ]
    },
    {
      title: "अंतिम मिशन और महासमाधि (1897-1902)",
      events: [
        { 
          year: '1897', 
          title: 'रामकृष्ण मिशन की स्थापना', 
          desc: 'भारत लौटने पर उनका भव्य स्वागत हुआ। 1 मई को उन्होंने रामकृष्ण मिशन की स्थापना की। इसका मूल मंत्र था: "अपनी मुक्ति और संसार की भलाई के लिए कार्य करना"। उन्होंने बेलूर मठ बनाया जो आज भी धार्मिक एकता और शांति का केंद्र है।' 
        },
        { 
          year: '1902', 
          title: 'महासमाधि', 
          desc: '4 जुलाई को, संस्कृत पढ़ाने और मंदिर में ध्यान करने के बाद, रात 9:10 बजे उन्होंने स्वेच्छा से अपने शरीर का त्याग किया। उन्होंने अपनी भविष्यवाणी पूरी की कि वे चालीस साल से ज्यादा जीवित नहीं रहेंगे। वे अपने पीछे एक ऐसी मशाल छोड़ गए जो आज भी करोड़ों लोगों को साहस और सेवा की राह दिखा रही है।' 
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 animate-in fade-in duration-1000 space-y-24">
      <div className="text-center space-y-8 reveal">
        <h2 className="text-6xl md:text-[8rem] font-serif font-bold text-white tracking-tighter leading-none">
          {isEn ? 'The' : 'जीवन'} <span className="text-orange-600">{isEn ? 'Chronicles.' : 'कालक्रम।'}</span>
        </h2>
        <p className="text-stone-500 uppercase tracking-[1em] font-black text-[10px]">{isEn ? 'A COMPREHENSIVE BIOGRAPHICAL JOURNEY' : 'महापुरुष की संपूर्ण जीवन यात्रा'}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 border-b border-white/5 pb-12">
        {eras.map((era, i) => (
          <button 
            key={i} 
            onClick={() => setActiveEra(i)} 
            className={`px-8 py-4 rounded-full text-[10px] font-black tracking-widest transition-all ${activeEra === i ? 'bg-orange-600 text-white shadow-lg saffron-glow scale-105' : 'bg-stone-900/40 text-stone-500 hover:text-white hover:bg-stone-800 border border-white/5'}`}
          >
            {era.title}
          </button>
        ))}
      </div>

      <div className="space-y-24 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-orange-500 via-stone-800 to-transparent hidden md:block opacity-30" />
        {eras[activeEra].events.map((event, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center gap-12 group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2 space-y-6">
              <div className={`p-12 glass-panel rounded-[4rem] border-white/5 transition-all duration-700 hover:border-orange-500/30 group-hover:bg-stone-900/60 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-orange-500 font-serif text-5xl font-black italic mb-4 block opacity-40 group-hover:opacity-100 transition-opacity">{event.year}</span>
                <h3 className="text-3xl font-serif font-black text-white mb-6 leading-tight">{event.title}</h3>
                <p className="text-stone-300 text-xl font-light leading-relaxed">{event.desc}</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full saffron-gradient shadow-2xl z-10 flex-shrink-0 flex items-center justify-center ring-8 ring-[#050505] transform group-hover:scale-125 transition-all duration-500">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
            <div className="hidden md:block w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chronicles;
