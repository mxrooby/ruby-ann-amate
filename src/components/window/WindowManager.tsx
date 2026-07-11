import { AnimatePresence } from 'framer-motion';
import { useWindowStore } from '../../state/windowStore';
import DesktopWindow from './DesktopWindow';
import { renderAppBody } from '../../lib/appRenderer';

export default function WindowManager() {
  const windows = useWindowStore((s) => s.windows);

  return (
    <AnimatePresence>
      {windows.map((win) => (
        <DesktopWindow key={win.id} win={win}>
          {renderAppBody({ appId: win.appId, props: win.props, instanceId: win.id })}
        </DesktopWindow>
      ))}
    </AnimatePresence>
  );
}
