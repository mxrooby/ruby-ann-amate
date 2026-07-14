import type { TechItem } from '../types';

export const techStack: TechItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', simpleIconSlug: 'react', color: '#61DAFB' },
  { name: 'HTML5', category: 'Frontend', simpleIconSlug: 'html5', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', simpleIconSlug: 'css3', color: '#1572B6' },
  { name: 'JavaScript', category: 'Frontend', simpleIconSlug: 'javascript', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Frontend', simpleIconSlug: 'typescript', color: '#3178C6' },
  { name: 'Vite', category: 'Frontend', simpleIconSlug: 'vite', color: '#646CFF' },
  // Backend
  { name: 'PHP', category: 'Backend', simpleIconSlug: 'php', color: '#777BB4' },
  { name: 'Laravel', category: 'Backend', simpleIconSlug: 'laravel', color: '#FF2D20' },
  { name: 'Node.js', category: 'Backend', simpleIconSlug: 'nodedotjs', color: '#339933' },
  { name: 'Firebase', category: 'Backend', simpleIconSlug: 'firebase', color: '#FFCA28' },
  // ML & AI
  { name: 'Python', category: 'Machine Learning & AI', simpleIconSlug: 'python', color: '#3776AB' },
  { name: 'PyTorch', category: 'Machine Learning & AI', simpleIconSlug: 'pytorch', color: '#EE4C2C' },
  { name: 'OpenCV', category: 'Machine Learning & AI', simpleIconSlug: 'opencv', color: '#5C3EE8' },
  { name: 'Gemini API', category: 'Machine Learning & AI', simpleIconSlug: 'googlegemini', color: '#8E75B2' },
  { name: 'Gradio', category: 'Machine Learning & AI', localIcon: undefined, color: '#F97316' },
  // Databases
  { name: 'MySQL', category: 'Databases', simpleIconSlug: 'mysql', color: '#4479A1' },
  { name: 'MongoDB', category: 'Databases', simpleIconSlug: 'mongodb', color: '#47A248' },
  { name: 'SQLite', category: 'Databases', simpleIconSlug: 'sqlite', color: '#003B57' },
  { name: 'Firebase Firestore', category: 'Databases', simpleIconSlug: 'firebase', color: '#FFCA28' },
  // Tools & Software
  { name: 'Git', category: 'Tools & Software', simpleIconSlug: 'git', color: '#F05032' },
  { name: 'GitHub', category: 'Tools & Software', simpleIconSlug: 'github', color: '#181717' },
  { name: 'Figma', category: 'Tools & Software', simpleIconSlug: 'figma', color: '#F24E1E' },
  { name: 'Unity', category: 'Tools & Software', simpleIconSlug: 'unity', color: '#FFFFFF' },
];

/** Local SVG fallback path, used only when no Simple Icons slug renders. */
export const localIconOverrides: Record<string, string> = {
  PHP: '/assets/tech-icons/php.svg',
  'CSS3': '/assets/tech-icons/css.svg',
  Git: '/assets/tech-icons/git.svg',
  React: '/assets/tech-icons/react.svg',
  SQLite: '/assets/tech-icons/sqlite.svg',
  JavaScript: '/assets/tech-icons/javascript.svg',
  Firebase: '/assets/tech-icons/firebase.svg',
  TypeScript: '/assets/tech-icons/typescript.svg',
  HTML5: '/assets/tech-icons/html5.svg',
  Vite: '/assets/tech-icons/vite.svg',
  Laravel: '/assets/tech-icons/laravel.svg',
  MySQL: '/assets/tech-icons/mysql.svg',
  'Node.js': '/assets/tech-icons/nodedotjs.svg',
  OpenCV: '/assets/tech-icons/opencv.svg',
  'Gemini API': '/assets/tech-icons/googlegemini.svg',
  Unity: '/assets/tech-icons/unity.svg',
  PyTorch: '/assets/tech-icons/pytorch.svg',
  MongoDB: '/assets/tech-icons/mongodb.svg',
  Python: '/assets/tech-icons/python.svg',
  GitHub: '/assets/tech-icons/github.svg',
};
