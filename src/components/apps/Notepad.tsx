import { notes, recycleBinNotes } from '../../data/notes';
import './notepad.css';

interface NotepadProps {
  noteId: string;
  bin?: boolean;
}

export default function Notepad({ noteId, bin }: NotepadProps) {
  const source = bin ? recycleBinNotes : notes;
  const note = source.find((n) => n.id === noteId);

  return (
    <div className="notepad">
      <div className="notepad-menubar">
        <span>File</span>
        <span>Edit</span>
        <span>Format</span>
        <span>View</span>
        <span>Help</span>
      </div>
      <textarea className="notepad-body" readOnly value={note?.content ?? 'File not found.'} spellCheck={false} />
    </div>
  );
}
