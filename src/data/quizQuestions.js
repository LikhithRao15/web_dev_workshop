export const challengeLevels = [
  {
    id: 'beginner',
    levelNumber: 1,
    title: 'Beginner Foundations',
    subtitle: 'Core tags, colors & basic syntax',
    description: 'Establish rock-solid basics across HTML structure, fundamental styling, and simple component concepts.',
    xpPerQuestion: 5,
    color: 'blue',
    badge: 'Novice Scout',
    iconName: 'Sprout'
  },
  {
    id: 'intermediate',
    levelNumber: 2,
    title: 'Intermediate Builder',
    subtitle: 'Flexbox, box-sizing, forms & state',
    description: 'Tackle real-world essentials: the box model, Flexbox alignment, array iteration, and React useState.',
    xpPerQuestion: 10,
    color: 'green',
    badge: 'Skilled Builder',
    iconName: 'Zap'
  },
  {
    id: 'advanced',
    levelNumber: 3,
    title: 'Advanced Architect',
    subtitle: 'CSS Grid, async/await & useEffect',
    description: 'Master complex multi-column grids, positioning overlays, Promise pipelines, and React side-effect lifecycles.',
    xpPerQuestion: 15,
    color: 'purple',
    badge: 'Master Architect',
    iconName: 'Shield'
  },
  {
    id: 'expert',
    levelNumber: 4,
    title: 'Fully Advanced (Expert)',
    subtitle: 'Stacking contexts, closures & performance',
    description: 'Deep-dive questions designed for master developers: stacking contexts, event delegation, closures, and React reconciliation.',
    xpPerQuestion: 20,
    color: 'orange',
    badge: 'Code Sorcerer',
    iconName: 'Crown'
  }
];

export const questionsByLevel = {
  beginner: [
    {
      track: 'HTML',
      level: 'beginner',
      question: 'Which tag creates the biggest top-level heading on a webpage?',
      options: ['<head>', '<h1>', '<title>', '<p>'],
      answer: 1,
      why: '<h1> is the top-level heading displayed in the page body. <title> only names the browser tab.'
    },
    {
      track: 'HTML',
      level: 'beginner',
      question: 'Which HTML tag creates a clickable link to another website?',
      options: ['<link>', '<button>', '<a>', '<href>'],
      answer: 2,
      why: 'The <a> (anchor) tag creates links using the href attribute (e.g. <a href="https://...">).'
    },
    {
      track: 'CSS',
      level: 'beginner',
      question: 'Which CSS property changes the color of text inside an element?',
      options: ['text-style', 'color', 'background-color', 'font-color'],
      answer: 1,
      why: 'The "color" property sets the foreground text color in CSS.'
    },
    {
      track: 'CSS',
      level: 'beginner',
      question: 'What is the space between the content of an element and its border called?',
      options: ['Margin', 'Gap', 'Padding', 'Outline'],
      answer: 2,
      why: 'Padding is inside the border, surrounding the content. Margin is outside the border.'
    },
    {
      track: 'JavaScript',
      level: 'beginner',
      question: 'Which keyword creates a variable that cannot be reassigned?',
      options: ['var', 'let', 'const', 'static'],
      answer: 2,
      why: '"const" declares a block-scoped identifier that cannot be reassigned once set.'
    },
    {
      track: 'React',
      level: 'beginner',
      question: 'What is a functional React component at its core?',
      options: ['A database record', 'A JavaScript function that returns JSX markup', 'A browser CSS property', 'A web server process'],
      answer: 1,
      why: 'In React, functional components are JavaScript functions that return JSX describing what the UI should look like.'
    }
  ],

  intermediate: [
    {
      track: 'HTML',
      level: 'intermediate',
      question: 'How do you properly associate an accessible <label> with an <input>?',
      options: [
        'Match the label\'s "for" attribute to the input\'s "id"',
        'Wrap both elements in a <div>',
        'Give them the same "name" attribute',
        'Labels connect automatically by order in HTML'
      ],
      answer: 0,
      why: 'When <label for="user-id"> matches <input id="user-id">, clicking the label activates the field and screen readers identify the input correctly.'
    },
    {
      track: 'CSS',
      level: 'intermediate',
      question: 'Why do modern CSS resets set * { box-sizing: border-box; }?',
      options: [
        'It forces all elements into a flexbox container',
        'It keeps padding and borders inside the declared width, preventing overflow',
        'It removes default margins on every element',
        'It enables GPU acceleration automatically'
      ],
      answer: 1,
      why: 'Under border-box, an element with width: 200px and padding: 20px remains exactly 200px wide rather than expanding to 240px.'
    },
    {
      track: 'CSS',
      level: 'intermediate',
      question: 'In Flexbox, which property aligns items along the primary horizontal axis (when flex-direction is row)?',
      options: ['align-items', 'justify-content', 'flex-wrap', 'align-self'],
      answer: 1,
      why: 'justify-content distributes space along the main axis. align-items controls the perpendicular cross axis.'
    },
    {
      track: 'JavaScript',
      level: 'intermediate',
      question: 'Which array method creates a new array by transforming every item with a function?',
      options: ['.filter()', '.map()', '.reduce()', '.forEach()'],
      answer: 1,
      why: '.map() iterates over every item in an array and returns a brand new transformed array without mutating the original.'
    },
    {
      track: 'JavaScript',
      level: 'intermediate',
      question: 'What does the spread operator (...) do when updating an object: { ...user, active: true }?',
      options: [
        'Deletes all other keys on the object',
        'Shallow copies existing keys from user, appending or updating active: true',
        'Freezes the object into read-only memory',
        'Converts the object into an array'
      ],
      answer: 1,
      why: 'The spread operator creates an immutable shallow copy with specified overrides applied.'
    },
    {
      track: 'React',
      level: 'intermediate',
      question: 'What is the correct way to increment state declared with const [count, setCount] = React.useState(0)?',
      options: ['count = count + 1', 'count++', 'setCount(count + 1)', 'React.increment(count)'],
      answer: 2,
      why: 'React state is immutable. Calling the setter function (setCount) triggers a re-render with the new state value.'
    }
  ],

  advanced: [
    {
      track: 'HTML',
      level: 'advanced',
      question: 'Which semantic tag should contain the central, unique content of a webpage (only one per document)?',
      options: ['<section>', '<article>', '<main>', '<div id="content">'],
      answer: 2,
      why: '<main> represents the dominant content of the document body. Assistive tech provides keyboard shortcuts to jump straight to <main>.'
    },
    {
      track: 'CSS',
      level: 'advanced',
      question: 'Which CSS Grid declaration creates fluid auto-wrapping columns without using media queries?',
      options: [
        'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))',
        'grid-template-columns: 1fr 1fr 1fr',
        'grid-columns: auto-flow',
        'display: auto-grid'
      ],
      answer: 0,
      why: 'repeat(auto-fit, minmax(200px, 1fr)) computes the optimal number of columns based on container width without hardcoded media query breakpoints.'
    },
    {
      track: 'CSS',
      level: 'advanced',
      question: 'An element with position: absolute calculates its offset (top, left) relative to which element?',
      options: [
        'Always the <body> element',
        'The nearest ancestor with a position other than static (e.g. relative)',
        'Its immediately preceding sibling',
        'The nearest <div> wrapper'
      ],
      answer: 1,
      why: 'An absolute element searches up the DOM tree until it hits a positioned ancestor (commonly given position: relative).'
    },
    {
      track: 'JavaScript',
      level: 'advanced',
      question: 'How does an async function handle a rejected Promise inside a try...catch block?',
      options: [
        'It crashes the entire browser tab',
        'Execution jumps immediately to the catch block with the error object',
        'It ignores the error and returns undefined',
        'async functions do not support try...catch'
      ],
      answer: 1,
      why: 'When an awaited Promise rejects, async/await throws an exception caught cleanly by the surrounding catch (err) block.'
    },
    {
      track: 'React',
      level: 'advanced',
      question: 'Why does React require a unique "key" prop when rendering arrays with .map()?',
      options: [
        'To style elements with distinct CSS IDs',
        'To identify which items changed, were added, or removed during virtual DOM diffing',
        'To make list items clickable',
        'Keys are optional and only needed in production'
      ],
      answer: 1,
      why: 'Keys provide stable item identity so React preserves component state and avoids unnecessary DOM re-creations during list updates.'
    },
    {
      track: 'React',
      level: 'advanced',
      question: 'When does a React.useEffect with an empty dependency array [] run?',
      options: [
        'On every render and state change',
        'Once, right after the component initially mounts',
        'Whenever props change',
        'Never'
      ],
      answer: 1,
      why: 'An empty dependency array tells React that the effect relies on no reactive variables, running only once upon initial mount.'
    }
  ],

  expert: [
    {
      track: 'CSS',
      level: 'expert',
      question: 'Why might an element with z-index: 9999 appear BEHIND an element with z-index: 1?',
      options: [
        'z-index values cannot exceed 1000 in modern browsers',
        'The first element is trapped inside a parent stacking context with a lower z-index',
        'z-index only applies to <img> tags',
        'The browser ran out of rendering memory'
      ],
      answer: 1,
      why: 'Stacking contexts are hierarchical. If a parent container has z-index: 0, its children cannot break out to appear above a sibling container with z-index: 1.'
    },
    {
      track: 'CSS',
      level: 'expert',
      question: 'In Flexbox, what is the key difference between flex-basis: 0 and flex-basis: auto?',
      options: [
        'flex-basis: 0 distributes space based solely on flex-grow, ignoring content size',
        'flex-basis: auto always hides overflow',
        'flex-basis: 0 disables flex-shrink completely',
        'There is no difference in modern browsers'
      ],
      answer: 0,
      why: 'flex-basis: auto allocates space taking the element content size into account. flex-basis: 0 ignores content size so items with equal flex-grow receive identical widths.'
    },
    {
      track: 'JavaScript',
      level: 'expert',
      question: 'What is Event Delegation in the browser DOM and why is it used?',
      options: [
        'Attaching separate listeners to thousands of child elements individually',
        'Attaching a single event listener to a common ancestor and using event.target via event bubbling',
        'Sending events to a background Web Worker',
        'Cancelling all event listeners across the document'
      ],
      answer: 1,
      why: 'Event delegation exploits event bubbling by placing one listener on a parent element, handling events for current and future dynamic children with minimal memory.'
    },
    {
      track: 'JavaScript',
      level: 'expert',
      question: 'In JavaScript closures, what does an inner function retain access to after the outer function has returned?',
      options: [
        'Only global window variables',
        'The lexical scope environment of the outer function, including variables and parameters',
        'Nothing; memory is immediately garbage collected',
        'Only primitive numbers and strings'
      ],
      answer: 1,
      why: 'A closure is the combination of a function bundled with references to its surrounding lexical environment, allowing it to remember outer variables.'
    },
    {
      track: 'React',
      level: 'expert',
      question: 'What is the primary difference between a controlled and uncontrolled component in React?',
      options: [
        'Controlled components store form data in React state; uncontrolled components let the DOM handle state via ref',
        'Controlled components cannot use useState',
        'Uncontrolled components are deprecated in React 19',
        'Controlled components only render server-side'
      ],
      answer: 0,
      why: 'Controlled inputs rely on React state via value and onChange. Uncontrolled inputs store their value in the DOM node accessed via React.useRef().'
    },
    {
      track: 'React',
      level: 'expert',
      question: 'When should React.useCallback(fn, deps) be used for performance optimization?',
      options: [
        'On every single function in every component',
        'When passing callbacks to optimized child components relying on reference equality (React.memo)',
        'To replace standard useEffect hooks',
        'To speed up arithmetic computations'
      ],
      answer: 1,
      why: 'useCallback memoizes function references between renders. It only provides a performance benefit when paired with memoized children or dependencies.'
    }
  ]
};

// Flattened export for backward compatibility
export const gameQuestions = [
  ...questionsByLevel.beginner,
  ...questionsByLevel.intermediate,
  ...questionsByLevel.advanced,
  ...questionsByLevel.expert
];
