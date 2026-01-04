
import React from 'react';
import { Language } from '../types';

interface SocialVisionProps {
  lang: Language;
}

const SocialVision: React.FC<SocialVisionProps> = ({ lang }) => {
  const isEn = lang === Language.EN;

  return (
    <div className="py-24 animate-in fade-in duration-1000 space-y-40">
      <section className="text-center space-y-12 max-w-5xl mx-auto">
        <h2 className="text-8xl md:text-[10rem] font-serif font-black text-white tracking-tighter leading-none">
          {isEn ? 'Social' : 'सामाजिक'} <span className="text-orange-600">{isEn ? 'Vision.' : 'दृष्टि।'}</span>
        </h2>
        <p className="text-stone-500 uppercase tracking-[1em] font-black text-xs">{isEn ? 'THE RECONSTRUCTION OF HUMANITY' : 'मानवता के पुनर्निर्माण का महान लक्ष्य'}</p>
      </section>

      {/* Education Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
            <div className="space-y-4">
                <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs">{isEn ? 'Foundation of Progress' : 'प्रगति की नींव'}</span>
                <h3 className="text-7xl font-serif text-white">{isEn ? 'Education as Manifestation' : 'मनुष्य बनाने वाली शिक्षा'}</h3>
            </div>
            <p className="text-stone-400 text-2xl font-light leading-relaxed">
                {isEn 
                  ? "\"Education is the manifestation of perfection already in man.\" Vivekananda rejected the notion that education meant filling an empty vessel. It should draw out the inherent potential and build character."
                  : "\"शिक्षा मनुष्य के भीतर पहले से मौजूद पूर्णता का प्रकटीकरण है।\" विवेकानंद ने उस शिक्षा को नकारा जो केवल जानकारी भरती है। उनके अनुसार शिक्षा वह है जो चरित्र बनाए और आत्मविश्वास जगाए।"}
            </p>
            <div className="grid grid-cols-1 gap-6">
                {[
                  isEn ? "Character-building: The primary goal" : "चरित्र निर्माण: शिक्षा का मुख्य लक्ष्य",
                  isEn ? "Mass education: Accessible to the poor" : "जन-शिक्षा: गरीबों के लिए सुलभ शिक्षा",
                  isEn ? "Practical: Preparing for real-life challenges" : "व्यावहारिक: जीवन की चुनौतियों के लिए तैयार करना",
                  isEn ? "Strength: Making one stand on their own feet" : "शक्ति: अपने पैरों पर खड़ा करने वाला आत्मबल"
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center">
                        <div className="w-2 h-2 rounded-full bg-orange-600" />
                        <span className="text-stone-300 text-xl font-light">{item}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="glass-panel p-20 rounded-[5rem] border-white/5 bg-orange-600/5 relative overflow-hidden group hover:bg-orange-600/10 transition-all duration-1000">
            <p className="text-white text-3xl font-serif italic leading-relaxed relative z-10">
                {isEn 
                  ? "\"We want that education by which character is formed, strength of mind is increased, the intellect is expanded, and by which one can stand on one's own feet.\""
                  : "\"हमें उस शिक्षा की आवश्यकता है जिससे चरित्र का निर्माण हो, मन की शक्ति बढ़े, बुद्धि का विकास हो और जिससे मनुष्य अपने पैरों पर खड़ा हो सके।\""}
            </p>
        </div>
      </section>

      {/* Women's Empowerment */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 glass-panel p-20 rounded-[5rem] border-white/5 bg-stone-900/60 flex flex-col items-center text-center space-y-10">
            <div className="w-24 h-24 saffron-gradient rounded-3xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-serif font-black text-5xl">N</span>
            </div>
            <div className="space-y-4">
                <h4 className="text-white font-serif text-3xl italic">{isEn ? 'Sister Nivedita' : 'भगिनी निवेदिता'}</h4>
                <p className="text-stone-400 text-xl font-light leading-relaxed">
                    {isEn 
                      ? "Margaret Noble embodied Swamiji's vision. She traveled to India, opened schools for girls, and proved that given autonomy and education, women are the primary architects of a nation's destiny."
                      : "मार्गरेट नोबल ने स्वामीजी के सपनों को जिया। वे भारत आईं, लड़कियों के लिए स्कूल खोले और साबित किया कि यदि महिलाओं को शिक्षा और स्वतंत्रता दी जाए, तो वे राष्ट्र निर्माण में सबसे बड़ी शक्ति बन सकती हैं।"}
                </p>
            </div>
        </div>
        <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
                <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs">{isEn ? 'A Wing of Sovereignty' : 'सशक्तिकरण का पंख'}</span>
                <h3 className="text-7xl font-serif text-white">{isEn ? 'The Power of Women' : 'नारी शक्ति का उदय'}</h3>
            </div>
            <p className="text-stone-400 text-2xl font-light leading-relaxed italic">
                {isEn 
                  ? "\"It is not possible for a bird to fly on only one wing. There is no chance for the welfare of the world unless the condition of women is improved.\""
                  : "\"जैसे एक पक्षी केवल एक पंख से नहीं उड़ सकता, वैसे ही जब तक महिलाओं की स्थिति में सुधार नहीं होगा, दुनिया का कल्याण संभव नहीं है।\""}
            </p>
            <p className="text-stone-500 text-xl font-light leading-relaxed">
                {isEn 
                  ? "Vivekananda advocated for complete equality. He believed that instead of men deciding what reforms were needed, women should be educated and then left alone to decide their own future."
                  : "विवेकानंद पूर्ण समानता के पक्षधर थे। उनका मानना था कि पुरुषों को यह तय करने के बजाय कि महिलाओं को क्या चाहिए, उन्हें शिक्षित कर स्वतंत्र छोड़ देना चाहिए ताकि वे अपना भविष्य स्वयं तय कर सकें।"}
            </p>
        </div>
      </section>

      {/* Caste & Daridra Narayana */}
      <section className="space-y-20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
            <h3 className="text-7xl font-serif text-white">{isEn ? 'Daridra Narayana' : 'दरिद्र नारायण'}</h3>
            <p className="text-stone-400 text-3xl font-light leading-relaxed italic">
                {isEn 
                  ? "\"Where should you go to seek God—are not all the poor, the miserable, the weak, Gods? Why not worship them first?\""
                  : "\"तुम ईश्वर को खोजने कहाँ जाओगे—क्या ये गरीब, दुखी और कमजोर लोग साक्षात् ईश्वर नहीं हैं? क्यों न सबसे पहले इनकी ही पूजा की जाए?\""}
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                t: isEn ? "Against Privilege" : "विशेषाधिकार के विरुद्ध", 
                d: isEn ? "He vehemently criticized the hereditary caste system and exploitation, calling the neglect of the masses India's greatest national sin." : "उन्होंने जन्म आधारित जाति व्यवस्था और शोषण की कड़ी निंदा की। उन्होंने आम जनता की उपेक्षा को भारत का सबसे बड़ा 'राष्ट्रीय पाप' बताया।" 
              },
              { 
                t: isEn ? "Service as Worship" : "सेवा ही पूजा", 
                d: isEn ? "He transformed social service into a spiritual discipline. Serving the hungry, sick, and suffering became the highest form of Vedantic practice." : "उन्होंने समाज सेवा को एक आध्यात्मिक साधना बना दिया। भूखों, बीमारों और पीड़ितों की सेवा करना ही वेदांत का सबसे उच्च अभ्यास बन गया।" 
              },
              { 
                t: isEn ? "Inner Strength" : "आंतरिक शक्ति", 
                d: isEn ? "The solution lay in restoring dignity and self-confidence to the oppressed through mass education and spiritual empowerment." : "इसका समाधान शोषितों को जन-शिक्षा और आध्यात्मिक शक्ति के माध्यम से उनके आत्म-सम्मान और आत्मविश्वास को वापस दिलाने में था।" 
              }
            ].map((item, i) => (
                <div key={i} className="glass-panel p-16 rounded-[4rem] border-white/5 space-y-8 hover:border-orange-500/30 transition-all group">
                    <h4 className="text-orange-500 font-black tracking-widest text-xs uppercase">{item.t}</h4>
                    <p className="text-stone-300 text-xl font-light leading-relaxed">{item.d}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default SocialVision;
