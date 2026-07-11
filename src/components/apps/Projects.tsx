import ExplorerView from '../shared/ExplorerView';
import { useOpenApp } from '../../hooks/useOpenApp';
import { XP_ICONS } from '../../data/icons';
import { projects } from '../../data/projects';

export default function Projects() {
  const openApp = useOpenApp();

  return (
    <ExplorerView
      items={projects.map((p) => ({
        id: p.id,
        label: p.title,
        icon: XP_ICONS.closedFolder,
        onOpen: () => openApp('project-detail', { projectId: p.id }, p.title),
      }))}
    />
  );
}
