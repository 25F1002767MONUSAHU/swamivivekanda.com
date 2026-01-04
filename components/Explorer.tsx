
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { SearchResult, Language } from '../types';

interface ExplorerProps {
  lang: Language;
}

const Explorer: React.FC<ExplorerProps> = ({ lang }) => {
  const isEn = lang === Language.EN;
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [sources, setSources] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    setAnswer('');
    setSources([]);
    try {
      const promptWithLang = isEn ? query : `${query} (Search and reply in Hindi about Swami Vivekananda or related history)`;
      const result = await geminiService.searchGrounding(promptWithLang);
      setAnswer(result.text);
      setSources(result.sources);
    } catch (error) {
      console.error('Explorer error:', error);
      alert(isEn ? 'Search failed. Please try again.' : 'खोज विफल रही। कृपया पुनः प्रयास करें।');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-serif font-black text-white tracking-tighter">
          {isEn ? 'Sacred' : 'ज्ञान'} <span className="text-orange-500">{isEn ? 'Explorer.' : 'खोज।'}</span>
        </h2>
        <p className="text-stone-400 text-xl font-light">
          {isEn ? 'Discover historical facts via Google Grounding.' : 'गूगल की मदद से इतिहास की सच्चाइयों को जानें।'}
        </p>
      </div>

      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={isEn ? "Ask about any historical event or teaching..." : "किसी भी घटना या शिक्षा के बारे में पूछें..."}
          className="w-full bg-[#111] text-white border border-white/10 rounded-full px-12 py-8 focus:ring-1 focus:ring-orange-500/50 outline-none text-2xl transition-all shadow-2xl"
        />
        <button
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
          className="absolute right-5 top-1/2 -translate-y-1/2 p-5 bg-orange-600 hover:bg-orange-500 text-white rounded-full transition-all shadow-xl"
        >
          {isLoading ? (
            <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          )}
        </button>
      </div>

      {(answer || isLoading) && (
        <div className="space-y-12 animate-in fade-in duration-700">
          <div className="glass-panel rounded-[3rem] border border-white/5 p-16 shadow-2xl bg-stone-900/40">
            {isLoading ? (
              <div className="space-y-6">
                <div className="h-4 bg-white/5 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse" />
                <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse" />
              </div>
            ) : (
              <div className="prose prose-invert max-w-none">
                <p className="text-stone-200 leading-relaxed text-2xl font-light italic">{answer}</p>
              </div>
            )}
          </div>

          {sources.length > 0 && (
            <div className="space-y-6 px-4">
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-[0.4em]">{isEn ? 'Sources from the Archive' : 'संदर्भ और स्रोत'}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sources.map((source, i) => (
                  <a
                    key={i}
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 glass-panel border border-white/5 hover:border-orange-500/30 rounded-[2rem] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center text-orange-500 font-bold group-hover:bg-orange-500/10 transition-colors">
                      {i + 1}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-lg font-serif font-bold text-stone-300 truncate group-hover:text-white transition-colors">{source.title}</p>
                      <p className="text-[10px] text-stone-600 truncate uppercase tracking-widest">{new URL(source.uri).hostname}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Explorer;
