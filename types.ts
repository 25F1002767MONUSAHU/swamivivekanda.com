
export enum AppView {
  DASHBOARD = 'dashboard',
  CHRONICLES = 'chronicles',
  PHILOSOPHY = 'philosophy',
  SOCIAL_VISION = 'social_vision',
  INSTITUTIONS = 'institutions',
  LIBRARY = 'library',
  LEGACY = 'legacy',
  WISDOM_CHAT = 'wisdom_chat',
  EXPLORER = 'explorer'
}

export enum Language {
  EN = 'en',
  HI = 'hi'
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

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}
