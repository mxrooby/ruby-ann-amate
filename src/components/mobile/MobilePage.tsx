import type { ReactNode } from 'react';
import './mobile.css';

interface MobilePageProps {
  title: string;
  icon: string;
  onBack: () => void;
  children: ReactNode;
  /** When true, this page is not the top of the nav stack and should not render visibly. */
  hidden?: boolean;
}

export default function MobilePage({ title, icon, onBack, children, hidden }: MobilePageProps) {
  return (
    <div className="mobile-page" style={hidden ? { display: 'none' } : undefined}>
      <div className="mobile-page-header">
        <button className="mobile-back-btn" onClick={onBack} aria-label="Back">
          &#8592;
        </button>
        <img src={icon} alt="" className="mobile-page-icon" />
        <span className="mobile-page-title">{title}</span>
      </div>
      <div className="mobile-page-body">{children}</div>
    </div>
  );
}
