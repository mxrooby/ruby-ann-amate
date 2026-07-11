import type { ReactNode } from 'react';
import type { AppId } from '../types';
import Terminal from '../components/terminal/Terminal';
import MyComputer from '../components/apps/MyComputer';
import MyPortfolio from '../components/apps/MyPortfolio';
import Projects from '../components/apps/Projects';
import ProjectDetail from '../components/apps/ProjectDetail';
import Experience from '../components/apps/Experience';
import ExperienceDetail from '../components/apps/ExperienceDetail';
import TechStackApp from '../components/apps/TechStackApp';
import Gallery from '../components/apps/Gallery';
import RandomFolder from '../components/apps/RandomFolder';
import NotesFolder from '../components/apps/NotesFolder';
import Notepad from '../components/apps/Notepad';
import MusicPlayer from '../components/apps/MusicPlayer';
import Movies from '../components/apps/Movies';
import MovieDetail from '../components/apps/MovieDetail';
import ResumeViewer from '../components/apps/ResumeViewer';
import ContactApp from '../components/apps/ContactApp';
import InternetExplorer from '../components/apps/InternetExplorer';
import RecycleBin from '../components/apps/RecycleBin';
import ImagePreview from '../components/apps/ImagePreview';

export interface RenderableApp {
  appId: AppId;
  props?: Record<string, unknown>;
  /** Used by the terminal, which needs a stable window id for `exit`. */
  instanceId?: string;
}

export function renderAppBody({ appId, props = {}, instanceId }: RenderableApp): ReactNode {
  switch (appId) {
    case 'terminal':
      return <Terminal winId={instanceId ?? 'mobile-terminal'} />;
    case 'my-computer':
      return <MyComputer />;
    case 'my-portfolio':
      return <MyPortfolio />;
    case 'projects':
      return <Projects />;
    case 'project-detail':
      return <ProjectDetail projectId={props.projectId as string} />;
    case 'experience':
      return <Experience />;
    case 'experience-detail':
      return <ExperienceDetail experienceId={props.experienceId as string} />;
    case 'tech-stack':
      return <TechStackApp />;
    case 'gallery':
      return <Gallery />;
    case 'random':
      return <RandomFolder />;
    case 'notes':
      return <NotesFolder />;
    case 'notepad':
      return <Notepad noteId={props.noteId as string} bin={props.bin as boolean} />;
    case 'music-player':
      return <MusicPlayer />;
    case 'movies':
      return <Movies />;
    case 'movie-detail':
      return <MovieDetail movieId={props.movieId as string} />;
    case 'resume':
      return <ResumeViewer />;
    case 'contact':
      return <ContactApp />;
    case 'internet-explorer':
      return <InternetExplorer initialUrl={props.url as string | undefined} />;
    case 'recycle-bin':
      return <RecycleBin />;
    case 'image-preview':
      return (
        <ImagePreview
          path={props.path as string}
          filename={props.filename as string}
          collection={props.collection as 'gallery' | 'random' | undefined}
        />
      );
    default:
      return null;
  }
}
