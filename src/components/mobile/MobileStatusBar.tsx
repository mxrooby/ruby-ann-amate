import { useEffect, useState } from 'react';
import './mobile.css';

export default function MobileStatusBar() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mobile-status-bar">
      <span className="mobile-status-time">
        {now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
      </span>
      <div className="mobile-status-icons">
        <span title="Signal">&#128246;</span>
        <span title="Wi-Fi">&#128225;</span>
        <span title="Battery">&#128267;</span>
      </div>
    </div>
  );
}
