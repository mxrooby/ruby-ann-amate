import { experiences } from '../../data/experience';
import DeviceMockup from '../shared/DeviceMockup';
import './detail.css';

interface ExperienceDetailProps {
  experienceId: string;
}

export default function ExperienceDetail({ experienceId }: ExperienceDetailProps) {
  const exp = experiences.find((e) => e.id === experienceId);
  if (!exp) return <div className="detail-empty">Experience not found.</div>;

  return (
    <div className="detail-split">
      <div className="detail-info">
        <h2>{exp.position}</h2>
        <div className="detail-meta">
          <span>{exp.company}</span>
          <span>&middot;</span>
          <span>{exp.duration}</span>
        </div>
        <p>{exp.overview}</p>
        <h3>Responsibilities</h3>
        <ul>
          {exp.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        <h3>Technologies</h3>
        <div className="detail-tags">
          {exp.technologies.map((t) => (
            <span className="detail-tag" key={t}>{t}</span>
          ))}
        </div>
        <h3>Result</h3>
        <p>{exp.takeaway}</p>
        {exp.github ? (
          <a className="xp-button detail-github" href={exp.github} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        ) : (
          <p className="detail-note">{exp.githubNote}</p>
        )}
      </div>
      <div className="detail-preview">
        <DeviceMockup previews={exp.previews} />
      </div>
    </div>
  );
}
