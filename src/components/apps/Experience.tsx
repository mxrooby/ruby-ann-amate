import ExplorerView from '../shared/ExplorerView';
import { useOpenApp } from '../../hooks/useOpenApp';
import { experiences } from '../../data/experience';

export default function Experience() {
  const openApp = useOpenApp();

  return (
    <ExplorerView
      items={experiences.map((e) => ({
        id: e.id,
        label: e.company,
        icon: e.logo,
        onOpen: () => openApp('experience-detail', { experienceId: e.id }, e.company),
      }))}
    />
  );
}
