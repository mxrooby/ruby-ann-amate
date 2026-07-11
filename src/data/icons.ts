const ICON_DIR = '/assets/icons/windows-xp';

function icon(name: string): string {
  return `${ICON_DIR}/${encodeURIComponent(name)}.ico`;
}

/**
 * Browsers cannot render .ico as an <img> in every case reliably, but Chrome/Firefox/Safari
 * all support .ico via <img src>. We centralize the mapping here so components never
 * hardcode raw filenames (per TECHNICAL_REQUIREMENTS: configuration-driven, easy to extend).
 */
export const XP_ICONS = {
  myComputer: icon('Computer Folder'),
  myDocuments: icon('My Documents'),
  myPictures: icon('My Pictures'),
  myMusic: icon('My Music'),
  myVideos: icon('My Videos'),
  closedFolder: icon('Closed folder'),
  openFolder: icon('Open Folder'),
  newFolder: icon('New Folder'),
  windowsExplorer: icon('Windows Explorer'),
  controlPanel: icon('Control Panel Folder'),
  allPrograms: icon('All Programs'),
  fonts: icon('Fonts'),
  networkDocuments: icon('Network Documents'),
  sharedFolders: icon('My shared Folders'),
  earthFolder: icon('Folders with Earth'),
  printerFolder: icon('Printer Folder'),
  dialUp: icon('Dial-Up Folder'),
};

/** Icons supplied later in added_icons.zip — real assets replacing earlier placeholders. */
const ADDED_ICON_DIR = '/assets/icons/added';
export const ADDED_ICONS = {
  commandPrompt: `${ADDED_ICON_DIR}/command-prompt.ico`,
  recycleBin: `${ADDED_ICON_DIR}/recycle-bin.ico`,
  shutdown: `${ADDED_ICON_DIR}/shutdown.ico`,
};
