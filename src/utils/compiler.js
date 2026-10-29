import { transform } from 'sucrase';

const BASE_STYLES = `
  *, *::before, *::after { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    padding: 24px;
    margin: 0;
    color: #202b3c;
    line-height: 1.5;
    background: transparent;
  }
  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

/**
 * Builds preview document HTML for HTML, CSS, JavaScript, or compiled React.
 */
export function buildPreviewDocument(code, trackId = 'html') {
  if (trackId !== 'react') {
    return {
      error: null,
      html: `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>${BASE_STYLES}</style>
</head>
<body>
  ${code || ''}
</body>
</html>`
    };
  }

  // React compilation via Sucrase
  try {
    const compiled = transform(code || '', {
      transforms: ['jsx'],
      production: true
    }).code;

    const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>${BASE_STYLES}</style>
  <!-- React 18 CDN for sandboxed execution -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script>
    // Offline resilient micro-React fallback in case CDN is unreachable
    if (!window.React) {
      window.React = {
        createElement: function(type, props) {
          props = props || {};
          var children = Array.prototype.slice.call(arguments, 2);
          return { type: type, props: Object.assign({}, props, { children: children.length === 1 ? children[0] : children }) };
        },
        useState: function(init) {
          if (!window._stateSlot) window._stateSlot = { val: typeof init === 'function' ? init() : init };
          var setter = function(next) {
            window._stateSlot.val = typeof next === 'function' ? next(window._stateSlot.val) : next;
            window._renderApp && window._renderApp();
          };
          return [window._stateSlot.val, setter];
        },
        useEffect: function(cb) { setTimeout(cb, 0); }
      };
      window.ReactDOM = {
        createRoot: function(container) {
          return {
            render: function(vnode) {
              container.innerHTML = '';
              function renderNode(node) {
                if (node == null || node === false) return document.createTextNode('');
                if (typeof node === 'string' || typeof node === 'number') return document.createTextNode(String(node));
                if (typeof node.type === 'function') return renderNode(node.type(node.props));
                var el = document.createElement(node.type);
                var props = node.props || {};
                Object.keys(props).forEach(function(key) {
                  if (key === 'children') return;
                  if (key === 'style' && typeof props[style] === 'object') {
                    Object.assign(el.style, props[style]);
                  } else if (key.startsWith('on') && typeof props[key] === 'function') {
                    el.addEventListener(key.substring(2).toLowerCase(), props[key]);
                  } else {
                    el.setAttribute(key, props[key]);
                  }
                });
                var children = Array.isArray(props.children) ? props.children : (props.children ? [props.children] : []);
                children.forEach(function(child) { el.appendChild(renderNode(child)); });
                return el;
              }
              container.appendChild(renderNode(vnode));
            }
          };
        }
      };
    }
  </script>
</head>
<body>
  <div id="root"></div>
  <script>
    window.addEventListener('error', function(e) {
      var root = document.getElementById('root');
      if (root) {
        root.innerHTML = '<div style="color:#d93025;background:#ffebee;padding:16px;border-radius:8px;font-family:sans-serif;font-size:13px;line-height:1.5;"><strong>Runtime Error:</strong><br>' + e.message + '</div>';
      }
    });

    try {
      ${compiled}

      function renderApp() {
        var rootEl = document.getElementById('root');
        var ComponentToRender = null;
        if (typeof App !== 'undefined') ComponentToRender = App;
        else if (typeof Counter !== 'undefined') ComponentToRender = Counter;
        else if (typeof Welcome !== 'undefined') ComponentToRender = Welcome;
        else {
          // Look for any declared function starting with capital letter
          var candidates = Object.keys(window).filter(function(k) {
            return /^[A-Z]/.test(k) && typeof window[k] === 'function';
          });
          if (candidates.length > 0) ComponentToRender = window[candidates[candidates.length - 1]];
        }

        if (ComponentToRender) {
          if (ReactDOM.createRoot) {
            if (!window._reactRoot) {
              window._reactRoot = ReactDOM.createRoot(rootEl);
            }
            window._reactRoot.render(React.createElement(ComponentToRender));
          } else if (ReactDOM.render) {
            ReactDOM.render(React.createElement(ComponentToRender), rootEl);
          }
        } else {
          rootEl.innerHTML = '<div style="color:#7d899c;padding:16px;font-family:sans-serif;font-size:13px;">Define a component such as <code>function App() { ... }</code> to see it rendered here.</div>';
        }
      }

      window._renderApp = renderApp;
      renderApp();
    } catch (err) {
      var root = document.getElementById('root');
      if (root) {
        root.innerHTML = '<div style="color:#d93025;background:#ffebee;padding:16px;border-radius:8px;font-family:sans-serif;font-size:13px;line-height:1.5;"><strong>Evaluation Error:</strong><br>' + err.message + '</div>';
      }
    }
  </script>
</body>
</html>`;

    return { error: null, html };
  } catch (err) {
    const errorMsg = err.message || 'Syntax or JSX compilation error';
    const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>${BASE_STYLES}</style>
</head>
<body>
  <div style="color:#d93025;background:#ffebee;border:1px solid #ffcdd2;padding:16px;border-radius:8px;font-family:ui-monospace,Menlo,monospace;font-size:12px;line-height:1.5;">
    <strong>JSX Compilation Error:</strong>
    <pre style="margin:8px 0 0;white-space:pre-wrap;">${errorMsg}</pre>
  </div>
</body>
</html>`;
    return { error: errorMsg, html };
  }
}
