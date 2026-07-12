import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'arsemble',
    title: 'ARsemble: An Augmented Reality Approach to PC Building with NLP',
    role: 'Backend Developer',
    year: '2025',
    overview:
      'ARsemble is an educational capstone project that combines Augmented Reality (AR) and Natural Language Processing (NLP) to guide users through PC building. It was created to help students, teachers, beginners, and PC enthusiasts visualize computer components and understand the assembly process without needing physical hardware.',
    responsibilities: [
      'Built backend functionality for user authentication and data management using Firebase.',
      'Implemented the Learning Hub feature using the YouTube API.',
      'Worked on debugging AR camera issues and improving application functionality.',
      'Supported backend integration for the educational AR + NLP application.',
    ],
    technologies: ['Unity', 'C#', 'React', 'Firebase', 'Figma'],
    github: null,
    githubNote: 'No public repository is available for this project.',
    takeaway:
      'This project strengthened my backend development, API integration, debugging, and collaborative capstone project experience.',
    previews: [
      { file: '/assets/projects/arsemble/arsemble-preview-01.png', type: 'image', device: 'phone' },
      { file: '/assets/projects/arsemble/arsemble-preview-02.png', type: 'image', device: 'phone' },
      { file: '/assets/projects/arsemble/arsemble-preview-03.png', type: 'image', device: 'phone' },
      { file: '/assets/projects/arsemble/arsemble-preview-04.png', type: 'image', device: 'phone' },
      { file: '/assets/projects/arsemble/arsemble-preview-05.png', type: 'image', device: 'phone' },
    ],
  },
  {
    id: 'persian-ocr',
    title: 'Persian Alphabet Character Recognition',
    role: 'Machine Learning & Software Developer',
    year: '2026',
    overview:
      'This project is an Optical Character Recognition (OCR) system that recognizes Persian alphabet characters from images and converts them into their Latin alphabet equivalents. I independently designed and developed the system as a final project for Prescriptive Analytics.',
    responsibilities: [
      'Built and trained a custom Convolutional Neural Network (CNN) using PyTorch.',
      'Implemented image preprocessing and character extraction using OpenCV.',
      'Developed an interactive Gradio interface for uploading images and displaying recognition results.',
      'Integrated SQLite for storing prediction records and application data.',
    ],
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Gradio', 'SQLite'],
    github: 'https://github.com/mxrooby/persian-ocr',
    takeaway:
      'This project strengthened my skills in machine learning, computer vision, OCR systems, and full project development from model training to deployment.',
    previews: [
      { file: '/assets/projects/persian-ocr/persian-desktop-preview-01.png', type: 'image', device: 'laptop' },
      { file: '/assets/projects/persian-ocr/persian-desktop-preview-02.png', type: 'image', device: 'laptop' },
      { file: '/assets/projects/persian-ocr/persian-desktop-preview-03.png', type: 'image', device: 'laptop' },
      { file: '/assets/projects/persian-ocr/persian-desktop-preview-04.png', type: 'image', device: 'laptop' },
      { file: '/assets/projects/persian-ocr/persian-phone-preview-01.jpeg', type: 'image', device: 'phone' },
      { file: '/assets/projects/persian-ocr/persian-phone-preview-02.jpeg', type: 'image', device: 'phone' },
      { file: '/assets/projects/persian-ocr/persian-phone-preview-03.jpeg', type: 'image', device: 'phone' },
      { file: '/assets/projects/persian-ocr/persian-phone-preview-04.jpeg', type: 'image', device: 'phone' },
    ],
  },
  {
    id: 'smfp-computer-trading',
    title: 'SMFP Computer Trading Business Website',
    role: 'Frontend Developer',
    year: '2025',
    overview:
      'This is a responsive business website developed for SMFP Computer Trading as part of the capstone collaboration for ARsemble. The website was created to strengthen the company\u2019s online presence and provide a dedicated section for users to learn about and download the ARsemble application.',
    responsibilities: [
      'Designed and developed responsive layouts optimized for desktop and mobile devices.',
      'Built reusable frontend components using React, TypeScript, and Vite.',
      'Integrated a dedicated section promoting the ARsemble application for client distribution.',
      'Focused on clean UI design and maintainable frontend architecture.',
    ],
    technologies: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/mxrooby/smfp-website',
    takeaway:
      'This project strengthened my frontend development, responsive design, component-based architecture, and client-facing website development experience.',
    previews: [
      { file: '/assets/projects/smfp-computer-trading/smfp-homepage-preview.png', type: 'image', device: 'laptop' },
      { file: '/assets/projects/smfp-computer-trading/smfp-mobile-preview.jpeg', type: 'image', device: 'phone' },
    ],
  },
];
