import { useState } from 'react';
import { techStack, localIconOverrides } from '../../data/techStack';
import './techStack.css';

function TechIcon({ name, slug, color }: { name: string; slug?: string; color?: string }) {
  const [failed, setFailed] = useState(false);
  const localSrc = localIconOverrides[name];
  const cdnSrc = slug ? `https://cdn.simpleicons.org/${slug}` : undefined;

  if (!failed && cdnSrc) {
    return (
      <img
        src={cdnSrc}
        alt={name}
        onError={() => setFailed(true)}
        style={{ filter: name === 'Unity' ? 'none' : undefined }}
      />
    );
  }
  if (localSrc) {
    return <img src={localSrc} alt={name} />;
  }
  return <div className="tech-icon-fallback" style={{ background: color ?? '#888' }}>{name[0]}</div>;
}

export default function TechStackApp() {
  const categories = Array.from(new Set(techStack.map((t) => t.category)));

  return (
    <div className="tech-stack">
      {categories.map((category) => (
        <div key={category} className="tech-category">
          <h3>{category}</h3>
          <div className="tech-grid">
            {techStack.filter((t) => t.category === category).map((t) => (
              <div className="tech-item" key={t.name} title={t.name}>
                <div className="tech-icon">
                  <TechIcon name={t.name} slug={t.simpleIconSlug} color={t.color} />
                </div>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
