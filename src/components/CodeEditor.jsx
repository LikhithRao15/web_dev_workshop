import React, { useRef } from 'react';
import { Circle, AlertCircle } from 'lucide-react';

export default function CodeEditor({
  code,
  onChange,
  filename,
  language,
  error
}) {
  const textareaRef = useRef(null);
  const lines = code.split('\n');

  // Handle Tab key for clean indentation (2 spaces)
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;

      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      onChange(newValue);

      // Restore cursor position after state update
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="editor-panel">
      <div className="panel-top">
        <div>
          <span className="file-dot"></span>
          <strong>{filename}</strong>
        </div>
        <span className="panel-language">{language}</span>
      </div>

      <div className="editor-body">
        <div className="line-numbers" aria-hidden="true">
          {lines.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <textarea
          ref={textareaRef}
          aria-label="Editable code"
          spellCheck="false"
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {error && (
        <div className="editor-error-banner">
          <AlertCircle size={15} />
          <span>{error}</span>
        </div>
      )}

      <div className="editor-footer">
        <span>
          <Circle size={7} fill="currentColor" /> Editable example
        </span>
        <span>{lines.length} lines</span>
      </div>
    </div>
  );
}
