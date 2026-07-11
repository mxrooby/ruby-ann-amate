import type { ExperienceEntry } from '../types';

export const experiences: ExperienceEntry[] = [
  {
    id: 'rakso',
    company: 'Rakso Computer Technology Inc.',
    position: 'Backend Developer Intern',
    duration: 'January 2026 \u2013 April 2026',
    overview:
      'During my internship at Rakso Computer Technology Inc., I contributed to the planning, design, and development of a new Event Management module for an existing web-based school portal using Laravel and SQLite.',
    responsibilities: [
      'Collaborated in planning the Event Management module and identifying features to be implemented.',
      'Designed backend workflows, system flowcharts, and feature specifications.',
      'Presented the proposed new module features, user interface, flowcharts, and implementation plan to the project supervisor during the planning phase.',
      'Developed backend functionalities using Laravel and SQLite, implementing business logic and database operations within the existing system.',
      'Worked with the development team throughout implementation, testing, debugging, and Agile Scrum practices.',
    ],
    technologies: ['Laravel', 'SQLite', 'Blade', 'Controllers', 'Routes', 'Migrations', 'MVC Architecture', 'Agile Scrum'],
    github: null,
    githubNote: 'This project was developed during my internship at Rakso Computer Technology Inc. No public repository is available.',
    takeaway:
      'This internship gave me hands-on experience in backend development, system planning, database integration, technical documentation, and working within an Agile development team.',
    logo: '/assets/experience/rakso-logo.jpeg',
    previews: [
      { file: '/assets/experience/event-module-flowchart.gif', type: 'gif', device: 'laptop' },
      { file: '/assets/experience/event-module-presentation.gif', type: 'gif', device: 'laptop' },
      { file: '/assets/experience/event-module-implementation.gif', type: 'gif', device: 'laptop' },
    ],
  },
];
