import { useState } from 'react';
import { bookmarks } from '../../data/contact';
import './internetExplorer.css';

interface InternetExplorerProps {
  initialUrl?: string;
}

export default function InternetExplorer({ initialUrl }: InternetExplorerProps) {
  const [current, setCurrent] = useState(initialUrl ?? bookmarks[0].url);

  return (
    <div className="ie-app">
      <div className="ie-toolbar">
        <span className="ie-address-label">Address</span>
        <div className="ie-address-bar">{current}</div>
        <button
          className="xp-button"
          onClick={() => window.open(current, '_blank')}
        >
          Go
        </button>
      </div>
      <div className="ie-bookmarks">
        {bookmarks.map((b) => (
          <button
            key={b.label}
            className={`ie-bookmark ${current === b.url ? 'active' : ''}`}
            onClick={() => setCurrent(b.url)}
          >
            {b.label}
          </button>
        ))}
      </div>
      <div className="ie-content">
        <p>This bookmark opens an external site in a new tab.</p>
        <button className="xp-button" onClick={() => window.open(current, '_blank')}>
          Visit {bookmarks.find((b) => b.url === current)?.label ?? 'site'} &rarr;
        </button>
      </div>
    </div>
  );
}
