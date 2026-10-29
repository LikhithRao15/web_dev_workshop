import React from 'react';
import {
  Sprout, ChevronRight, Flame, Home, BookOpen, Terminal, Gamepad2
} from 'lucide-react';
import { tracks } from '../data/tracks';

export default function Sidebar({
  page,
  activeTrack,
  xp,
  mobileNav,
  setMobileNav,
  onSelectPage,
  onGoToTrack
}) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'learn', label: 'Learning paths', icon: BookOpen },
    { id: 'playground', label: 'Playground', icon: Terminal },
    { id: 'games', label: 'Challenge arena', icon: Gamepad2 }
  ];

  return (
    <>
      <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`}>
        <button
          className="brand"
          onClick={() => onSelectPage('home')}
          aria-label="CodeBloom home"
        >
          <span className="brand-mark"><Sprout size={22} /></span>
          <span>CodeBloom<span className="brand-dot">.</span></span>
        </button>

        <div className="sidebar-label">LEARN</div>
        <nav className="nav-list">
          {navItems.map(item => {
            const Icon = item.icon;
            const active = page === item.id || (item.id === 'learn' && page === 'learn');
            return (
              <button
                key={item.id}
                className={`nav-item ${active ? 'active' : ''}`}
                onClick={() => onSelectPage(item.id)}
              >
                <Icon size={18} strokeWidth={1.9} />
                <span>{item.label}</span>
                {item.id === 'games' && <span className="nav-new">PLAY</span>}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-label track-label">YOUR TRACKS</div>
        <div className="track-nav">
          {tracks.map(t => {
            const Icon = t.icon;
            const isSelected = activeTrack === t.id && page === 'learn';
            return (
              <button
                key={t.id}
                className={`track-nav-item ${isSelected ? 'selected' : ''}`}
                onClick={() => onGoToTrack(t.id)}
              >
                <span className={`tiny-icon ${t.color}`}><Icon size={15} /></span>
                <span>{t.title}</span>
                <ChevronRight size={15} className="track-chevron" />
              </button>
            );
          })}
        </div>

        <div className="sidebar-bottom">
          <div className="streak-card">
            <div className="streak-icon"><Flame size={18} fill="currentColor" /></div>
            <div>
              <strong>{xp} XP earned</strong>
              <span>Every experiment counts.</span>
            </div>
          </div>
          <div className="sidebar-foot">
            <span className="online-dot"></span> Your progress saves locally
          </div>
        </div>
      </aside>

      {mobileNav && (
        <button
          className="mobile-scrim"
          onClick={() => setMobileNav(false)}
          aria-label="Close menu"
        />
      )}
    </>
  );
}
