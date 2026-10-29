import React, { useState, useEffect } from 'react';
import { tracks, starterCode, lessonContent } from './data/tracks';
import { getSavedProgress, saveProgress, getSavedTheme, saveTheme } from './utils/storage';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import HomeView from './views/HomeView';
import LearnView from './views/LearnView';
import PlaygroundView from './views/PlaygroundView';
import GamesView from './views/GamesView';

export default function App() {
  const [page, setPage] = useState('home');
  const [activeTrack, setActiveTrack] = useState('html');
  const [activeLesson, setActiveLesson] = useState(0);
  const [progress, setProgress] = useState(getSavedProgress);
  const [theme, setTheme] = useState(getSavedTheme);
  const [mobileNav, setMobileNav] = useState(false);
  const [code, setCode] = useState(starterCode.html);

  // Sync progress changes to localStorage
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Sync theme changes to data-theme and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const currentTrack = tracks.find(t => t.id === activeTrack) || tracks[0];
  const currentContent = lessonContent[activeTrack] || lessonContent.html;

  const goToTrack = (id) => {
    setActiveTrack(id);
    setActiveLesson(0);
    setCode(starterCode[id]);
    setPage('learn');
    setMobileNav(false);
  };

  const handleSelectTrackInPlayground = (id) => {
    setActiveTrack(id);
    setCode(starterCode[id]);
  };

  const selectPage = (id) => {
    if (id === 'learn') {
      goToTrack(activeTrack);
    } else {
      setPage(id);
      setMobileNav(false);
    }
  };

  const markComplete = () => {
    const lessonKey = `${activeTrack}-${activeLesson}`;
    if (progress.completed.includes(lessonKey)) return;

    setProgress(p => ({
      ...p,
      completed: [...p.completed, lessonKey],
      xp: (p.xp || 0) + 20
    }));
  };

  const addXp = (amount) => {
    setProgress(p => ({
      ...p,
      xp: (p.xp || 0) + amount
    }));
  };

  return (
    <div className="app-shell">
      <Sidebar
        page={page}
        activeTrack={activeTrack}
        xp={progress.xp || 0}
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
        onSelectPage={selectPage}
        onGoToTrack={goToTrack}
      />

      <main className="main-area">
        <Topbar
          page={page}
          currentTrack={currentTrack}
          xp={progress.xp || 0}
          theme={theme}
          onToggleTheme={toggleTheme}
          mobileNav={mobileNav}
          setMobileNav={setMobileNav}
        />

        {page === 'home' && (
          <HomeView
            progress={progress}
            onGoToTrack={goToTrack}
            onOpenPlayground={() => selectPage('playground')}
            onOpenGames={() => selectPage('games')}
          />
        )}

        {page === 'learn' && (
          <LearnView
            currentTrack={currentTrack}
            activeTrack={activeTrack}
            activeLesson={activeLesson}
            setActiveLesson={setActiveLesson}
            currentContent={currentContent}
            progress={progress}
            onMarkComplete={markComplete}
            onOpenInPlayground={(customCode) => {
              setCode(customCode || starterCode[activeTrack]);
              setPage('playground');
            }}
          />
        )}

        {page === 'playground' && (
          <PlaygroundView
            activeTrack={activeTrack}
            onSelectTrack={handleSelectTrackInPlayground}
            code={code}
            setCode={setCode}
          />
        )}

        {page === 'games' && (
          <GamesView
            onAddXp={addXp}
            onGoToTrack={goToTrack}
          />
        )}
      </main>
    </div>
  );
}