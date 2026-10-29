import React from 'react';
import {
  BookOpen, ChevronRight, CheckCircle2, Lightbulb, Terminal, ArrowRight, Target, Tag
} from 'lucide-react';

export default function LearnView({
  currentTrack,
  activeTrack,
  activeLesson,
  setActiveLesson,
  currentContent,
  progress,
  onMarkComplete,
  onOpenInPlayground
}) {
  const lessonKey = `${activeTrack}-${activeLesson}`;
  const lessonDone = progress.completed.includes(lessonKey);
  const trackCompletedCount = progress.completed.filter(c => c.startsWith(`${activeTrack}-`)).length;
  const totalSteps = currentContent.steps?.length || 1;
  const progressPercent = Math.round((trackCompletedCount / totalSteps) * 100);

  const currentStep = currentContent.steps[activeLesson] || {};
  const stepTitle = currentStep.title || currentStep[0] || 'Lesson';
  const stepDescription = currentStep.description || currentStep[1] || '';
  const stepConcept = currentStep.concept || currentContent.concept;
  const stepChallenge = currentStep.challenge || currentContent.challenge;
  const stepTags = currentStep.tags || [];
  const stepCode = currentStep.code || currentContent.code;

  return (
    <section className="page-content lesson-page">
      <div className="lesson-header">
        <div>
          <div className="eyebrow">
            <BookOpen size={14} /> LEARNING PATH / {currentTrack.title.toUpperCase()}
          </div>
          <h1>{currentContent.title}</h1>
          <p>{currentContent.intro}</p>
        </div>
        <span className={`track-icon large ${currentTrack.color}`}>
          <currentTrack.icon size={27} />
        </span>
      </div>

      <div className="lesson-layout">
        <aside className="lesson-list-card">
          <div className="lesson-list-title">
            <span>In this path</span>
            <span>{totalSteps} lessons</span>
          </div>

          {currentContent.steps.map((step, i) => {
            const isDone = progress.completed.includes(`${activeTrack}-${i}`);
            const isCurrent = activeLesson === i;
            const title = step.title || step[0] || `Lesson ${i + 1}`;
            return (
              <button
                key={title}
                onClick={() => setActiveLesson(i)}
                className={`lesson-list-item ${isCurrent ? 'current' : ''}`}
              >
                <span className={`lesson-step-icon ${isDone ? 'done' : ''}`}>
                  {isDone ? <CheckCircle2 size={17} /> : <span>{String(i + 1).padStart(2, '0')}</span>}
                </span>
                <span className="lesson-list-text">
                  <strong>{title}</strong>
                  <small>{i === 0 ? 'Start here' : `${3 + i} min read`}</small>
                </span>
                {isCurrent && <ChevronRight size={16} />}
              </button>
            );
          })}

          <div className="path-progress">
            <div className="path-progress-label">
              <span>Path progress</span>
              <strong>{progressPercent}%</strong>
            </div>
            <div className="progress-track">
              <span style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </aside>

        <div className="lesson-main">
          <div className="concept-card">
            <div className="concept-top">
              <span className="concept-number">
                LESSON {String(activeLesson + 1).padStart(2, '0')} OF {String(totalSteps).padStart(2, '0')}
              </span>
              <span className="time-label">◷ {4 + activeLesson} min</span>
            </div>

            <h2>{stepTitle}</h2>
            <p>{stepDescription}</p>

            {stepTags.length > 0 && (
              <div className="lesson-tags-row">
                <Tag size={13} />
                <span className="tags-label">Key elements / tokens:</span>
                <div className="tags-pills">
                  {stepTags.map(tag => (
                    <code key={tag} className="element-pill">{tag}</code>
                  ))}
                </div>
              </div>
            )}

            <div className="concept-callout">
              <Lightbulb size={18} />
              <div>
                <strong>The big idea</strong>
                <span>{stepConcept}</span>
              </div>
            </div>

            <div className="lesson-example-heading">
              <h3>Try it in the playground</h3>
              <span>INTERACTIVE DEMO</span>
            </div>
            <p className="example-intro">
              This interactive starter covers <strong>{stepTitle}</strong>. Open it in the live playground to edit and see changes in real time.
            </p>

            <button
              className="button-primary"
              onClick={() => onOpenInPlayground(stepCode)}
            >
              <Terminal size={16} /> Open lesson in playground <ArrowRight size={16} />
            </button>

            <div className="lesson-challenge">
              <div className="challenge-small-icon"><Target size={18} /></div>
              <div>
                <strong>Your mini mission</strong>
                <p>{stepChallenge}</p>
              </div>
            </div>

            <button
              className={`complete-button ${lessonDone ? 'completed' : ''}`}
              onClick={onMarkComplete}
            >
              {lessonDone ? (
                <>
                  <CheckCircle2 size={17} /> Lesson completed · +20 XP earned
                </>
              ) : (
                <>
                  Mark lesson complete <CheckCircle2 size={17} />
                </>
              )}
            </button>

            <div className="lesson-next-row">
              {activeLesson > 0 && (
                <button
                  className="button-secondary"
                  onClick={() => setActiveLesson(i => i - 1)}
                >
                  Previous lesson
                </button>
              )}
              {activeLesson < totalSteps - 1 && (
                <button
                  className="button-secondary"
                  onClick={() => setActiveLesson(i => i + 1)}
                >
                  Next lesson <ArrowRight size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
