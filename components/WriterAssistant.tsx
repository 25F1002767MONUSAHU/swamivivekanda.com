
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const WriterAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [taskType, setTaskType] = useState('Essay Draft');
  const [result, setResult] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const tasks = [
    'Essay Draft', 'Professional Email', 'Technical Documentation', 'Code Refactor', 'Storytelling', 'Summarization'
  ];

  const handleWrite = async () => {
    if (!prompt.trim() || isThinking) return;

    setIsThinking(true);
    setResult('');
    try {
      // Fix: renamed generateStructuredContent to generateReflection
      const content = await geminiService.generateReflection(prompt, taskType);
      setResult(content);
    } catch (error) {
      console.error('Writer error:', error);
      alert('Failed to generate content.');
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="space-y-6">
        <div className="bg-gray-900/50 p-6 rounded-3xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-emerald-500">Scribe</span> Input
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Task Template</label>
              <div className="flex flex-wrap gap-2">
                {tasks.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTaskType(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      taskType === t 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Context & Requirements</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Paste your notes or detailed instructions here..."
                className="w-full bg-gray-950 text-white border border-gray-800 rounded-2xl p-4 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none h-64 resize-none transition-all"
              />
            </div>

            <button
              onClick={handleWrite}
              disabled={isThinking || !prompt.trim()}
              className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-gray-800 disabled:text-gray-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-emerald-600/10"
            >
              {isThinking ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                  Processing (Thinking mode)...
                </>
              ) : (
                'Draft Content'
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-gray-950 rounded-3xl border border-gray-800 overflow-hidden relative">
        <div className="h-14 bg-gray-900/50 px-6 flex items-center justify-between border-b border-gray-800">
          <span className="text-sm font-semibold text-gray-400">Output Editor</span>
          {result && (
            <button 
              onClick={() => {
                navigator.clipboard.writeText(result);
                alert('Copied to clipboard!');
              }}
              className="p-1.5 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </button>
          )}
        </div>
        <div className="flex-1 p-6 overflow-y-auto font-mono text-sm leading-relaxed text-gray-300">
          {result ? (
            <div className="prose prose-invert max-w-none whitespace-pre-wrap">{result}</div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-700 space-y-4">
              <div className="w-16 h-16 border-2 border-dashed border-gray-800 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <p>Generated draft will appear here</p>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-800 bg-gray-900/30">
          <p className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.2em] text-center">Optimized for complex reasoning</p>
        </div>
      </div>
    </div>
  );
};

export default WriterAssistant;
