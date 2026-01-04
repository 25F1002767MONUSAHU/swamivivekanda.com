
import React from 'react';
import { AppView, Language } from '../types';

interface DashboardProps {
  onViewChange: (view: AppView) => void;
  lang: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewChange, lang }) => {
  const isEn = lang === Language.EN;

  const t = {
    archive: isEn ? "Sovereign Digital Archive" : "शाश्वत डिजिटल ज्ञान भंडार",
    quote: isEn 
      ? "The history of the world is the history of a few men who had faith in themselves." 
      : "दुनिया का इतिहास उन कुछ गिने-चुने महापुरुषों का इतिहास है, जिन्हें स्वयं की शक्ति और अपनी आत्मा पर पूर्ण और अटूट विश्वास था।",
    unveil: isEn ? "Explore The Chronicles" : "इतिहास की यात्रा करें",
    oracle: isEn ? "Sacred Philosophy" : "पावन दर्शन और योग",
    paths: isEn ? "Paths to Absolute Freedom" : "परम मुक्ति के चार मार्ग",
    pathDesc: isEn 
      ? "Vivekananda's masterful synthesis of the four Yogas—the head (Jnana), the heart (Bhakti), the hand (Karma), and the soul (Raja)—designed to manifest the perfection already within."
      : "स्वामी विवेकानंद ने योग के चार रास्तों का अद्भुत मेल बताया है—मस्तिष्क (ज्ञान), हृदय (भक्ति), हाथ (कर्म) और आत्मा (राज योग)—जो मनुष्य के भीतर पहले से मौजूद दिव्यता को प्रकट करने के लिए बने हैं।",
    practical: isEn ? "Practical Vedanta" : "व्यावहारिक वेदांत",
    vedantaDesc: isEn 
      ? "Spirituality that works in the laboratory of life. Not a set of static dogmas, but a manual for living a life of immense strength and selfless service."
      : "ऐसी आध्यात्मिकता जो जीवन की प्रयोगशाला में काम आए। यह केवल कोरे सिद्धांतों का समूह नहीं, बल्कि साहस, शक्ति और सेवा के साथ जीवन जीने की एक कला है।",
    reformTitle: isEn ? "Social Vision" : "सामाजिक पुनर्निर्माण",
    reformDesc: isEn ? "Swamiji's revolutionary blueprint for mass education, women's empowerment, and the eradication of social privilege." : "शिक्षा, नारी सशक्तिकरण और समाज में व्याप्त हर तरह के भेदभाव और विशेषाधिकारों को समाप्त करने के लिए स्वामीजी का क्रांतिकारी खाका।",
    missionTitle: isEn ? "Institutional Legacy" : "संस्थागत विरासत",
    missionDesc: isEn ? "Exploring the Ramakrishna Mission's motto: 'For one's own liberation and for the welfare of the world'." : "रामकृष्ण मिशन के मूल मंत्र की खोज: 'अपनी मुक्ति के लिए और संसार की भलाई के लिए' (आत्मनो मोक्षार्थम् जगद्धिताय च)।",
    sisters: isEn ? "SISTERS" : "बहनों",
    brothers: isEn ? "BROTHERS." : "भाइयों।",
    recognition: isEn ? "The Global Triumphs" : "वैश्विक विजय",
    recognitionDesc: isEn ? "From the 1893 Chicago Parliament to the founding of the first Vedanta Society in New York." : "1893 के शिकागो विश्व धर्म सम्मेलन से लेकर न्यूयॉर्क में पहली वेदांत सोसाइटी की स्थापना तक की महान यात्रा।",
    universal: isEn ? "Universal Acceptance" : "सार्वभौमिक स्वीकार्यता",
    universalDesc: isEn ? "A message of tolerance that bridged the gap between ancient Eastern wisdom and modern Western science." : "सहिष्णुता का वह संदेश जिसने प्राचीन पूर्वी ज्ञान और आधुनिक पश्चिमी विज्ञान के बीच की दूरी को मिटा दिया।",
    bold: isEn ? "Arise, Awake, and Stop Not Till the Goal is Reached!" : "उठो, जागो और तब तक मत रुको, जब तक लक्ष्य प्राप्त न हो जाए!",
    // Fix: Added missing exploreChron property to resolve compilation error on line 154
    exploreChron: isEn ? "Explore The Chronicles" : "इतिहास की यात्रा करें"
  };

  return (
    <div className="space-y-64 pb-64 -mt-10 -mx-8 select-none overflow-hidden mesh-bg min-h-screen">
      {/* 1. HERO PORTAL: Cinematic Rank 1 Design */}
      <section className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-orange-600/5 blur-[250px] rounded-full animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
             <span className="text-[75vw] font-serif font-black text-white select-none leading-none -translate-y-20">V</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <svg className="w-[1100px] h-[1100px] animate-rotate-slow" viewBox="0 0 100 100">
              <path id="heroPath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
              <text className={`text-[2.2px] font-bold uppercase tracking-[0.8em] fill-orange-500 ${isEn ? 'font-serif' : ''}`}>
                <textPath xlinkHref="#heroPath">
                  {isEn 
                    ? 'THE SOUL IS ETERNAL • KNOWLEDGE IS THE GOAL • STRENGTH IS RELIGION • LOVE IS THE LAW •' 
                    : 'आत्मा शाश्वत है • ज्ञान ही लक्ष्य है • शक्ति ही धर्म है • प्रेम ही नियम है •'}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-7xl reveal">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-orange-500" />
              <span className="text-orange-500 uppercase tracking-[1.2em] font-black text-[10px]">{t.archive}</span>
              <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-orange-500" />
            </div>
            <h1 className="text-[14vw] md:text-[13rem] font-serif font-black text-white tracking-tighter leading-[0.75] mb-12">
              VIVEKA<br/>
              <span className="text-reveal-gold italic font-light">NANDA.</span>
            </h1>
          </div>
          <div className="max-w-5xl mx-auto space-y-20">
            <p className={`text-3xl md:text-5xl text-stone-300 leading-tight ${isEn ? 'font-serif italic font-light' : 'font-bold'}`}>
              "{t.quote}"
            </p>
            <div className="flex flex-wrap justify-center gap-10 pt-10">
              <button onClick={() => onViewChange(AppView.CHRONICLES)} className="px-20 py-7 saffron-gradient text-white font-black rounded-full hover:scale-105 active:scale-95 shadow-[0_30px_90px_rgba(234,88,12,0.4)] transition-all flex items-center gap-6 text-2xl group">
                {t.unveil}
                <svg className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button onClick={() => onViewChange(AppView.PHILOSOPHY)} className="px-20 py-7 border-2 border-white/10 text-white font-black rounded-full hover:bg-white/5 transition-all text-2xl glass-panel backdrop-blur-3xl">{t.oracle}</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY GALLERY: High Detail Cards */}
      <section className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32 border-l-4 border-orange-500 pl-12 py-4">
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-8xl font-serif font-black text-white leading-none tracking-tighter">{t.paths}</h2>
            <p className="text-stone-400 text-3xl font-light leading-relaxed">{t.pathDesc}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div onClick={() => onViewChange(AppView.PHILOSOPHY)} className="lg:col-span-8 h-[800px] glass-card p-24 rounded-[6rem] flex flex-col justify-between group cursor-pointer overflow-hidden relative border-white/10 bg-stone-900/40">
            <div className="absolute -top-32 -right-32 p-16 text-[45rem] font-serif text-white opacity-[0.03] transition-all duration-1000 select-none">ॐ</div>
            <div className="space-y-10 relative z-10">
               <span className="text-orange-500 font-black tracking-[0.8em] text-[12px] uppercase">{isEn ? 'THE SUPREME SCIENCE' : 'परम सत्य का विज्ञान'}</span>
               <h3 className="text-8xl font-serif font-black text-white leading-tight">{t.practical}</h3>
               <p className="text-stone-300 text-3xl font-light leading-relaxed max-w-2xl">{t.vedantaDesc}</p>
            </div>
            <div className="flex items-center gap-8 relative z-10">
               <div className="w-32 h-[2px] bg-orange-500 group-hover:w-48 transition-all duration-700" />
               <span className="text-[12px] font-black tracking-[0.5em] text-white uppercase">{isEn ? 'DEEP RESEARCH PORTAL' : 'गहन शोध पोर्टल'}</span>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div onClick={() => onViewChange(AppView.SOCIAL_VISION)} className="flex-1 glass-card p-16 rounded-[5rem] group cursor-pointer flex flex-col justify-center gap-8 border-white/5 bg-stone-900/60">
              <span className="text-orange-500 font-black tracking-[0.4em] text-[11px] uppercase">{isEn ? 'SOCIETAL BLUEPRINT' : 'समाज का नवनिर्माण'}</span>
              <h4 className="text-5xl font-serif font-bold text-white group-hover:text-orange-500 transition-colors">{t.reformTitle}</h4>
              <p className="text-stone-400 text-xl leading-relaxed font-light">{t.reformDesc}</p>
            </div>
            <div onClick={() => onViewChange(AppView.INSTITUTIONS)} className="flex-1 saffron-gradient p-16 rounded-[5rem] group cursor-pointer hover:scale-[1.05] transition-all duration-700 shadow-2xl flex flex-col justify-center gap-8">
              <span className="text-white/70 font-black tracking-[0.4em] text-[11px] uppercase">{isEn ? 'GLOBAL MISSION' : 'वैश्विक मिशन'}</span>
              <h4 className="text-5xl font-serif font-bold text-white">{t.missionTitle}</h4>
              <p className="text-white/90 text-xl leading-relaxed font-light">{t.missionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHICAGO CINEMATIC SPOTLIGHT: Full Narrative Width */}
      <section className="relative py-80 bg-[#080808]">
        <div className="max-w-[1400px] mx-auto px-12 text-center space-y-32 relative z-10">
            <div className="space-y-10">
                <span className="text-orange-500 font-black tracking-[1.2em] text-[12px] uppercase block">{isEn ? 'THE ICONIC ADDRESS OF 1893' : '1893 का वह ऐतिहासिक संबोधन'}</span>
                <h2 className="text-9xl md:text-[15rem] font-serif text-white font-black leading-none tracking-tighter">
                  {t.sisters} <span className="italic font-light text-stone-600">&</span> <br/> {t.brothers}
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-left border-t border-white/10 pt-24">
                <div className="space-y-6">
                    <h5 className="text-orange-500 font-black text-sm uppercase tracking-[0.4em]">{t.recognition}</h5>
                    <p className="text-stone-400 text-2xl font-light leading-relaxed">{t.recognitionDesc}</p>
                </div>
                <div className="space-y-6 border-l border-white/10 pl-16">
                    <h5 className="text-orange-500 font-black text-sm uppercase tracking-[0.4em]">{t.universal}</h5>
                    <p className="text-stone-400 text-2xl font-light leading-relaxed">{t.universalDesc}</p>
                </div>
                <div className="space-y-6 border-l border-white/10 pl-16">
                    <h5 className="text-orange-500 font-black text-sm uppercase tracking-[0.4em]">{isEn ? 'Cultural Synthesis' : 'सांस्कृतिक समन्वय'}</h5>
                    <p className="text-stone-400 text-2xl font-light leading-relaxed">{isEn ? 'The fusion of Eastern spiritual realization with Western efficiency.' : 'पूर्वी आध्यात्मिकता और पश्चिमी कार्यक्षमता का अद्भुत संगम।'}</p>
                </div>
            </div>
            <button onClick={() => onViewChange(AppView.CHRONICLES)} className="mt-16 px-20 py-8 bg-white text-black font-black rounded-full hover:bg-orange-500 hover:text-white transition-all text-sm tracking-[0.5em] uppercase shadow-2xl">
              {t.exploreChron}
            </button>
        </div>
      </section>

      <footer className="pt-64 pb-80 text-center relative overflow-hidden bg-gradient-to-t from-[#050505] to-transparent">
        <div className="max-w-5xl mx-auto space-y-24 relative z-10 px-8">
          <div className="w-32 h-32 saffron-gradient rounded-[2.5rem] mx-auto flex items-center justify-center shadow-[0_40px_100px_rgba(234,88,12,0.5)] transform -rotate-12 hover:rotate-0 transition-all duration-1000">
            <span className="text-white font-serif font-black text-7xl">V</span>
          </div>
          <p className="text-stone-400 italic font-serif text-4xl leading-relaxed">"{t.bold}"</p>
          <div className="h-[1px] w-32 bg-stone-800 mx-auto" />
          <p className="text-stone-600 font-black tracking-[1em] text-[10px] uppercase">Swami Vivekananda • 1863 - 1902</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
