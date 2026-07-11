import ExplorerView from '../shared/ExplorerView';
import { useOpenApp } from '../../hooks/useOpenApp';
import { XP_ICONS } from '../../data/icons';

export default function MyComputer() {
  const openApp = useOpenApp();

  return (
    <ExplorerView
      items={[
        {
          id: 'local-disk',
          label: 'Local Disk (C:)',
          icon: XP_ICONS.myComputer,
          onOpen: () => openApp('my-computer'),
        },
        {
          id: 'portfolio-drive',
          label: 'Portfolio Drive (R:)',
          icon: XP_ICONS.earthFolder,
          onOpen: () => openApp('my-portfolio'),
        },
      ]}
    />
  );
}
