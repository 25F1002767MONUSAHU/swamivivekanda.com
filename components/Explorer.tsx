
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { SearchResult } from '../types';

const Explorer: React.FC = () => {
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
      const result = await geminiService.searchGrounding(query);
      setAnswer(result.text);
      setSources(result.sources);
    } catch (error) {
      console.error('Explorer error:', error);
      alert('Search failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Nexus Explorer</h2>
        <p className="text-gray-400">Search the real-time web with Gemini grounding.</p>
      </div>

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="What are the latest tech trends in 2025?"
          className="w-full bg-gray-900 text-white border border-gray-800 rounded-2xl px-6 py-5 pr-16 focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/50 outline-none text-lg transition-all shadow-xl shadow-black/40"
        />
        <button
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-amber-600 hover:bg-amber-500 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-xl transition-all"
        >
          {isLoading ? (
            <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          )}
        </button>
      </div>

      {(answer || isLoading) && (
        <div className="space-y-6 animate-in fade-in duration-700">
          <div className="bg-gray-900/50 rounded-3xl border border-gray-800 p-8">
            {isLoading ? (
              <div className="space-y-4">
                <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-800 rounded w-5/6 animate-pulse" />
                <div className="h-4 bg-gray-800 rounded w-2/3 animate-pulse" />
              </div>
            ) : (
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-200 leading-relaxed text-lg">{answer}</p>
              </div>
            )}
          </div>

          {sources.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Sources & Citations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sources.map((source, i) => (
                  <a
                    key={i}
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-900/30 border border-gray-800 hover:border-amber-500/30 rounded-xl transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-amber-500 font-bold group-hover:bg-amber-500/10">
                      {i + 1}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-medium text-gray-300 truncate group-hover:text-amber-400 transition-colors">{source.title}</p>
                      <p className="text-[10px] text-gray-500 truncate">{new URL(source.uri).hostname}</p>
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
