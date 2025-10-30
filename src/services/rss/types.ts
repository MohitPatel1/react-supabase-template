/**
 * TypeScript types for RSS feed functionality
 */

export interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string; // ISO 8601 format
  author: string;
  categories?: string[];
  content?: string;
  imageUrl?: string;
  guid?: string;
}

export interface RSSChannel {
  title: string;
  link: string;
  description: string;
  language: string;
  copyright?: string;
  managingEditor?: string;
  webMaster?: string;
  pubDate?: string;
  lastBuildDate?: string;
  category?: string;
  items: RSSItem[];
}

export interface RSSFeedConfig {
  siteUrl: string;
  authorName: string;
  authorEmail: string;
  language?: string;
  copyright?: string;
  description?: string;
}

