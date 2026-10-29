import React, { useState, useMemo } from 'react';
import {
  Terminal, RotateCcw, Eye, CheckCircle2, Target, Lightbulb, ChevronRight, Zap
} from 'lucide-react';
import { tracks, starterCode, lessonContent } from '../data/tracks';
import { buildPreviewDocument } from '../utils/compiler';
import CodeEditor from '../components/CodeEditor';

export default function PlaygroundView({
  activeTrack,
  onSelectTrack,
  code,
  setCode
}) {
  const [showHint, setShowHint] = useState(false);

  const previewResult = useMemo(() => {
    return buildPreviewDocument(code, activeTrack);
  }, [code, activeTrack]);

  const currentContent = lessonContent[activeTrack];

  const getFilename = () => {
    switch (activeTrack) {
      case 'js': return 'click-counter.html';
      case 'css': return 'style-playground.html';
      case 'react': return 'App.jsx';
      default: return 'index.html';
    }
  };

  const getLanguage = () => {
    return activeTrack === 'react' ? 'JSX / React' : 'HTML / JS';
  };

  const getHintText = () => {
    switch (activeTrack) {
      case 'html':
        return 'Start by editing the text between the opening and closing tags, such as <h1> and </h1>.';
      case 'css':
        return 'Find the rule inside <style>. Try changing color, background-color, padding, or border-radius.';
      case 'js':
        return 'Look for the variable named score and the line where score is updated.';
      case 'react':
        return 'A component is a function returning JSX. Try modifying the text or adding another button with onClick.';
      default:
        return 'Experiment and watch the live preview!';
    }
  };

  const handleReset = () => {
    setCode(starterCode[activeTrack]);
  };

  return (
    <section className="page-content playground-page">
      <div className="page-title-row">
        <div>
          <div className="eyebrow">
            <Terminal size={14} /> EXPERIMENT ZONE
          </div>
          <h1>Make the code yours.</h1>
          <p>
            Edit the code. The preview updates as you type. Nothing can break permanently.
          </p>
        </div>
        <button className="button-secondary" onClick={handleReset}>
          <RotateCcw size={15} /> Reset code
        </button>
      </div>

      <div className="playground-toolbar">
        <div className="toolbar-label">
          <span className="live-dot"></span> LIVE PLAYGROUND
        </div>

        <div className="track-tabs">
          {tracks.map(t => (
            <button
              key={t.id}
              className={`track-tab ${activeTrack === t.id ? 'active' : ''}`}
              onClick={() => onSelectTrack(t.id)}
            >
              {t.title}
              {t.id === 'react' && <span className="tab-pill">LIVE</span>}
            </button>
          ))}
        </div>

        <span className="preview-status">
          <Eye size={14} /> Live preview
        </span>
      </div>

      <div className="editor-layout">
        <CodeEditor
          code={code}
          onChange={setCode}
          filename={getFilename()}
          language={getLanguage()}
          error={previewResult.error}
        />

        <div className="preview-panel">
          <div className="panel-top preview-panel-top">
            <div>
              <span className="browser-dots"><i></i><i></i><i></i></span>
              <strong>Browser preview</strong>
            </div>
            <span className="preview-live-pill">
              ● {activeTrack === 'react' ? 'REACT LIVE' : 'LIVE'}
            </span>
          </div>

          <iframe
            title="Live code preview"
            sandbox="allow-scripts"
            srcDoc={previewResult.html}
            className="live-frame"
          />

          <div className="preview-bottom">
            <span>
              <CheckCircle2 size={14} /> Refreshes automatically as you edit
            </span>
            <button onClick={handleReset}>
              <RotateCcw size={13} /> Reset
            </button>
          </div>
        </div>
      </div>

      {activeTrack === 'react' && (
        <div className="react-live-badge">
          <Zap size={16} />
          <span>
            <strong>Live React compilation active:</strong> JSX is compiled in-browser via Sucrase and mounted into the preview.
          </span>
        </div>
      )}

      <div className="playground-bottom-grid">
        <div className="mission-card">
          <span className="mission-icon"><Target size={19} /></span>
          <div>
            <span className="eyebrow">YOUR MISSION</span>
            <h3>
              {activeTrack === 'html' ? 'Introduce yourself' :
               activeTrack === 'css' ? 'Give it a new look' :
               activeTrack === 'js' ? 'Change the counter' : 'Explore React components'}
            </h3>
            <p>{currentContent.challenge}</p>
          </div>
        </div>

        <div className="hint-card">
          <button onClick={() => setShowHint(v => !v)}>
            <Lightbulb size={17} />
            {showHint ? 'Hide hint' : 'Need a hint?'}
            <ChevronRight size={15} />
          </button>
          {showHint && <p>{getHintText()}</p>}
        </div>
      </div>

      <footer className="footer">
        Experiment freely. Reset whenever you want.
      </footer>
    </section>
  );
}
