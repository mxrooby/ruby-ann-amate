import './explorer.css';

export interface ExplorerItem {
  id: string;
  label: string;
  icon: string;
  onOpen: () => void;
}

interface ExplorerViewProps {
  items: ExplorerItem[];
  emptyMessage?: string;
}

export default function ExplorerView({ items, emptyMessage }: ExplorerViewProps) {
  if (items.length === 0) {
    return <div className="explorer-empty">{emptyMessage ?? 'This folder is empty.'}</div>;
  }
  return (
    <div className="explorer-view">
      {items.map((item) => (
        <button key={item.id} className="explorer-item" onDoubleClick={item.onOpen} title={item.label}>
          <img src={item.icon} alt="" draggable={false} />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
