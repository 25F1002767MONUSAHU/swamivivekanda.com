
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const Scribe: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [taskType, setTaskType] = useState('Philosophical Reflection');
  const [result, setResult] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const tasks = ['Philosophical Reflection', 'Drafting a Lecture', 'Comparative Summary', 'Modern Application', 'Personal Journaling'];

  const handleWrite = async () => {
    if (!prompt.trim() || isThinking) return;
    setIsThinking(true);
    try {
      const content = await geminiService.generateReflection(prompt, taskType);
      setResult(content);
    } catch (error) {
      alert('Failed to generate wisdom.');
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full py-4">
      <div className="space-y-6">
        <div className="glass-panel p-8 rounded-[2rem] border-stone-800">
          <h3 className="text-2xl font-serif font-bold text-white mb-8">The Scribe's Desk</h3>
          <div className="space-y-8">
            <div>
              <label className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 block">Select Focus</label>
              <div className="flex flex-wrap gap-2">
                {tasks.map((t) => (
                  <button key={t} onClick={() => setTaskType(t)} className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${taskType === t ? 'bg-orange-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 block">Topic or Passage for Analysis</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a topic like 'Education of the Masses' or a specific quote for reflection..."
                className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-2xl p-5 h-64 outline-none focus:border-orange-500/50"
              />
            </div>
            <button onClick={handleWrite} disabled={isThinking || !prompt.trim()} className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-orange-600/10">
              {isThinking ? 'Contemplating...' : 'Generate Reflection'}
            </button>
          </div>
        </div>
      </div>
      <div className="glass-panel rounded-[2rem] overflow-hidden flex flex-col border-stone-800">
        <div className="h-14 bg-stone-800/40 px-6 flex items-center justify-between border-b border-stone-800">
          <span className="text-sm font-semibold text-stone-400">Archive Output</span>
        </div>
        <div className="flex-1 p-8 overflow-y-auto text-stone-300 leading-relaxed font-light">
          {result ? <div className="prose prose-stone prose-invert max-w-none whitespace-pre-wrap">{result}</div> : <div className="h-full flex flex-col items-center justify-center opacity-30 text-center space-y-4">
            <span className="text-6xl">📜</span>
            <p>Your reflections will be recorded here.</p>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Scribe;
