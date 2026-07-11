import { useCallback } from 'react';
import type { AppId } from '../types';
import { useWindowStore } from '../state/windowStore';
import { useSoundStore } from '../state/soundStore';
import { useMobileNavStore } from '../state/mobileNavStore';
import { useIsMobile } from './useIsMobile';
import { APP_REGISTRY } from '../data/appRegistry';

/**
 * Opens an app, routing to the desktop WindowManager or the mobile navigation
 * stack depending on viewport. Every open plays the window-open sound
 * (error-notif.mp3, per spec) exactly once.
 */
export function useOpenApp() {
  const openAppDesktop = useWindowStore((s) => s.openApp);
  const pushMobile = useMobileNavStore((s) => s.push);
  const playError = useSoundStore((s) => s.playError);
  const isMobile = useIsMobile();

  return useCallback(
    (appId: AppId, props?: Record<string, unknown>, titleOverride?: string) => {
      playError();
      const entry = APP_REGISTRY[appId];
      const title = titleOverride ?? entry?.title ?? appId;
      const icon = entry?.icon ?? '/assets/icons/windows-xp/Closed%20folder.ico';

      if (isMobile) {
        pushMobile({ appId, props, title, icon });
        return;
      }

      openAppDesktop(appId, {
        title,
        icon,
        width: entry?.width,
        height: entry?.height,
        singleton: entry?.singleton,
        resizable: entry?.resizable,
        props,
      });
    },
    [openAppDesktop, pushMobile, playError, isMobile]
  );
}
