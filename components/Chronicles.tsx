
import React, { useState } from 'react';

const Chronicles: React.FC = () => {
  const [activeEra, setActiveEra] = useState<number>(0);

  const eras = [
    {
      title: "Roots & Awakening (1863-1886)",
      events: [
        { 
          year: '1863', 
          title: 'The Sun Rises in Calcutta', 
          desc: 'Born Narendranath Datta on January 12 during Makar Sankranti. Son of Vishwanath Datta, a successful attorney, and Bhuvaneshwari Devi, a deeply religious mother who shaped his spiritual soul. As a child, he memorized entire Sanskrit grammars and the Ramayana/Mahabharata by age 7.' 
        },
        { 
          year: '1881', 
          title: 'Sir, Have You Seen God?', 
          desc: 'The historic encounter at Dakshineshwar. 18-year-old Narendra asks Sri Ramakrishna the question that defined his life. The reply: "Yes, I see Him as clearly as I see you." This began a guru-disciple relationship characterized by intellectual rigor and divine love.' 
        },
        { 
          year: '1884', 
          title: 'The Altar of Renunciation', 
          desc: 'Following his father\'s sudden death, the family faces ruin. Narendra attempts to pray for wealth but finds himself only able to pray for "Discrimination and Renunciation." He fully accepts the ascetic path under the Master\'s guidance.' 
        },
        { 
          year: '1886', 
          title: 'Jiva is Shiva', 
          desc: 'Sri Ramakrishna passes on August 16. Before death, he gives Narendra instructions for a monastic order. The first Baranagar Math is established, and Narendra assumes the name Swami Vivekananda.' 
        }
      ]
    },
    {
      title: "Discovery of India (1888-1893)",
      events: [
        { 
          year: '1888-1890', 
          title: 'The Wandering Monk', 
          desc: 'Travels Northern India via Varanasi, Ayodhya, and Agra. In Rishikesh, he experiences Nirvikalpa Samadhi. Receives blessings from Holy Mother Sri Sarada Devi to embark on a journey that would last 5 years.' 
        },
        { 
          year: '1891-1892', 
          title: 'The Western & Himalayan Sojourn', 
          desc: 'Travels through Rajasthan (meeting Maharaja Ajit Singh of Khetri) and Gujarat, studying Jain scriptures. First suggestion to take Vedanta to the West is made in Limbdi.' 
        },
        { 
          year: '1892', 
          title: 'Southern Pilgrimage & Kanyakumari', 
          desc: 'Witnesses temple glory and crushing poverty. In December, he swims to the Kanyakumari Rock. Meditating for 3 days, he sees his mission: "I will go to the West for material secrets and give them our spiritual secrets."' 
        }
      ]
    },
    {
      title: "The Global Stage (1893-1900)",
      events: [
        { 
          year: '1893', 
          title: 'The Chicago Parliament', 
          desc: 'Sails via Singapore and Japan to Chicago. On Sept 11, delivers the "Sisters and Brothers" speech. The New York Herald declares: "After hearing him, we feel how foolish it is to send missionaries to this learned nation."' 
        },
        { 
          year: '1894-1896', 
          title: 'Sowing the Seeds', 
          desc: 'Founding of the Vedanta Society of New York. Lectures across the US and Europe. Meets Nikola Tesla and Indologist Max Muller. Sister Nivedita (Margaret Noble) meets him in London.' 
        },
        { 
          year: '1897', 
          title: 'Triumphant Return', 
          desc: 'Lands in Colombo. Massive crowds welcome him in Chennai and Calcutta. Founds the Ramakrishna Mission on May 1 at Belur to combine spiritual practice with social service.' 
        }
      ]
    },
    {
      title: "Final Days & Mahasamadhi (1902)",
      events: [
        { 
          year: 'July 4, 1902', 
          title: 'The Grand Departure', 
          desc: 'Wakes at 6 AM. Meditates until 11 AM. Teaches Sanskrit grammar in the afternoon. At 9:10 PM, while in meditation, enters Mahasamadhi. He was 39 years, 5 months, and 24 days old, fulfilling his prophecy that he wouldn\'t see 40.' 
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 animate-in fade-in duration-1000 space-y-24">
      <div className="text-center space-y-8">
        <h2 className="text-6xl md:text-[8rem] font-serif font-bold text-white tracking-tighter leading-none">The <span className="text-orange-600">Chronicles.</span></h2>
        <p className="text-stone-500 uppercase tracking-[1em] font-bold text-xs">THE COMPREHENSIVE BIOGRAPHICAL MAP</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 border-b border-white/5 pb-12">
        {eras.map((era, i) => (
          <button
            key={i}
            onClick={() => setActiveEra(i)}
            className={`px-10 py-5 rounded-full text-sm font-bold tracking-widest transition-all ${
              activeEra === i ? 'bg-orange-600 text-white shadow-[0_0_30px_rgba(234,88,12,0.3)]' : 'bg-stone-900 text-stone-500 hover:text-white'
            }`}
          >
            {era.title}
          </button>
        ))}
      </div>

      <div className="space-y-24 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-orange-500 via-stone-800 to-transparent hidden md:block" />
        
        {eras[activeEra].events.map((event, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center gap-12 group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2 space-y-6">
              <div className={`p-12 glass-panel rounded-[3.5rem] border-white/5 transition-all duration-700 hover:border-orange-500/20 group-hover:bg-stone-900/20 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-orange-500 font-serif text-5xl font-bold italic mb-4 block opacity-40 group-hover:opacity-100 transition-opacity">{event.year}</span>
                <h3 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">{event.title}</h3>
                <p className="text-stone-400 text-lg font-light leading-relaxed">{event.desc}</p>
              </div>
            </div>
            
            <div className="w-12 h-12 rounded-full saffron-gradient shadow-2xl z-10 flex-shrink-0 flex items-center justify-center ring-8 ring-[#050505]">
                <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            
            <div className="hidden md:block w-1/2" />
          </div>
        ))}
      </div>

      <section className="bg-stone-900/30 p-12 md:p-24 rounded-[4rem] border border-white/5 mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
                <h4 className="text-4xl font-serif text-white">The Anatomy of a Saint</h4>
                <p className="text-stone-400 text-xl font-light leading-relaxed italic">
                    Swamiji suffered from no fewer than 31 diseases throughout his life, including chronic insomnia, diabetes, asthma, and migraines.
                </p>
                <p className="text-stone-500 font-light">
                    "I never in my life could sleep as soon as I got into bed." Despite physical suffering, he maintained a schedule of teaching Sanskrit and performing evening worship until his final hour.
                </p>
            </div>
            <div className="glass-panel p-10 rounded-[3rem] border-orange-500/20 bg-orange-600/5">
                <h5 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-6">July 4, 1902: The Final Walk</h5>
                <p className="text-stone-200 font-serif text-xl leading-relaxed">
                    At 4:00 PM, he walked two miles with Swami Premananda. He remarked: <br/> <br/>
                    <span className="text-white font-bold italic">"India is immortal if she persists in her search for God. But if she goes in for politics and social conflict, she will die."</span>
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Chronicles;
