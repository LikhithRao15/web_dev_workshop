import { Code2, Palette, Zap, Blocks } from 'lucide-react';

export const tracks = [
  {
    id: 'html',
    title: 'HTML',
    subtitle: 'Build the structure',
    description: 'Master semantic tags, forms, tables, media, and document architecture.',
    icon: Code2,
    color: 'blue',
    lessons: 8,
    level: 'Beginner',
    time: '45 min'
  },
  {
    id: 'css',
    title: 'CSS',
    subtitle: 'Make it beautiful',
    description: 'Master the box model, border-box, Flexbox, Grid, positioning, and animations.',
    icon: Palette,
    color: 'purple',
    lessons: 8,
    level: 'Beginner',
    time: '55 min'
  },
  {
    id: 'js',
    title: 'JavaScript',
    subtitle: 'Make it interactive',
    description: 'Master modern ES6+, DOM manipulation, events, array methods, and async/await.',
    icon: Zap,
    color: 'orange',
    lessons: 8,
    level: 'Intermediate',
    time: '60 min'
  },
  {
    id: 'react',
    title: 'React',
    subtitle: 'Build reusable UI',
    description: 'Master components, JSX, props, useState, useEffect, lists, and live rendering.',
    icon: Blocks,
    color: 'green',
    lessons: 8,
    level: 'Intermediate',
    time: '60 min'
  }
];

export const starterCode = {
  html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Semantic Page</title>
</head>
<body>
  <header style="border-bottom: 2px solid #4169d8; padding-bottom: 12px; margin-bottom: 16px;">
    <h1>Welcome to My Semantic Page</h1>
    <nav>
      <a href="#about" style="margin-right: 12px; color: #4169d8;">About</a>
      <a href="#features" style="margin-right: 12px; color: #4169d8;">Features</a>
      <a href="#contact" style="color: #4169d8;">Contact</a>
    </nav>
  </header>

  <main>
    <article id="about" style="margin-bottom: 20px;">
      <h2>Structured Content</h2>
      <p>Semantic tags like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;article&gt;</code> give your webpage clear structural meaning for browsers and screen readers.</p>
    </article>

    <section id="features">
      <h3>Interactive Form Element</h3>
      <form style="display: flex; flex-direction: column; gap: 8px; max-width: 300px;">
        <label for="username">Your Name:</label>
        <input type="text" id="username" placeholder="Ada Lovelace" style="padding: 8px; border: 1px solid #ccc; border-radius: 6px;">
        <button type="button" style="background: #4169d8; color: white; padding: 9px; border: 0; border-radius: 6px; cursor: pointer;">
          Submit
        </button>
      </form>
    </section>
  </main>
</body>
</html>`,

  css: `<style>
  /* Border Box Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    padding: 24px;
    background: #f8faff;
  }

  h2 {
    margin-bottom: 16px;
    color: #202b3c;
  }

  /* Modern Flexbox Container */
  .flex-container {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 24px;
  }

  .flex-card {
    flex: 1 1 200px;
    background: white;
    padding: 20px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .flex-card:hover {
    transform: translateY(-4px);
    border-color: #4169d8;
  }

  .badge {
    display: inline-block;
    padding: 4px 8px;
    background: #edf3ff;
    color: #4169d8;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 8px;
  }
</style>

<h2>Flexbox & Border-Box Showcase</h2>

<div class="flex-container">
  <div class="flex-card">
    <span class="badge">BOX 1</span>
    <h3>Border-Box</h3>
    <p>Padding is calculated INSIDE the width. No surprise scrollbars!</p>
  </div>

  <div class="flex-card">
    <span class="badge">BOX 2</span>
    <h3>Flex Growth</h3>
    <p>Cards automatically adapt to viewport width using flex-wrap and gap.</p>
  </div>

  <div class="flex-card">
    <span class="badge">BOX 3</span>
    <h3>Alignment</h3>
    <p>Items line up cleanly with justify-content and align-items.</p>
  </div>
</div>`,

  js: `<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h2>Interactive JavaScript Dashboard</h2>
  <div style="display: flex; gap: 10px; margin-bottom: 16px;">
    <button id="add-btn" style="background: #4169d8; color: white; padding: 9px 15px; border: 0; border-radius: 8px; cursor: pointer;">Add Item</button>
    <button id="filter-btn" style="background: #edf3ff; color: #4169d8; border: 1px solid #c5d7ff; padding: 9px 15px; border-radius: 8px; cursor: pointer;">Filter High Value</button>
  </div>

  <ul id="item-list" style="list-style: none; padding: 0; display: grid; gap: 8px; max-width: 360px;"></ul>

  <div id="summary" style="margin-top: 16px; font-weight: bold; color: #334155;"></div>
</div>

<script>
  const state = {
    items: [
      { id: 1, name: 'Web Starter Pack', price: 15 },
      { id: 2, name: 'CSS Flexbox Guide', price: 30 },
      { id: 3, name: 'JavaScript Deep Dive', price: 45 }
    ]
  };

  function render(itemsToDisplay) {
    const list = document.querySelector('#item-list');
    list.innerHTML = itemsToDisplay.map(item => \`
      <li style="display: flex; justify-content: space-between; padding: 10px 14px; background: white; border: 1px solid #e2e8f0; border-radius: 8px;">
        <span>\${item.name}</span>
        <strong style="color: #4169d8;">$\${item.price}</strong>
      </li>
    \`).join('');

    const total = itemsToDisplay.reduce((sum, item) => sum + item.price, 0);
    document.querySelector('#summary').textContent = \`Total Value: $\${total} (\${itemsToDisplay.length} items)\`;
  }

  // Initial render
  render(state.items);

  // Event Listeners
  document.querySelector('#add-btn').addEventListener('click', () => {
    const nextId = state.items.length + 1;
    const randomPrice = Math.floor(Math.random() * 40) + 10;
    state.items.push({ id: nextId, name: \`Resource Module #\${nextId}\`, price: randomPrice });
    render(state.items);
  });

  let isFiltered = false;
  document.querySelector('#filter-btn').addEventListener('click', () => {
    isFiltered = !isFiltered;
    const items = isFiltered ? state.items.filter(i => i.price >= 25) : state.items;
    document.querySelector('#filter-btn').textContent = isFiltered ? 'Show All' : 'Filter High Value ($25+)';
    render(items);
  });
</script>`,

  react: `function App() {
  const [tasks, setTasks] = React.useState([
    { id: 1, text: 'Learn HTML semantics', done: true },
    { id: 2, text: 'Master CSS Flexbox & Grid', done: true },
    { id: 3, text: 'Explore React Hooks & State', done: false }
  ]);
  const [inputVal, setInputVal] = React.useState('');

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputVal.trim(), done: false }]);
    setInputVal('');
  };

  const completedCount = tasks.filter(t => t.done).length;

  return (
    <div style={{ maxWidth: 420, margin: '0 auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: 16 }}>
        <h2 style={{ color: '#4169d8', margin: '0 0 6px' }}>React Task Explorer</h2>
        <p style={{ color: '#64748b', fontSize: 13, margin: 0 }}>
          {completedCount} of {tasks.length} tasks completed
        </p>
      </header>

      <form onSubmit={addTask} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Add a new skill or goal..."
          style={{ flex: 1, padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: 8, outline: 'none' }}
        />
        <button
          type="submit"
          style={{ background: '#4169d8', color: 'white', border: 0, padding: '0 16px', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}
        >
          Add
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
        {tasks.map(task => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              padding: '12px 14px',
              borderRadius: 8,
              border: '1px solid #e2e8f0',
              background: task.done ? '#f0fdf4' : '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: task.done ? 'line-through' : 'none',
              color: task.done ? '#16a34a' : '#1e293b'
            }}
          >
            <span>{task.done ? '✓' : '○'}</span>
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}`
};

export const lessonContent = {
  html: {
    title: 'HTML: Modern Structure & Elements',
    intro: 'HTML gives content meaning, accessible hierarchy, and document architecture for modern web applications.',
    concept: 'Choose semantic HTML tags that describe the meaning of content, not just its appearance.',
    challenge: 'Build a semantic page containing a header with navigation, an article with a table, and an interactive form.',
    steps: [
      {
        title: 'Document Skeleton & Head Metadata',
        description: 'Every valid webpage begins with <!DOCTYPE html>, an <html> root, and a <head> holding metadata, charsets, and page title.',
        concept: 'The <head> stores machine-readable metadata (like UTF-8 encoding and responsive viewport), while <body> holds visible content.',
        tags: ['<!DOCTYPE html>', '<html>', '<head>', '<meta>', '<title>', '<body>'],
        challenge: 'Add a <meta name="description" content="..."> inside the <head> of the document.',
        code: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="My first responsive HTML page">
  <title>Document Architecture</title>
</head>
<body>
  <h1>Page Successfully Loaded</h1>
  <p>The browser parsed the metadata and rendered this content.</p>
</body>
</html>`
      },
      {
        title: 'Headings, Text Hierarchy & Emphasis',
        description: 'Organize text using headings <h1> through <h6>, paragraphs <p>, semantic emphasis <strong> and <em>, and quotations <blockquote>.',
        concept: 'Use exactly one <h1> per page for the main topic, and avoid skipping heading levels (e.g. going from <h1> to <h3>).',
        tags: ['<h1>-<h6>', '<p>', '<strong>', '<em>', '<mark>', '<blockquote>'],
        challenge: 'Create a section with an <h2>, a <p> with a <mark> highlighted keyword, and a <blockquote>.',
        code: `<main>
  <h1>The Journey of Code</h1>
  <h2>Chapter 1: The Foundations</h2>
  <p>Learning web development requires <strong>curiosity</strong> and <em>consistency</em>.</p>
  <p>Key takeaway: <mark>Always write semantic HTML first</mark> before styling with CSS.</p>
  <blockquote cite="https://en.wikipedia.org/wiki/Tim_Berners-Lee">
    "The power of the Web is in its universality."
  </blockquote>
</main>`
      },
      {
        title: 'Hyperlinks & Navigation Links',
        description: 'The anchor tag <a> turns text or images into clickable links. Use href, target="_blank", and rel="noopener noreferrer" for security.',
        concept: 'Links connect pages and fragment IDs on the same page. Always use meaningful link text (avoid "click here").',
        tags: ['<a>', 'href', 'target="_blank"', 'rel="noopener"', 'id="#"'],
        challenge: 'Create an internal link that jumps smoothly to a footer section using an id.',
        code: `<nav style="padding: 10px; background: #eaf2ff; border-radius: 8px;">
  <a href="#summary" style="color: #4169d8; margin-right: 14px;">Jump to Summary</a>
  <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" style="color: #4169d8;">MDN Web Docs ↗</a>
</nav>

<div style="height: 300px; padding: 20px 0;">
  <p>Scroll down or click the navigation link above...</p>
</div>

<footer id="summary" style="padding: 16px; background: #f1f5f9; border-radius: 8px;">
  <h3>Summary Destination</h3>
  <p>You reached the internal anchor target.</p>
</footer>`
      },
      {
        title: 'Media Elements: Images, Audio & Video',
        description: 'Embed rich media with <img> (with required alt text), <picture>, <video controls>, and <audio controls>.',
        concept: 'Always specify an alt attribute on <img> tags for accessibility and SEO. Use <figure> and <figcaption> for captions.',
        tags: ['<img>', '<figure>', '<figcaption>', '<video>', '<audio>', '<source>'],
        challenge: 'Add a <figcaption> describing the image inside the <figure>.',
        code: `<figure style="margin: 0; max-width: 420px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <img
    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"
    alt="Clean modern computer code on a monitor"
    style="width: 100%; display: block;"
  >
  <figcaption style="padding: 12px; font-size: 13px; color: #64748b; background: #f8fafc;">
    <strong>Figure 1.1:</strong> Writing clean and expressive markup.
  </figcaption>
</figure>`
      },
      {
        title: 'Lists & Tables for Structured Data',
        description: 'Structure list items using <ul>, <ol>, and <li>, and tabular spreadsheets using <table>, <thead>, <tbody>, <tr>, <th>, and <td>.',
        concept: 'Use <ul> for unordered items, <ol> for sequential numbered steps, and <table> strictly for data grids (never for page layout).',
        tags: ['<ul>', '<ol>', '<li>', '<table>', '<thead>', '<tbody>', '<tr>', '<th>', '<td>'],
        challenge: 'Add a third row to the data table showing a new track with its duration.',
        code: `<table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
  <thead>
    <tr style="background: #4169d8; color: white;">
      <th style="padding: 10px; text-align: left;">Track</th>
      <th style="padding: 10px; text-align: left;">Core Focus</th>
      <th style="padding: 10px; text-align: right;">Lessons</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 10px;">HTML</td>
      <td style="padding: 10px;">Structure & Semantics</td>
      <td style="padding: 10px; text-align: right;">8</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8faff;">
      <td style="padding: 10px;">CSS</td>
      <td style="padding: 10px;">Styling, Flexbox & Grid</td>
      <td style="padding: 10px; text-align: right;">8</td>
    </tr>
  </tbody>
</table>`
      },
      {
        title: 'Forms, Inputs & User Controls',
        description: 'Collect user input with <form>, <label>, <input type="...">, <textarea>, <select>, <option>, and <button type="submit">.',
        concept: 'Always associate each <label for="id"> with its corresponding input <input id="id"> for accessible screen reader support.',
        tags: ['<form>', '<label>', '<input>', '<select>', '<option>', '<textarea>', '<button>'],
        challenge: 'Add a dropdown <select> inside the form that allows users to pick their skill level.',
        code: `<form style="max-width: 360px; display: grid; gap: 12px; font-family: sans-serif;">
  <div>
    <label for="name-field" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px;">Full Name:</label>
    <input id="name-field" type="text" placeholder="Ada Lovelace" required style="width: 100%; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
  </div>

  <div>
    <label for="role-select" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px;">Experience Track:</label>
    <select id="role-select" style="width: 100%; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 6px; background: white;">
      <option value="frontend">Frontend Explorer</option>
      <option value="fullstack">Fullstack Builder</option>
      <option value="designer">UI/UX Enthusiast</option>
    </select>
  </div>

  <button type="submit" style="background: #4169d8; color: white; padding: 10px; border: 0; border-radius: 6px; font-weight: bold; cursor: pointer;">
    Register For Workshop
  </button>
</form>`
      },
      {
        title: 'Modern Semantic Layout: Header, Nav, Main, Footer',
        description: 'Replace generic <div> containers with semantic landmarks: <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>.',
        concept: 'Semantic landmarks improve screen reader navigation, search indexing, and make team codebases self-documenting.',
        tags: ['<header>', '<nav>', '<main>', '<section>', '<article>', '<aside>', '<footer>'],
        challenge: 'Add an <aside> element containing related quick links beside the main article.',
        code: `<div style="max-width: 500px; border: 1px solid #cbd5e1; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
  <header style="background: #1e293b; color: white; padding: 16px;">
    <h3 style="margin: 0;">CodeBloom Academy</h3>
    <nav style="font-size: 13px; margin-top: 6px; opacity: 0.85;">Home · Tracks · Community</nav>
  </header>

  <main style="padding: 16px;">
    <article>
      <h4>Why Semantics Matter</h4>
      <p style="font-size: 14px; line-height: 1.6; color: #475569;">Semantic elements tell web scrapers, browsers, and assistive tech exactly what purpose each section serves.</p>
    </article>
  </main>

  <footer style="background: #f1f5f9; padding: 12px 16px; font-size: 12px; color: #64748b; text-align: center;">
    © 2026 CodeBloom · Built with semantic HTML
  </footer>
</div>`
      },
      {
        title: 'Interactive HTML5: Details, Summary & Dialog',
        description: 'Modern HTML includes built-in interactive widgets without needing JavaScript: <details>, <summary>, <dialog>, and <meter>.',
        concept: 'The <details> and <summary> elements create native expand/collapse accordions with built-in keyboard accessibility.',
        tags: ['<details>', '<summary>', '<dialog>', '<meter>', '<progress>'],
        challenge: 'Add an open attribute to the <details> element to have it expanded by default.',
        code: `<div style="font-family: sans-serif; max-width: 400px;">
  <details style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
    <summary style="font-weight: bold; cursor: pointer; color: #4169d8;">What is semantic HTML?</summary>
    <p style="margin: 8px 0 0; font-size: 13px; color: #475569;">Semantic HTML uses tags that convey the meaning of the content, like &lt;article&gt;, &lt;nav&gt;, and &lt;header&gt;.</p>
  </details>

  <details style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
    <summary style="font-weight: bold; cursor: pointer; color: #4169d8;">Do I need JavaScript for accordions?</summary>
    <p style="margin: 8px 0 0; font-size: 13px; color: #475569;">No! The browser toggles &lt;details&gt; natively with zero JavaScript required.</p>
  </details>
</div>`
      }
    ]
  },

  css: {
    title: 'CSS: Modern Layout, Flexbox & Grid',
    intro: 'Master modern styling, box-sizing, the box model, Flexbox, Grid, positioning, and responsive design systems.',
    concept: 'Modern CSS is resilient, fluid, and component-based. Use flexbox for 1D rows/columns and grid for 2D layouts.',
    challenge: 'Build a responsive card grid using box-sizing: border-box, display: flex, and gap.',
    steps: [
      {
        title: 'The CSS Box Model & box-sizing: border-box',
        description: 'Understand content, padding, border, and margin. Use box-sizing: border-box so padding does not expand element widths.',
        concept: 'Under content-box, width: 100% + padding: 20px exceeds the container. Under border-box, padding stays inside the specified width.',
        tags: ['box-sizing: border-box', 'margin', 'padding', 'border', 'outline'],
        challenge: 'Compare the two boxes below: change the padding on both and see how only content-box overflows.',
        code: `<style>
  .box-standard {
    box-sizing: content-box;
    width: 200px;
    padding: 30px;
    border: 5px solid #ef4444;
    background: #fee2e2;
    margin-bottom: 16px;
  }

  .box-border-box {
    box-sizing: border-box;
    width: 200px;
    padding: 30px;
    border: 5px solid #22c55e;
    background: #dcfce7;
  }
</style>

<div class="box-standard">
  <strong>content-box:</strong><br>
  Total width = 200 + 60 + 10 = 270px!
</div>

<div class="box-border-box">
  <strong>border-box:</strong><br>
  Total width = exactly 200px.
</div>`
      },
      {
        title: 'Flexbox Fundamentals: Direction & Alignment',
        description: 'Flexbox provides one-dimensional layout control. Master display: flex, flex-direction, justify-content, align-items, and gap.',
        concept: 'justify-content aligns items along the main axis; align-items aligns items along the cross axis.',
        tags: ['display: flex', 'flex-direction', 'justify-content', 'align-items', 'gap'],
        challenge: 'Change justify-content to center and align-items to flex-end.',
        code: `<style>
  .flex-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 14px 20px;
    background: #1e293b;
    border-radius: 12px;
    color: white;
  }
  .nav-group {
    display: flex;
    gap: 16px;
    align-items: center;
  }
</style>

<div class="flex-bar">
  <strong style="color: #60a5fa;">CodeBloom</strong>
  <div class="nav-group">
    <span>Docs</span>
    <span>Tracks</span>
    <button style="background: #3b82f6; color: white; border: 0; padding: 6px 12px; border-radius: 6px; cursor: pointer;">
      Launch
    </button>
  </div>
</div>`
      },
      {
        title: 'Flexbox Power: flex-grow, shrink & wrap',
        description: 'Control how items stretch and wrap when space shrinks using flex: 1, flex-wrap: wrap, and flex-basis.',
        concept: 'flex: 1 is shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0%. It lets elements expand to fill remaining room.',
        tags: ['flex-wrap: wrap', 'flex: 1', 'flex-grow', 'flex-shrink', 'flex-basis'],
        challenge: 'Add flex-wrap: wrap to the container and test resizing the window preview.',
        code: `<style>
  .card-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .card-item {
    flex: 1 1 140px; /* grow, shrink, min-basis */
    background: white;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 16px;
    text-align: center;
  }
</style>

<div class="card-row">
  <div class="card-item"><strong>Alpha</strong><p style="margin: 4px 0 0; color: #64748b;">Flex 1</p></div>
  <div class="card-item"><strong>Beta</strong><p style="margin: 4px 0 0; color: #64748b;">Flex 1</p></div>
  <div class="card-item"><strong>Gamma</strong><p style="margin: 4px 0 0; color: #64748b;">Flex 1</p></div>
</div>`
      },
      {
        title: 'CSS Grid: 2D Layouts & repeat(auto-fit)',
        description: 'Grid excels at rows and columns simultaneously. Use grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) for effortless responsive cards.',
        concept: 'auto-fit automatically creates as many columns as will fit without writing a single media query.',
        tags: ['display: grid', 'grid-template-columns', 'gap', 'repeat()', 'minmax()', 'fr'],
        challenge: 'Change minmax(130px, 1fr) to minmax(180px, 1fr) and observe the layout response.',
        code: `<style>
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 12px;
  }
  .grid-tile {
    background: #edf3ff;
    border: 1px solid #bfdbfe;
    border-radius: 10px;
    padding: 16px;
    color: #1e3a8a;
  }
</style>

<div class="grid-layout">
  <div class="grid-tile"><h3>Tile 1</h3><span>Adaptive Column</span></div>
  <div class="grid-tile"><h3>Tile 2</h3><span>Adaptive Column</span></div>
  <div class="grid-tile"><h3>Tile 3</h3><span>Adaptive Column</span></div>
</div>`
      },
      {
        title: 'CSS Positioning: Relative, Absolute, Sticky & Fixed',
        description: 'Control document flow with position: relative, absolute, fixed, and sticky, paired with z-index for layering.',
        concept: 'An element with position: absolute positions itself relative to its nearest positioned ancestor (usually position: relative).',
        tags: ['position: relative', 'position: absolute', 'position: sticky', 'top/left', 'z-index'],
        challenge: 'Change the badge position to bottom: 10px and right: 10px.',
        code: `<style>
  .card-container {
    position: relative;
    max-width: 320px;
    padding: 24px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  }
  .floating-badge {
    position: absolute;
    top: -10px;
    right: 14px;
    background: #10b981;
    color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 20px;
  }
</style>

<div class="card-container">
  <span class="floating-badge">FEATURED</span>
  <h3 style="margin: 0 0 8px;">Positioning Masterclass</h3>
  <p style="margin: 0; color: #64748b; font-size: 13px;">The badge is positioned absolute relative to the card container.</p>
</div>`
      },
      {
        title: 'CSS Custom Properties (Variables) & Theming',
        description: 'Store reusable design tokens using CSS variables declared in :root and consume them via var(--token).',
        concept: 'Variables cascade. Redefining a variable inside a [data-theme="dark"] selector instantly changes your whole theme.',
        tags: [':root', '--variable-name', 'var()', 'cascading', 'theming'],
        challenge: 'Add a new CSS variable --accent-color: #ec4899; and use it on the button.',
        code: `<style>
  :root {
    --brand-primary: #4169d8;
    --brand-bg: #edf3ff;
    --text-main: #1e293b;
    --border-radius: 10px;
  }

  .themed-card {
    background: var(--brand-bg);
    border: 2px solid var(--brand-primary);
    border-radius: var(--border-radius);
    padding: 20px;
    color: var(--text-main);
    font-family: sans-serif;
  }

  .themed-btn {
    background: var(--brand-primary);
    color: white;
    border: 0;
    border-radius: var(--border-radius);
    padding: 8px 16px;
    font-weight: bold;
    cursor: pointer;
  }
</style>

<div class="themed-card">
  <h3 style="margin-top: 0;">Built with CSS Variables</h3>
  <p>Update <code>--brand-primary</code> in the &lt;style&gt; block to change colors everywhere.</p>
  <button class="themed-btn">Click to Action</button>
</div>`
      },
      {
        title: 'Responsive Design: Media Queries & Fluid Units',
        description: 'Create mobile-friendly layouts using @media queries, clamp(), rem units, and fluid viewports.',
        concept: 'Mobile-first design styles small screens first, then adds @media (min-width: 768px) to enhance larger screens.',
        tags: ['@media (max-width: ...)', 'clamp()', 'rem', 'vw / vh', 'calc()'],
        challenge: 'Add a clamp(18px, 4vw, 32px) font-size to the heading.',
        code: `<style>
  .responsive-banner {
    padding: 24px;
    background: linear-gradient(135deg, #4169d8, #7c3aed);
    color: white;
    border-radius: 14px;
    text-align: center;
  }
  .fluid-title {
    font-size: clamp(20px, 5vw, 36px);
    margin: 0 0 10px;
  }
  @media (max-width: 500px) {
    .responsive-banner {
      background: #4169d8;
      padding: 16px;
    }
  }
</style>

<div class="responsive-banner">
  <h2 class="fluid-title">Fluid Responsive Typography</h2>
  <p style="margin: 0; opacity: 0.9;">Scales dynamically between 20px and 36px based on viewport width!</p>
</div>`
      },
      {
        title: 'Transitions, Transforms & Micro-Animations',
        description: 'Bring interfaces to life with transition, transform: translateY() scale(), and keyframe animations.',
        concept: 'Always animate transform and opacity for smooth 60fps GPU-accelerated rendering rather than animating width or top.',
        tags: ['transition', 'transform', 'translateY', 'scale', '@keyframes', ':hover'],
        challenge: 'Add transform: rotate(3deg) to the button hover state.',
        code: `<style>
  .interactive-button {
    background: #4169d8;
    color: white;
    border: 0;
    padding: 12px 24px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(65, 105, 216, 0.3);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
  }

  .interactive-button:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 8px 24px rgba(65, 105, 216, 0.45);
  }

  .interactive-button:active {
    transform: translateY(0) scale(0.98);
  }
</style>

<div style="padding: 24px; text-align: center;">
  <button class="interactive-button">
    Hover & Click Me! 🚀
  </button>
</div>`
      }
    ]
  },

  js: {
    title: 'JavaScript: Modern ES6+, DOM & Asynchronous Programming',
    intro: 'Transform static markup into dynamic web apps with ES6+ syntax, DOM manipulation, event loops, array methods, and async/await.',
    concept: 'JavaScript is single-threaded and event-driven. Manipulate the DOM in response to events and handle data with array methods.',
    challenge: 'Build a dynamic filterable list with add, delete, and calculation functions.',
    steps: [
      {
        title: 'Modern Variables, Data Types & Template Literals',
        description: 'Master const, let, block scope, primitive types, and backtick template literals with string interpolation `${expr}`.',
        concept: 'Prefer const by default. Only use let when reassignment is explicitly needed. Never use var in modern code.',
        tags: ['const', 'let', 'template literals (`${}`)', 'boolean', 'number', 'string'],
        challenge: 'Create a template literal message greeting a user and showing their calculated score.',
        code: `<div id="output" style="font-family: sans-serif; padding: 16px; background: #edf3ff; border-radius: 8px;"></div>

<script>
  const username = 'Dev Explorer';
  const streakDays = 7;
  const xpPerDay = 20;

  // Template literal with embedded expression calculation
  const message = \`
    <h3 style="color: #4169d8; margin: 0 0 6px;">Welcome back, \${username}!</h3>
    <p style="margin: 0; color: #334155;">Streak: <strong>\${streakDays} days</strong> | Total XP: <strong>\${streakDays * xpPerDay} XP</strong></p>
  \`;

  document.querySelector('#output').innerHTML = message;
</script>`
      },
      {
        title: 'Arrow Functions & Functional Scope',
        description: 'Arrow functions () => {} provide concise syntax and lexical this binding. Master parameters, default arguments, and implicit returns.',
        concept: 'If an arrow function has a single expression, you can omit the curly braces and return keyword: const square = x => x * x;',
        tags: ['() => {}', 'implicit return', 'default parameters', 'higher-order functions'],
        challenge: 'Write an arrow function that converts Celsius to Fahrenheit (c * 9/5 + 32).',
        code: `<div id="results" style="font-family: sans-serif; line-height: 1.8;"></div>

<script>
  // Arrow functions
  const add = (a, b = 0) => a + b;
  const multiply = (a, b) => a * b;
  const formatCurrency = amount => \`$\${amount.toFixed(2)}\`;

  const total = multiply(add(10, 5), 2);

  document.querySelector('#results').innerHTML = \`
    <p>10 + 5 = <strong>\${add(10, 5)}</strong></p>
    <p>(10 + 5) * 2 = <strong>\${total}</strong></p>
    <p>Formatted: <strong>\${formatCurrency(total)}</strong></p>
  \`;
</script>`
      },
      {
        title: 'DOM Selection & Manipulation',
        description: 'Select elements with querySelector and querySelectorAll, and manipulate textContent, innerHTML, classList, and inline styles.',
        concept: 'Use textContent when setting plain text to avoid XSS vulnerabilities, and classList.toggle() for CSS-driven state changes.',
        tags: ['document.querySelector', 'textContent', 'classList.add/remove', 'setAttribute'],
        challenge: 'Toggle the background color between light blue and light green on each button click.',
        code: `<div id="card" style="padding: 20px; border: 2px solid #cbd5e1; border-radius: 10px; font-family: sans-serif; transition: background 0.3s;">
  <h3 id="card-title">Original Title</h3>
  <p id="card-text">Click the button below to mutate this DOM node.</p>
  <button id="update-btn" style="background: #4169d8; color: white; border: 0; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
    Update DOM
  </button>
</div>

<script>
  const btn = document.querySelector('#update-btn');
  const title = document.querySelector('#card-title');
  const card = document.querySelector('#card');

  btn.addEventListener('click', () => {
    title.textContent = 'DOM Updated Live!';
    card.style.background = '#ecfdf5';
    card.style.borderColor = '#10b981';
  });
</script>`
      },
      {
        title: 'Event Handling & Event Objects',
        description: 'Listen to user interactions with addEventListener, inspect the event object (e.target, e.key), and call e.preventDefault().',
        concept: 'Call e.preventDefault() on form submit events to stop the browser from performing a full page reload.',
        tags: ['addEventListener', 'event.target', 'event.preventDefault()', 'click', 'keydown', 'input'],
        challenge: 'Add a keydown listener to clear the text whenever the user presses the Escape key.',
        code: `<div style="font-family: sans-serif; max-width: 320px;">
  <input id="live-input" placeholder="Type something..." style="width: 100%; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
  <p style="margin-top: 8px; color: #475569;">You typed: <strong id="echo" style="color: #4169d8;">...</strong></p>
</div>

<script>
  const input = document.querySelector('#live-input');
  const echo = document.querySelector('#echo');

  input.addEventListener('input', (event) => {
    echo.textContent = event.target.value || '(empty)';
  });
</script>`
      },
      {
        title: 'Array Power Methods: map, filter & reduce',
        description: 'Transform collections without mutating originals: map transforms each item, filter excludes items, and reduce accumulates totals.',
        concept: 'Chain methods together: items.filter(...).map(...) creates readable, declarative data transformations.',
        tags: ['.map()', '.filter()', '.reduce()', '.find()', '.includes()'],
        challenge: 'Use .filter() to only keep scores above 80, then calculate their average.',
        code: `<div id="output" style="font-family: sans-serif; line-height: 1.8;"></div>

<script>
  const scores = [65, 88, 92, 45, 78, 95];

  // 1. Filter: high scores only
  const highScores = scores.filter(s => s >= 80);

  // 2. Map: format into strings
  const formatted = highScores.map(s => \`\${s} pts\`);

  // 3. Reduce: sum them up
  const sum = highScores.reduce((acc, curr) => acc + curr, 0);

  document.querySelector('#output').innerHTML = \`
    <p>High Scores (>=80): <strong>\${formatted.join(', ')}</strong></p>
    <p>Sum of Top Scores: <strong>\${sum}</strong></p>
  \`;
</script>`
      },
      {
        title: 'Objects, Destructuring & Spread Operator (...)',
        description: 'Work with complex objects using property shorthand, destructuring assignments { title }, and the spread operator {...obj}.',
        concept: 'The spread operator creates shallow copies of objects and arrays, enabling immutable state updates.',
        tags: ['{ ...spread }', '[ ...array ]', 'destructuring', 'object literals'],
        challenge: 'Create a updatedUser object that overrides user city to "San Francisco" using object spread.',
        code: `<div id="profile" style="font-family: sans-serif; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;"></div>

<script>
  const baseConfig = { theme: 'dark', language: 'en', sound: true };
  const userPreferences = { theme: 'light', sound: false };

  // Merging with spread operator: later keys override earlier ones
  const finalSettings = { ...baseConfig, ...userPreferences };

  // Destructuring
  const { theme, sound } = finalSettings;

  document.querySelector('#profile').innerHTML = \`
    <h4>Merged User Settings:</h4>
    <p>Theme: <strong>\${theme}</strong></p>
    <p>Sound Enabled: <strong>\${sound ? 'Yes' : 'No'}</strong></p>
  \`;
</script>`
      },
      {
        title: 'Asynchronous JavaScript: Promises & async/await',
        description: 'Handle asynchronous actions like network requests with Promise, async/await, and try...catch blocks.',
        concept: 'async/await is syntactic sugar over Promises that allows asynchronous code to read like synchronous step-by-step logic.',
        tags: ['async', 'await', 'Promise', 'try...catch', 'fetch()'],
        challenge: 'Simulate a network delay of 1000ms using a Promise and setTimeout before showing the data.',
        code: `<div id="status" style="font-family: sans-serif; padding: 16px; background: #edf3ff; border-radius: 8px;">
  <span id="loading">Initiating async task...</span>
</div>

<script>
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function fetchSimulation() {
    const el = document.querySelector('#loading');
    el.textContent = '⏳ Simulating API request (1.5s)...';
    
    await delay(1500);
    
    el.innerHTML = '✅ <strong>Data fetched successfully!</strong> Status: 200 OK';
  }

  fetchSimulation();
</script>`
      },
      {
        title: 'Browser APIs: Web Storage (localStorage)',
        description: 'Persist data across browser sessions using localStorage.setItem, getItem, removeItem, and JSON.stringify/parse.',
        concept: 'localStorage only stores strings. Always wrap objects with JSON.stringify before saving, and JSON.parse upon reading.',
        tags: ['localStorage.setItem', 'localStorage.getItem', 'JSON.stringify', 'JSON.parse'],
        challenge: 'Add a "Clear Storage" button that calls localStorage.removeItem("sample_note").',
        code: `<div style="font-family: sans-serif; max-width: 320px;">
  <input id="note-input" placeholder="Type a note to save..." style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
  <button id="save-btn" style="margin-top: 8px; background: #4169d8; color: white; border: 0; padding: 8px 14px; border-radius: 6px; cursor: pointer;">Save Note</button>
  <p style="margin-top: 8px; color: #475569;">Saved: <strong id="saved-display"></strong></p>
</div>

<script>
  const input = document.querySelector('#note-input');
  const btn = document.querySelector('#save-btn');
  const display = document.querySelector('#saved-display');

  // Load initial
  display.textContent = localStorage.getItem('sample_note') || '(no saved note)';

  btn.addEventListener('click', () => {
    localStorage.setItem('sample_note', input.value);
    display.textContent = input.value;
    input.value = '';
  });
</script>`
      }
    ]
  },

  react: {
    title: 'React: Component Architecture & State Hooks',
    intro: 'Build scalable modern user interfaces using functional components, JSX expressions, props, useState, useEffect, and lists.',
    concept: 'UI is a function of state: when component state changes, React efficiently re-renders the DOM to match.',
    challenge: 'Build an interactive React counter with increment, decrement, and reset controls.',
    steps: [
      {
        title: 'Functional Components & JSX Rendering',
        description: 'A React component is a JavaScript function returning JSX markup. Always capitalize component names (e.g. Card, Header, App).',
        concept: 'JSX looks like HTML, but it compiles to React.createElement JavaScript calls under the hood.',
        tags: ['function Component()', 'return <JSX />', 'PascalCase', '<React.Fragment>'],
        challenge: 'Add a new Header component above the MainContent component.',
        code: `function Badge() {
  return (
    <span style={{ background: '#e2f7ef', color: '#16a34a', padding: '4px 8px', borderRadius: 6, fontSize: 12, fontWeight: 'bold' }}>
      LIVE COMPONENT
    </span>
  );
}

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <Badge />
      <h2 style={{ color: '#4169d8', margin: '10px 0 6px' }}>Hello from React!</h2>
      <p style={{ color: '#64748b' }}>Small composable components build powerful interfaces.</p>
    </div>
  );
}`
      },
      {
        title: 'JSX Rules & Expressions in Curly Braces {}',
        description: 'Embed any JavaScript expression inside JSX using { expression }. Use className instead of class, and style={{ ... }}.',
        concept: 'Inside JSX { curly braces }, you can put variables, math, ternary operators, or function calls, but not statements like if/for.',
        tags: ['{expression}', 'className', 'style={{}}', '<>Fragments</>'],
        challenge: 'Display the current date dynamically inside a paragraph using {new Date().toLocaleDateString()}.',
        code: `function App() {
  const learner = 'Curious Coder';
  const score = 42;
  const isPassing = score >= 40;

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h2>Hello, {learner}!</h2>
      <p>Current Score: <strong>{score} pts</strong></p>
      <p>Status: <span style={{ color: isPassing ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
        {isPassing ? 'Passing grade' : 'Needs review'}
      </span></p>
    </div>
  );
}`
      },
      {
        title: 'Component Props & Reusability',
        description: 'Pass data down from parent components to child components via props. Destructure props directly in function parameters.',
        concept: 'Props are read-only (immutable). A child component should never modify the props it receives from its parent.',
        tags: ['props', 'destructuring ({ title })', 'children', 'defaultProps'],
        challenge: 'Add a third <StatCard> component showing "Stars: 128".',
        code: `function StatCard({ label, value, color }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', padding: 14, borderRadius: 10, flex: 1, minWidth: 120 }}>
      <div style={{ fontSize: 12, color: '#64748b' }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 'bold', color: color || '#4169d8', marginTop: 4 }}>{value}</div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', gap: 12, fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <StatCard label="Completed Lessons" value="16" color="#16a34a" />
      <StatCard label="Total XP" value="320" color="#eab308" />
    </div>
  );
}`
      },
      {
        title: 'State with useState: Counters & Toggles',
        description: 'Store reactive component data with const [state, setState] = React.useState(initialVal). Calling setState triggers a re-render.',
        concept: 'Never mutate state directly (e.g. count++). Always call setCount(count + 1) to inform React of the change.',
        tags: ['React.useState', '[state, setState]', 'immutability', 're-render'],
        challenge: 'Add a Decrement button that reduces count by 1 (don\'t let it go below 0).',
        code: `function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: 'center', padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: 48, margin: 0, color: '#4169d8' }}>{count}</h1>
      <p style={{ color: '#64748b' }}>Reactive click counter</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ background: '#4169d8', color: 'white', border: 0, padding: '10px 18px', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}
        >
          Add +1
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', padding: '10px 18px', borderRadius: 8, cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}`
      },
      {
        title: 'Controlled Form Inputs & Two-Way Binding',
        description: 'Bind input values to React state via value={state} and update it with onChange={(e) => setState(e.target.value)}.',
        concept: 'In a controlled component, React state serves as the "single source of truth" for the form element’s value.',
        tags: ['value={state}', 'onChange={(e) => ...}', 'form state', 'input controls'],
        challenge: 'Add a character counter showing how many characters the user has typed.',
        code: `function App() {
  const [name, setName] = React.useState('');

  return (
    <div style={{ maxWidth: 320, padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 'bold', marginBottom: 6 }}>
        Your Name:
      </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type here..."
        style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 8, boxSizing: 'border-box' }}
      />
      <div style={{ marginTop: 12, padding: 12, background: '#edf3ff', borderRadius: 8 }}>
        Live preview: <strong>{name ? name : '(waiting for input)'}</strong>
      </div>
    </div>
  );
}`
      },
      {
        title: 'Rendering Lists with .map() and Keys',
        description: 'Transform arrays of data into JSX elements using .map(). Always provide a unique key prop to each top-level list item.',
        concept: 'Keys help React identify which items have changed, been added, or been removed during reconciliation.',
        tags: ['array.map()', 'key={item.id}', 'list rendering', 'unique keys'],
        challenge: 'Add a button next to each item that deletes it from the list.',
        code: `function App() {
  const [fruits] = React.useState([
    { id: 'f1', name: 'Apples 🍎', category: 'Orchard' },
    { id: 'f2', name: 'Bananas 🍌', category: 'Tropical' },
    { id: 'f3', name: 'Strawberries 🍓', category: 'Berry' }
  ]);

  return (
    <div style={{ maxWidth: 320, padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h3>Pantry Inventory</h3>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
        {fruits.map(fruit => (
          <li
            key={fruit.id}
            style={{ padding: '10px 14px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, display: 'flex', justifyContent: 'space-between' }}
          >
            <span>{fruit.name}</span>
            <small style={{ color: '#64748b' }}>{fruit.category}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}`
      },
      {
        title: 'Conditional Rendering: Ternaries & Logical AND',
        description: 'Conditionally display markup using the ternary operator ? : or the short-circuit logical AND operator &&.',
        concept: 'Use condition && <Component /> when you want to render something or nothing at all.',
        tags: ['condition ? A : B', 'condition && <Element />', 'early return', 'null'],
        challenge: 'Add a toggle button that expands and collapses a secret hint card.',
        code: `function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div style={{ maxWidth: 320, padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: '#4169d8', color: 'white', border: 0, padding: '8px 16px', borderRadius: 8, cursor: 'pointer' }}
      >
        {isOpen ? 'Hide Details ▲' : 'Show Details ▼'}
      </button>

      {isOpen && (
        <div style={{ marginTop: 12, padding: 14, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, color: '#166534' }}>
          <strong>Special Content Unlocked!</strong>
          <p style={{ margin: '6px 0 0', fontSize: 13 }}>This block was conditionally rendered using the && operator.</p>
        </div>
      )}
    </div>
  );
}`
      },
      {
        title: 'Side Effects with useEffect Hook',
        description: 'Execute side effects (API calls, timers, event listeners, document title updates) using React.useEffect(callback, [dependencies]).',
        concept: 'An empty dependency array [] runs the effect once on mount. Omitting it runs on every single render.',
        tags: ['React.useEffect', 'dependencies []', 'cleanup return () => {}', 'side effects'],
        challenge: 'Add a dependency so the effect only logs when count exceeds 5.',
        code: `function App() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(true);

  React.useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function when component unmounts or paused
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div style={{ textAlign: 'center', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h2>Timer: <span style={{ color: '#4169d8' }}>{seconds}s</span></h2>
      <button
        onClick={() => setRunning(!running)}
        style={{ background: running ? '#ef4444' : '#22c55e', color: 'white', border: 0, padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}
      >
        {running ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}`
      }
    ]
  }
};
