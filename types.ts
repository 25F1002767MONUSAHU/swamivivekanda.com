
export enum AppView {
  DASHBOARD = 'dashboard',
  CHRONICLES = 'chronicles',
  WISDOM_CHAT = 'wisdom_chat',
  YOGA_STUDIO = 'yoga_studio',
  SCRIBE = 'scribe',
  EXPLORER = 'explorer'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SearchResult {
  title: string;
  uri: string;
}

// Added GeneratedImage interface
export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}
