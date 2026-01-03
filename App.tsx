
import React, { useState, useCallback } from 'react';
import { AppView } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Chronicles from './components/Chronicles';
import WisdomChat from './components/WisdomChat';
import YogaStudio from './components/YogaStudio';
import Scribe from './components/Scribe';
import Explorer from './components/Explorer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard onViewChange={setCurrentView} />;
      case AppView.CHRONICLES:
        return <Chronicles />;
      case AppView.WISDOM_CHAT:
        return <WisdomChat />;
      case AppView.YOGA_STUDIO:
        return <YogaStudio />;
      case AppView.SCRIBE:
        return <Scribe />;
      case AppView.EXPLORER:
        return <Explorer />;
      default:
        return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#050505] overflow-hidden selection:bg-orange-500/30 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-orange-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-stone-900/40 blur-[150px] rounded-full" />
      </div>

      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      
      <div className="flex-1 flex flex-col min-w-0 relative">
        <Header 
          currentView={currentView} 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
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
