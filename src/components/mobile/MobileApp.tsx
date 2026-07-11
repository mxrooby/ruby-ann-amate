import { useMobileNavStore } from '../../state/mobileNavStore';
import { useOpenApp } from '../../hooks/useOpenApp';
import MobileStatusBar from './MobileStatusBar';
import MobileHomeScreen from './MobileHomeScreen';
import MobilePage from './MobilePage';
import { renderAppBody } from '../../lib/appRenderer';
import './mobile.css';

export default function MobileApp() {
  const stack = useMobileNavStore((s) => s.stack);
  const pop = useMobileNavStore((s) => s.pop);
  const openApp = useOpenApp();
  const current = stack[stack.length - 1];

  return (
    <div className="mobile-root">
      <MobileStatusBar />
      <MobileHomeScreen onOpen={(appId, props, title) => openApp(appId, props, title)} />

      {!current && (
        <button
          className="mobile-contact-fab"
          onClick={() => openApp('contact', undefined, 'Contact')}
          aria-label="Contact"
        >
          &#9993;
        </button>
      )}

      {stack.map((entry, i) => (
        <MobilePage
          key={`${entry.appId}-${i}`}
          title={entry.title}
          icon={entry.icon}
          onBack={pop}
          hidden={i !== stack.length - 1}
        >
          {renderAppBody({ appId: entry.appId, props: entry.props, instanceId: `mobile-terminal-${i}` })}
        </MobilePage>
      ))}
    </div>
  );
}
