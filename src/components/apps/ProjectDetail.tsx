import { projects } from '../../data/projects';
import DeviceMockup from '../shared/DeviceMockup';
import './detail.css';

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return <div className="detail-empty">Project not found.</div>;

  return (
    <div className="detail-split">
      <div className="detail-info">
        <h2>{project.title}</h2>
        <div className="detail-meta">
          <span>{project.role}</span>
          <span>&middot;</span>
          <span>{project.year}</span>
        </div>
        <p>{project.overview}</p>
        <h3>Responsibilities</h3>
        <ul>
          {project.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        <h3>Technologies</h3>
        <div className="detail-tags">
          {project.technologies.map((t) => (
            <span className="detail-tag" key={t}>{t}</span>
          ))}
        </div>
        <h3>Result</h3>
        <p>{project.takeaway}</p>
        {project.github ? (
          <a className="xp-button detail-github" href={project.github} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        ) : (
          <p className="detail-note">{project.githubNote}</p>
        )}
      </div>
      <div className="detail-preview">
        <DeviceMockup previews={project.previews} />
      </div>
    </div>
  );
}
