import React, { useState } from 'react';
import {
  Gamepad2, Trophy, Star, CheckCircle2, Lightbulb, ArrowRight, RotateCcw,
  Sparkles, Zap, Shield, Crown, ChevronRight
} from 'lucide-react';
import { challengeLevels, questionsByLevel } from '../data/quizQuestions';

const LEVEL_ICONS = {
  Sprout: Sparkles,
  Zap: Zap,
  Shield: Shield,
  Crown: Crown
};

export default function GamesView({ onAddXp, onGoToTrack }) {
  const [selectedLevelId, setSelectedLevelId] = useState('beginner');
  const [gameIndex, setGameIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameDone, setGameDone] = useState(false);

  const activeLevel = challengeLevels.find(l => l.id === selectedLevelId) || challengeLevels[0];
  const activeQuestions = questionsByLevel[selectedLevelId] || [];
  const currentQ = activeQuestions[gameIndex] || activeQuestions[0];

  const handleSelectLevel = (levelId) => {
    setSelectedLevelId(levelId);
    setGameIndex(0);
    setSelectedAnswer(null);
    setGameScore(0);
    setGameDone(false);
  };

  const chooseAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQ.answer) {
      setGameScore(s => s + 1);
      onAddXp(activeLevel.xpPerQuestion);
    }
  };

  const nextQuestion = () => {
    if (gameIndex + 1 >= activeQuestions.length) {
      setGameDone(true);
    } else {
      setGameIndex(i => i + 1);
      setSelectedAnswer(null);
    }
  };

  const resetGame = () => {
    setGameIndex(0);
    setSelectedAnswer(null);
    setGameScore(0);
    setGameDone(false);
  };

  const currentLevelIndex = challengeLevels.findIndex(l => l.id === selectedLevelId);
  const hasNextLevel = currentLevelIndex < challengeLevels.length - 1;

  const goToNextLevel = () => {
    if (hasNextLevel) {
      handleSelectLevel(challengeLevels[currentLevelIndex + 1].id);
    }
  };

  const earnedXp = gameScore * activeLevel.xpPerQuestion;

  return (
    <section className="page-content games-page">
      <div className="games-hero">
        <div>
          <div className="eyebrow">
            <Gamepad2 size={14} /> TIERED CHALLENGE ARENA
          </div>
          <h1>Levels: Beginner to Fully Advanced</h1>
          <p>
            Choose your skill tier or advance through all 4 levels. Earn higher XP rewards as you conquer advanced frontend engineering challenges!
          </p>
        </div>
        <div className="game-hero-icon">
          <Trophy size={36} />
          <span>+{activeLevel.xpPerQuestion} XP</span>
        </div>
      </div>

      {/* Level Selection Tabs */}
      <div className="levels-grid">
        {challengeLevels.map((lvl) => {
          const IconComponent = LEVEL_ICONS[lvl.iconName] || Star;
          const isActive = selectedLevelId === lvl.id;
          return (
            <button
              key={lvl.id}
              className={`level-card ${isActive ? 'active' : ''} ${lvl.color}`}
              onClick={() => handleSelectLevel(lvl.id)}
            >
              <div className="level-card-top">
                <span className={`level-badge-icon ${lvl.color}`}>
                  <IconComponent size={16} />
                </span>
                <span className="level-tier-pill">LEVEL {lvl.levelNumber}</span>
                <span className="level-xp-rate">+{lvl.xpPerQuestion} XP / q</span>
              </div>
              <h3 className="level-title">{lvl.title}</h3>
              <p className="level-subtitle">{lvl.subtitle}</p>
              <div className="level-meta">
                <span>{questionsByLevel[lvl.id]?.length || 0} Questions</span>
                <span className="level-badge-name">{lvl.badge}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="game-progress-row">
        <div>
          <span className="level-indicator-tag">
            LEVEL {activeLevel.levelNumber}: {activeLevel.title.toUpperCase()}
          </span>
          <strong>
            {gameDone ? 'Level Complete!' : `Question ${gameIndex + 1} of ${activeQuestions.length}`}
          </strong>
        </div>

        <div className="game-progress-track">
          {activeQuestions.map((_, i) => (
            <span
              key={i}
              className={`${i < gameIndex || gameDone ? 'past' : ''} ${i === gameIndex && !gameDone ? 'now' : ''}`}
            />
          ))}
        </div>

        <div className="game-score">
          <Star size={16} />
          {earnedXp} XP earned
        </div>
      </div>

      {!gameDone && currentQ ? (
        <div className="quiz-card">
          <div className="quiz-meta">
            <div className="quiz-tags-group">
              <span className={`quiz-track ${currentQ.track.toLowerCase()}`}>
                {currentQ.track}
              </span>
              <span className="quiz-difficulty-pill">
                Level {activeLevel.levelNumber} · {activeLevel.title}
              </span>
            </div>
            <span>+{activeLevel.xpPerQuestion} XP for correct answer</span>
          </div>

          <h2>{currentQ.question}</h2>

          <div className="answer-list">
            {currentQ.options.map((opt, i) => {
              const isSelected = selectedAnswer === i;
              const isCorrect = currentQ.answer === i;
              let cls = 'answer-option';
              if (selectedAnswer !== null && isCorrect) cls += ' correct';
              else if (isSelected && !isCorrect) cls += ' incorrect';

              return (
                <button
                  key={opt}
                  className={cls}
                  onClick={() => chooseAnswer(i)}
                  disabled={selectedAnswer !== null}
                >
                  <span className="answer-letter">{String.fromCharCode(65 + i)}</span>
                  <span>{opt}</span>
                  {selectedAnswer !== null && isCorrect && <CheckCircle2 size={18} />}
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div className={`answer-feedback ${selectedAnswer === currentQ.answer ? 'right' : 'wrong'}`}>
              <div>
                {selectedAnswer === currentQ.answer ? (
                  <CheckCircle2 size={19} />
                ) : (
                  <Lightbulb size={19} />
                )}
              </div>
              <p>
                <strong>
                  {selectedAnswer === currentQ.answer ? 'Excellent! That is correct.' : 'Incorrect. Here is the explanation:'}
                </strong>
                <span>{currentQ.why}</span>
              </p>
            </div>
          )}

          <div className="quiz-footer">
            <span>
              {selectedAnswer === null
                ? 'Select one answer to test your understanding.'
                : 'Ready for the next question?'}
            </span>
            <button
              className="button-primary"
              disabled={selectedAnswer === null}
              onClick={nextQuestion}
            >
              {gameIndex === activeQuestions.length - 1 ? 'See Level Results' : 'Next Question'}{' '}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div className="game-results">
          <div className="results-trophy"><Trophy size={36} /></div>
          <div className="eyebrow">
            LEVEL {activeLevel.levelNumber} FINISHED: {activeLevel.title.toUpperCase()}
          </div>
          <h2>
            {gameScore === activeQuestions.length
              ? 'Flawless Victory! 🌟'
              : gameScore >= Math.ceil(activeQuestions.length * 0.7)
              ? 'Great Mastery! You passed with flying colors.'
              : 'Good effort! Review the concepts and try again.'}
          </h2>
          <p>
            You answered {gameScore} out of {activeQuestions.length} questions correctly.
          </p>

          <div className="results-stats">
            <div>
              <strong>{gameScore}/{activeQuestions.length}</strong>
              <span>Correct answers</span>
            </div>
            <div>
              <strong>+{earnedXp}</strong>
              <span>XP awarded to total</span>
            </div>
          </div>

          <div className="results-actions">
            {hasNextLevel && (
              <button className="button-primary" onClick={goToNextLevel}>
                Advance to Level {activeLevel.levelNumber + 1} <ChevronRight size={16} />
              </button>
            )}
            <button className="button-secondary" onClick={resetGame}>
              <RotateCcw size={16} /> Replay Level {activeLevel.levelNumber}
            </button>
            <button className="button-secondary" onClick={() => onGoToTrack('html')}>
              Back to Learning Tracks
            </button>
          </div>
        </div>
      )}

      <div className="game-bottom-note">
        <Crown size={18} />
        <div>
          <strong>Level Progression Journey:</strong>
          <p>
            From simple HTML skeleton tags to complex CSS stacking contexts and React performance memoization, each level tests progressively deeper real-world engineering skills.
          </p>
        </div>
      </div>

      <footer className="footer">Small steps build strong skills.</footer>
    </section>
  );
}
