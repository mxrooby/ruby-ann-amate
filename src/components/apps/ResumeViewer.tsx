import './resume.css';

const RESUME_PATH = '/assets/resume/Ruby_Ann_Amate_Resume.pdf';

export default function ResumeViewer() {
  return (
    <div className="resume-viewer">
      <div className="resume-toolbar">
        <a className="xp-button" href={RESUME_PATH} download>
          Download
        </a>
        <button
          className="xp-button"
          onClick={() => {
            const win = window.open(RESUME_PATH, '_blank');
            win?.addEventListener('load', () => win.print());
          }}
        >
          Print
        </button>
      </div>
      <iframe title="Resume" src={RESUME_PATH} className="resume-frame" />
    </div>
  );
}
