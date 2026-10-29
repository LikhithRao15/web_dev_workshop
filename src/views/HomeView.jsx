import React, { useState } from 'react';
import {
  Sparkles, ArrowRight, Play, CheckCircle2, Star, BookOpen, Flame, Trophy,
  Search, ChevronRight, Gamepad2, Lightbulb
} from 'lucide-react';
import { tracks } from '../data/tracks';

export default function HomeView({
  progress,
  onGoToTrack,
  onOpenPlayground,
  onOpenGames
}) {
  const [query, setQuery] = useState('');

  const xp = progress.xp || 0;
  const completedCount = progress.completed?.length || 0;
  const totalLessons = tracks.reduce((sum, t) => sum + t.lessons, 0);

  const filteredTracks = tracks.filter(t =>
    `${t.title} ${t.subtitle} ${t.description}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="page-content home-page">
      <div className="welcome-row">
        <div>
          <div className="eyebrow">
            <Sparkles size={14} /> YOUR CREATIVE CODING SPACE
          </div>
          <h1>
            Ideas become real<br className="desktop-break" /> when you{' '}
            <span className="gradient-text">start building.</span>
          </h1>
          <p className="hero-copy">
            Learn web development by experimenting, making mistakes, and seeing your code come to life.
          </p>
          <div className="hero-actions">
            <button className="button-primary" onClick={() => onGoToTrack('html')}>
              Start learning <ArrowRight size={17} />
            </button>
            <button className="button-secondary" onClick={onOpenPlayground}>
              <Play size={16} /> Open playground
            </button>
          </div>
          <div className="hero-note">
            <span className="note-check"><CheckCircle2 size={15} /></span>
            Beginner-friendly · Learn at your own pace · Live React compiler
          </div>
        </div>

        <div className="hero-art" aria-label="Code editor illustration">
          <div className="floating-chip chip-html">
            <span className="chip-dot orange-dot"></span> HTML
          </div>
          <div className="floating-chip chip-css">
            <span className="chip-dot purple-dot"></span> CSS
          </div>
          <div className="floating-chip chip-js">
            <span className="chip-dot yellow-dot"></span> JS
          </div>
          <div className="floating-chip chip-react">
            <span className="chip-dot green-dot"></span> React Live
          </div>

          <div className="art-window">
            <div className="art-window-top">
              <span></span><span></span><span></span>
              <small>your-first-page.html</small>
            </div>
            <div className="art-code">
              <div><i>1</i><span className="code-purple">&lt;main&gt;</span></div>
              <div><i>2</i><span className="code-blue">&nbsp;&nbsp;&lt;h1&gt;</span><span className="code-orange">Hello, you!</span><span className="code-blue">&lt;/h1&gt;</span></div>
              <div><i>3</i><span className="code-blue">&nbsp;&nbsp;&lt;p&gt;</span><span className="code-green">Let's create.</span><span className="code-blue">&lt;/p&gt;</span></div>
              <div><i>4</i><span className="code-purple">&lt;/main&gt;</span></div>
              <div className="code-cursor"></div>
            </div>
            <div className="art-preview">
              <div className="preview-spark"><Sparkles size={15} /></div>
              <strong>Hello, you!</strong>
              <span>Let's create.</span>
              <div className="preview-button"></div>
            </div>
          </div>

          <div className="art-star star-one"><Sparkles size={20} /></div>
          <div className="art-star star-two"><Star size={17} /></div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-icon blue"><BookOpen size={19} /></span>
          <div>
            <strong>{completedCount}</strong>
            <span>Lessons completed</span>
          </div>
          <div className="stat-mini">
            {Math.min(100, Math.round((completedCount / (totalLessons || 1)) * 100))}%
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon orange"><Flame size={19} /></span>
          <div>
            <strong>{xp}</strong>
            <span>Experience points</span>
          </div>
          <div className="stat-mini">XP</div>
        </div>
        <div className="stat-card">
          <span className="stat-icon purple"><Trophy size={19} /></span>
          <div>
            <strong>{Math.floor(completedCount / 3)}</strong>
            <span>Milestones reached</span>
          </div>
          <div className="stat-mini"><Star size={14} /></div>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <div className="eyebrow">PICK YOUR STARTING POINT</div>
          <h2>Your learning paths</h2>
          <p>Small lessons. Real skills. Visible progress.</p>
        </div>
        <label className="search-box">
          <Search size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a topic..."
          />
        </label>
      </div>

      <div className="track-grid">
        {filteredTracks.map((t) => {
          const Icon = t.icon;
          const count = progress.completed.filter(c => c.startsWith(`${t.id}-`)).length;
          return (
            <button
              key={t.id}
              className="learning-card"
              onClick={() => onGoToTrack(t.id)}
            >
              <div className="card-top">
                <span className={`track-icon ${t.color}`}><Icon size={22} /></span>
                <span className="card-arrow"><ArrowRight size={17} /></span>
              </div>
              <div className="card-title-row">
                <h3>{t.title}</h3>
                <span className="level-pill">{t.level}</span>
              </div>
              <p className="card-subtitle">{t.subtitle}</p>
              <p className="card-description">{t.description}</p>
              <div className="card-meta">
                <span><BookOpen size={14} />{t.lessons} bite-size lessons</span>
                <span>{t.time}</span>
              </div>
              <div className="progress-track">
                <span style={{ width: `${Math.min(100, (count / t.lessons) * 100)}%` }}></span>
              </div>
              <div className="card-footer">
                <span>{count} of {t.lessons} lessons</span>
                <span className="continue-label">
                  Start path <ChevronRight size={15} />
                </span>
              </div>
            </button>
          );
        })}
        {filteredTracks.length === 0 && (
          <div className="empty-state">
            No matching tracks found. Try searching for “HTML”, “CSS”, “JavaScript”, or “React”.
          </div>
        )}
      </div>

      <div className="bottom-feature-row">
        <div className="challenge-banner">
          <div className="challenge-icon"><Gamepad2 size={24} /></div>
          <div>
            <span className="banner-label">TAKE A BREAK, LEARN SOMETHING</span>
            <h3>Ready for a quick challenge?</h3>
            <p>Test your instincts with eight short questions.</p>
          </div>
          <button className="button-dark" onClick={onOpenGames}>
            Enter arena <ArrowRight size={16} />
          </button>
        </div>

        <div className="tip-card">
          <div className="tip-icon"><Lightbulb size={20} /></div>
          <div>
            <strong>Today's tiny tip</strong>
            <p>Don't just copy code. Change one thing, predict what happens, then test your idea.</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        Made for curious minds <span>·</span> CodeBloom learning playground
      </footer>
    </section>
  );
}
