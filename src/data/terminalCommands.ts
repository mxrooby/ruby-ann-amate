export type CommandOutput = string | string[];

export interface CommandContext {
  openApp: (appId: string, props?: Record<string, unknown>) => void;
  restoreAll: () => void;
  openStartMenu: () => void;
  shutdown: () => void;
  clear: () => void;
  playMatrix: () => void;
  playBee: () => void;
}

export interface CommandDef {
  /** Primary command name, matched case-insensitively. */
  name: string;
  /** Alternate names that behave identically. */
  aliases?: string[];
  description: string;
  /** Hidden commands are not listed in `help`. */
  hidden?: boolean;
  run: (args: string[], ctx: CommandContext) => CommandOutput | void;
}

const randomFrom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const quotes = [
  '"Every day is an opportunity to learn something new." - Ruby',
  '"Little by little, at my own pace." - Ruby',
  '"Some of my best ideas come when everything is quiet." - Ruby',
  '"Make it a little better than yesterday." - Ruby',
];

const moods = [
  'Currently: heads-down building something new.',
  'Currently: fueled by coffee and curiosity.',
  'Currently: debugging, but making progress.',
  'Currently: excited about opportunities. (hint hint)',
];

export const STARTUP_LINES = [
  'Hi! I\'m Ruby.',
  '',
  '\u2022 Backend Developer \u2022 Frontend Developer \u2022 Machine Learning Enthusiast',
  '\u2022 Everything Everywhere All at Once, I can be who I want to be',
  '',
  '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
  '',
  'Welcome to my portfolio.',
  '',
  'Quick Commands',
  'about       \u2192 Learn more about me',
  'whoami      \u2192 View my profile summary',
  'projects    \u2192 View selected projects',
  'experience  \u2192 Internship experience',
  'contact     \u2192 Get in touch',
  '',
  'Type "help" to view all available commands.',
];

export const ABOUT_LINES = [
  'Hi, I\'m Ruby.',
  '',
  'I enjoy building things that blend creativity with purpose.',
  '',
  'I\'m always looking for better ways to solve problems,',
  'learn new technologies, and improve what I create\u2014',
  'little by little, at my own pace.',
  '',
  'I believe every day is an opportunity to learn',
  'something new.',
  '',
  'Whether I\'m designing an interface, building a feature,',
  'or exploring a technology I\'ve never worked with before,',
  'I always try to make the most of every opportunity',
  'to learn.',
  '',
  'Some of my best ideas come when everything is quiet.',
  '',
  'That\'s usually when my creative juices start flowing,',
  'and I find myself building, redesigning,',
  'or simply trying to make something',
  'better than I did yesterday.',
];

export const commands: CommandDef[] = [
  {
    name: 'help',
    description: 'Display all available commands.',
    run: () => [
      'Portfolio Command Reference',
      '===========================',
      '',
      'Profile',
      '-------',
      '',
      'about          Learn more about me',
      'whoami         Profile summary',
      'education      Educational background',
      'skills         Technical skills',
      'tech           Tech stack',
      '',
      'Work',
      '----',
      '',
      'projects       Selected projects',
      'experience     Internship experience',
      'resume         Open resume',
      'contact        Contact information',
      '',
      'Media',
      '-----',
      '',
      'gallery        Photo gallery',
      'random         Random photos',
      'movies         Favorite films',
      'music          Music player',
      'spotify        Open playlist',
      'notes          Personal notes',
      '',
      'Socials',
      '-------',
      '',
      'github         Open GitHub profile',
      'linkedin       Open LinkedIn profile',
      'instagram      Open Instagram profile',
      'email          Email address',
      '',
      'Desktop',
      '-------',
      '',
      'desktop        Show desktop',
      'explorer       Open File Explorer',
      'internet       Launch Internet Explorer',
      'start          Open Start Menu',
      '',
      'System',
      '------',
      '',
      'systeminfo     System information',
      'status         Current status',
      'date           Current date',
      'time           Current time',
      'dir            List desktop items',
      'cls            Clear screen',
      'exit           Close Command Prompt',
      'secret         ???',
      '',
      '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
      '',
      'Type a command and press Enter.',
      '',
      'Keyboard Shortcuts',
      '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
      '\u2191 / \u2193      Browse command history',
      'Tab        Autocomplete command names',
      '',
      'Tip:',
      'Not every command is fully documented.',
      'Curiosity is rewarded.',
    ],
  },
  { name: 'about', description: 'Display About Me information.', run: () => ABOUT_LINES },
  { name: 'projects', description: 'Open Projects window.', run: (_a, ctx) => { ctx.openApp('projects'); } },
  { name: 'experience', description: 'Open Experience window.', run: (_a, ctx) => { ctx.openApp('experience'); } },
  { name: 'tech', description: 'Open Tech Stack window.', run: (_a, ctx) => { ctx.openApp('tech-stack'); } },
  {
    name: 'skills',
    description: 'Display technical skills.',
    run: () => [
      'Frontend: React, HTML5, CSS3, JavaScript, TypeScript, Vite',
      'Backend: PHP, Laravel, Node.js, Firebase',
      'ML & AI: Python, PyTorch, OpenCV, Gemini API, Gradio',
      'Databases: MySQL, MongoDB, SQLite, Firebase Firestore',
      'Tools: Git, GitHub, Figma, Unity',
    ],
  },
  { name: 'gallery', description: 'Open Gallery.', run: (_a, ctx) => { ctx.openApp('gallery'); } },
  { name: 'random', description: 'Open Random folder.', run: (_a, ctx) => { ctx.openApp('random'); } },
  { name: 'movies', aliases: ['movie'], description: 'Open Movie Library.', run: (_a, ctx) => { ctx.openApp('movies'); } },
  { name: 'music', aliases: ['spotify', 'playlist'], description: 'Open Music Player.', run: (_a, ctx) => { ctx.openApp('music-player'); } },
  { name: 'notes', description: 'Open Notes folder.', run: (_a, ctx) => { ctx.openApp('notes'); } },
  { name: 'resume', description: 'Open Resume viewer.', run: (_a, ctx) => { ctx.openApp('resume'); } },
  { name: 'contact', aliases: ['hire'], description: 'Open Contact Information.', run: (_a, ctx) => { ctx.openApp('contact'); } },
  { name: 'email', description: 'Open Gmail window.', run: () => { window.open('mailto:rubyannamate19@gmail.com'); return 'Opening email client...'; } },
  { name: 'github', description: 'Open GitHub profile.', run: () => { window.open('https://github.com/mxrooby', '_blank'); return 'Opening GitHub...'; } },
  { name: 'instagram', description: 'Open Instagram profile.', run: () => { window.open('https://instagram.com/mxrooby', '_blank'); return 'Opening Instagram...'; } },
  { name: 'linkedin', description: 'Open LinkedIn profile.', run: () => { window.open('https://www.linkedin.com/in/rubyannamate19/', '_blank'); return 'Opening LinkedIn...'; } },
  { name: 'explorer', description: 'Open My Portfolio / File Explorer.', run: (_a, ctx) => { ctx.openApp('my-portfolio'); } },
  { name: 'desktop', description: 'Restore all minimized windows.', run: (_a, ctx) => { ctx.restoreAll(); return 'Restoring all windows...'; } },
  { name: 'start', description: 'Open the Start Menu.', run: (_a, ctx) => { ctx.openStartMenu(); } },
  { name: 'internet', description: 'Open Internet Explorer.', run: (_a, ctx) => { ctx.openApp('internet-explorer'); } },
  {
    name: 'whoami',
    description: 'Display basic profile information.',
    run: () => [
      'User Information',
      '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
      '',
      'Name        : Ruby Ann S. Amate',
      'Role        : Backend Developer',
      '            : Frontend Developer',
      '            : Machine Learning Enthusiast',
      '',
      'Education   : B.S. Information Technology',
      '              Specialization in Data Analytics',
      '',
      'Location    : Makati City, Philippines',
      '',
      'Status      : UNEMPLOYED, JOBLESS',
      '',
      'Favorite OS : Ruby OS XP',
      '',
      'Portfolio   : Version 1.0',
    ],
  },
  {
    name: 'education',
    description: 'Display educational background.',
    run: () => ['Technological Institute of the Philippines', 'Bachelor of Science in Information Technology', 'Specialization in Data Analytics'],
  },
  { name: 'status', description: 'Show current status and focus.', run: () => 'Actively seeking entry-level software, web, and application development roles.' },
  {
    name: 'currently',
    description: 'Show current personal project.',
    run: () => ['Currently exploring: HC Operating System', 'An ongoing personal concept exploring an OS-inspired workspace that combines communication, project organization, and CRM-style workflows into a single application.', 'Status: planning / concept stage.'],
  },
  {
    name: 'favorites',
    description: 'Display favorite movies, food, hobbies, and interests.',
    run: () => ['Favorite films: Billie and Emma, Dagitab, Ekstra, Elemental, Moral, Oda sa Wala, Sing, Midsommar, 10 Things I Hate About You', 'Type "movies" to browse the full library.'],
  },
  { name: 'quote', description: 'Display a random personal quote.', run: () => randomFrom(quotes) },
  { name: 'mood', description: 'Display a random mood/status message.', run: () => randomFrom(moods) },
  { name: 'portfolio', description: 'Display portfolio information.', run: () => 'RubyXP \u2014 an interactive Windows XP-inspired portfolio. Explore the desktop, or type "help" for commands.' },
  { name: 'credits', description: 'Display portfolio credits.', run: () => ['Design & Development: Ruby Ann S. Amate', 'Built with React, TypeScript, and Vite', 'Inspired by Microsoft Windows XP'] },
  { name: 'winver', description: 'Display RubyXP version information.', run: () => 'RubyXP Portfolio \u2014 Version 1.0' },
  { name: 'ver', description: 'Display Windows XP Portfolio Edition version.', run: () => 'Windows XP [Portfolio Edition] [Version 5.1.2600]' },
  {
    name: 'systeminfo',
    description: 'Display humorous system specifications.',
    run: () => ['OS Name: RubyXP Professional', 'Processor: Curiosity Core i-Learn', 'Installed RAM: Unlimited ideas', 'Storage: 100% dedication', 'Uptime: Since June 2026 graduation'],
  },
  { name: 'cls', aliases: ['clear'], description: 'Clear terminal.', run: (_a, ctx) => { ctx.clear(); } },
  { name: 'dir', description: 'Display desktop shortcuts.', run: () => ['My Computer', 'My Portfolio', 'Command Prompt', 'Internet Explorer', 'Music Player', 'Recycle Bin'] },
  { name: 'date', description: 'Display current date.', run: () => new Date().toDateString() },
  { name: 'time', description: 'Display current time.', run: () => new Date().toLocaleTimeString() },
  { name: 'exit', description: 'Close Command Prompt window.', run: () => 'Use the X button to close this window.' },
  {
    name: 'secret',
    description: 'Reveal hidden commands.',
    run: () => [
      '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
      '',
      '      SECRET COMMANDS UNLOCKED',
      '',
      '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
      '',
      'You discovered one of the hidden features',
      'of this portfolio.',
      '',
      'Hidden Commands',
      '',
      '\u2022 easteregg',
      '\u2022 fuggler',
      '\u2022 ruby',
      '\u2022 mama',
      '\u2022 emi',
      '\u2022 xg',
      '\u2022 jollibee',
      '\u2022 matrix',
      '\u2022 bee',
      '\u2022 hi',
      '',
      'Not everything is meant to be explained.',
      'Some things are meant to be explored.',
    ],
  },
  { name: 'shutdown', description: 'Shut down the portfolio.', run: (_a, ctx) => { ctx.shutdown(); } },

  // Fun & personal & easter eggs
  { name: 'coffee', hidden: true, description: '', run: () => ['Loading coffee...', '\u2615', 'Ready.'] },
  { name: 'hello', hidden: true, description: '', run: () => 'Hello!! \ud83d\udc4b' },
  { name: 'hi', hidden: true, description: '', run: () => 'Hi!' },
  { name: 'jollibee', hidden: true, description: '', run: () => 'Bida ang saya!' },
  { name: 'bee', hidden: true, description: '', run: (_a, ctx) => { ctx.playBee(); return 'Bzzzzzz...'; } },
  { name: 'google', hidden: true, description: '', run: () => 'Have you tried Internet Explorer?' },
  { name: 'ping google.com', hidden: true, description: '', run: () => ['Request timed out.', 'Probably because this isn\'t a real terminal.'] },
  { name: 'chatgpt', hidden: true, description: '', run: () => 'Already helping Ruby behind the scenes.' },
  { name: 'claude', hidden: true, description: '', run: () => 'Helped build this desktop.' },
  { name: 'lovable', hidden: true, description: '', run: () => 'Prototype generator detected.' },
  { name: 'bug', hidden: true, description: '', run: () => 'Feature.' },
  { name: 'fix', hidden: true, description: '', run: () => ['Working...', 'Still broken.', 'Just kidding lolen eme lang charot chares'] },
  { name: 'salary', hidden: true, description: '', run: () => 'WHEN.' },
  { name: 'ruby', hidden: true, description: '', run: () => 'Ann S. Amate' },
  { name: 'mama', hidden: true, description: '', run: () => 'mama' },
  { name: 'xg', hidden: true, description: '', run: () => 'baby, say the names right, spell it out so you can learn it' },
  { name: 'emi', hidden: true, description: '', run: () => 'thasorn klinnium queen of employment pray for us.' },
  { name: 'easteregg', hidden: true, description: '', run: (_a, ctx) => { ctx.openApp('image-preview', { path: '/assets/gallery/gallery-photo-08.jpg', filename: 'gallery-photo-08.jpg' }); } },
  { name: 'fuggler', hidden: true, description: '', run: (_a, ctx) => { ctx.openApp('image-preview', { path: '/assets/gallery/gallery-photo-02.jpeg', filename: 'gallery-photo-02.jpeg' }); } },
  { name: 'matrix', hidden: true, description: '', run: (_a, ctx) => { ctx.playMatrix(); } },
  { name: 'hack', hidden: true, description: '', run: () => 'no. No. NO. nO. No no No no no' },
  { name: 'sudo', hidden: true, description: '', run: () => ['Nice try.', 'Administrator access denied.'] },
  { name: 'sudo rm -rf /', hidden: true, description: '', run: () => 'Absolutely not.' },
  { name: 'windows95', hidden: true, description: '', run: () => 'Wrong operating system.' },
  { name: 'linux', hidden: true, description: '', run: () => 'This computer respectfully disagrees.' },
  { name: 'macos', hidden: true, description: '', run: () => 'Maybe next version.' },
  {
    name: '404',
    hidden: true,
    description: '',
    run: () => ['A required file appears to be missing.', 'Windows \u2014 Application Error', '"404.exe" could not be located. Click OK to continue.'],
  },
  {
    name: 'thankyou',
    hidden: true,
    aliases: ['thank-you', 'thanks', 'thank u', 'thanku', 'thx', 'ty', 'tysm', 'thank you'],
    description: '',
    run: () => ['Thanks for visiting my portfolio.', 'I hope you enjoyed exploring it as much as I enjoyed building it.', '\u2014 Ruby'],
  },
];

/** Flattens command + aliases into a single lookup map, lowercased. */
export function buildCommandMap(): Map<string, CommandDef> {
  const map = new Map<string, CommandDef>();
  for (const cmd of commands) {
    map.set(cmd.name.toLowerCase(), cmd);
    for (const alias of cmd.aliases ?? []) {
      map.set(alias.toLowerCase(), cmd);
    }
  }
  return map;
}

export const visibleCommandNames = commands.filter((c) => !c.hidden).map((c) => c.name);
