
import React, { useState, useCallback } from 'react';
import { AppView, Language } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Chronicles from './components/Chronicles';
import WisdomChat from './components/WisdomChat';
import PhilosophyHub from './components/PhilosophyHub';
import SocialVision from './components/SocialVision';
import Institutions from './components/Institutions';
import Library from './components/Library';
import Legacy from './components/Legacy';
import Explorer from './components/Explorer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === Language.EN ? Language.HI : Language.EN);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard onViewChange={setCurrentView} lang={language} />;
      case AppView.CHRONICLES: return <Chronicles lang={language} />;
      case AppView.PHILOSOPHY: return <PhilosophyHub lang={language} />;
      case AppView.SOCIAL_VISION: return <SocialVision lang={language} />;
      case AppView.INSTITUTIONS: return <Institutions lang={language} />;
      case AppView.LIBRARY: return <Library lang={language} />;
      case AppView.LEGACY: return <Legacy lang={language} />;
      case AppView.WISDOM_CHAT: return <WisdomChat lang={language} />;
      case AppView.EXPLORER: return <Explorer lang={language} />;
      default: return <Dashboard onViewChange={setCurrentView} lang={language} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#050505] overflow-hidden selection:bg-orange-500/30 selection:text-white">
      {/* Cinematic Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-orange-600/5 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-stone-900/40 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      </div>

      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        lang={language}
      />
      
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <Header 
          currentView={currentView} 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar}
          lang={language}
          toggleLanguage={toggleLanguage}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:px-12 md:pb-12 custom-scrollbar">
          <div className="max-w-7xl mx-auto h-full">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
