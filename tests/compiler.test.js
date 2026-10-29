import { describe, it, expect } from 'vitest';
import { buildPreviewDocument } from '../src/utils/compiler';

describe('Preview Compiler Utility', () => {
  it('generates standard HTML document for html, css, js', () => {
    const rawCode = '<h1>Hello World</h1>';
    const result = buildPreviewDocument(rawCode, 'html');
    expect(result.error).toBeNull();
    expect(result.html).toContain('<h1>Hello World</h1>');
    expect(result.html).toContain('<!doctype html>');
  });

  it('compiles React JSX code without syntax errors', () => {
    const jsxCode = `function App() { return <h1>Rendered React</h1>; }`;
    const result = buildPreviewDocument(jsxCode, 'react');
    expect(result.error).toBeNull();
    expect(result.html).toContain('React.createElement');
    expect(result.html).toContain('Rendered React');
    expect(result.html).toContain('id="root"');
  });

  it('catches and reports JSX syntax errors gracefully', () => {
    const brokenJsx = `function App() { return <h1>Unclosed tag; }`;
    const result = buildPreviewDocument(brokenJsx, 'react');
    expect(result.error).not.toBeNull();
    expect(result.html).toContain('JSX Compilation Error');
  });
});
