import { contact } from '../../data/contact';
import './contact.css';

export default function ContactApp() {
  return (
    <div className="contact-app">
      <h2>Let&apos;s connect</h2>
      <div className="contact-list">
        <a className="contact-item" href={`mailto:${contact.email}`}>
          <span className="contact-label">Email</span>
          <span>{contact.email}</span>
        </a>
        <a className="contact-item" href={contact.github} target="_blank" rel="noreferrer">
          <span className="contact-label">GitHub</span>
          <span>{contact.githubHandle}</span>
        </a>
        <a className="contact-item" href={contact.linkedin} target="_blank" rel="noreferrer">
          <span className="contact-label">LinkedIn</span>
          <span>Ruby Ann Amate</span>
        </a>
        <a className="contact-item" href={contact.instagram} target="_blank" rel="noreferrer">
          <span className="contact-label">Instagram</span>
          <span>{contact.instagramHandle}</span>
        </a>
        <div className="contact-item static">
          <span className="contact-label">Phone</span>
          <span>{contact.phone}</span>
        </div>
      </div>
    </div>
  );
}
