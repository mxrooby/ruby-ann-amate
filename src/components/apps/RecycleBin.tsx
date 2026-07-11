import ExplorerView from '../shared/ExplorerView';
import { useOpenApp } from '../../hooks/useOpenApp';
import { XP_ICONS } from '../../data/icons';
import { recycleBinNotes } from '../../data/notes';

export default function RecycleBin() {
  const openApp = useOpenApp();

  return (
    <ExplorerView
      emptyMessage="The Recycle Bin is empty."
      items={recycleBinNotes.map((n) => ({
        id: n.id,
        label: n.filename,
        icon: XP_ICONS.myDocuments,
        onOpen: () => openApp('notepad', { noteId: n.id, bin: true }, n.filename),
      }))}
    />
  );
}
