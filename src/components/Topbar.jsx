import React from 'react';
import { Menu, X, ChevronRight, Flame, Sun, Moon } from 'lucide-react';

export default function Topbar({
  page,
  currentTrack,
  xp,
  theme,
  onToggleTheme,
  mobileNav,
  setMobileNav
}) {
  const getBreadcrumb = () => {
    switch (page) {
      case 'home': return 'Overview';
      case 'learn': return currentTrack?.title || 'Learning path';
      case 'playground': return 'Playground';
      case 'games': return 'Challenge arena';
      default: return 'Workspace';
    }
  };

  return (
    <header className="topbar">
      <button
        className="mobile-menu icon-button"
        onClick={() => setMobileNav(v => !v)}
        aria-label="Toggle navigation"
      >
        {mobileNav ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="breadcrumbs">
        <span>Workspace</span>
        <ChevronRight size={14} />
        <strong>{getBreadcrumb()}</strong>
      </div>

      <div className="topbar-right">
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-label="Toggle color theme"
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <div className="xp-pill">
          <Flame size={16} />
          <strong>{xp}</strong>
          <span>XP</span>
        </div>

        <div className="avatar" title="CodeBloom User">
          CB
        </div>
      </div>
    </header>
  );
}
