import ExplorerView from '../shared/ExplorerView';
import { useOpenApp } from '../../hooks/useOpenApp';
import { XP_ICONS } from '../../data/icons';

export default function MyPortfolio() {
  const openApp = useOpenApp();

  return (
    <ExplorerView
      items={[
        { id: 'projects', label: 'Projects', icon: XP_ICONS.closedFolder, onOpen: () => openApp('projects') },
        { id: 'experience', label: 'Experience', icon: XP_ICONS.closedFolder, onOpen: () => openApp('experience') },
        { id: 'resume', label: 'Resume.pdf', icon: XP_ICONS.myDocuments, onOpen: () => openApp('resume') },
        { id: 'tech-stack', label: 'Tech Stack', icon: XP_ICONS.controlPanel, onOpen: () => openApp('tech-stack') },
        { id: 'contact', label: 'Contact', icon: XP_ICONS.networkDocuments, onOpen: () => openApp('contact') },
        { id: 'gallery', label: 'Gallery', icon: XP_ICONS.myPictures, onOpen: () => openApp('gallery') },
        { id: 'random', label: 'Random', icon: XP_ICONS.myPictures, onOpen: () => openApp('random') },
        { id: 'movies', label: 'Movie Library', icon: XP_ICONS.myVideos, onOpen: () => openApp('movies') },
        { id: 'notes', label: 'Notes', icon: XP_ICONS.myDocuments, onOpen: () => openApp('notes') },
      ]}
    />
  );
}
