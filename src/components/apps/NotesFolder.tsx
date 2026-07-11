import ExplorerView from '../shared/ExplorerView';
import { useOpenApp } from '../../hooks/useOpenApp';
import { XP_ICONS } from '../../data/icons';
import { notes } from '../../data/notes';

export default function NotesFolder() {
  const openApp = useOpenApp();

  return (
    <ExplorerView
      items={notes.map((n) => ({
        id: n.id,
        label: n.filename,
        icon: XP_ICONS.myDocuments,
        onOpen: () => openApp('notepad', { noteId: n.id, bin: false }, n.filename),
      }))}
    />
  );
}
