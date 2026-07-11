import { XP_ICONS } from '../../data/icons';
import './musicPlayer.css';

export default function MusicPlayer() {
  return (
    <div className="music-player">
      <div className="music-player-header">
        <img src={XP_ICONS.myMusic} alt="" />
        <span>Ruby&apos;s Playlist</span>
      </div>
      <iframe
        title="Spotify Playlist"
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/playlist/2GkndoYnfGEcPNqPtCWID9?utm_source=generator"
        width="100%"
        height="352"
        frameBorder={0}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
