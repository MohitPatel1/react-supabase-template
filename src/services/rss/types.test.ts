import { describe, expect, it } from 'vitest';
import type { RSSChannel, RSSFeedConfig, RSSItem } from './types';

describe('RSS Types', () => {
  describe('RSSItem', () => {
    it('should accept valid RSSItem structure', () => {
      const item: RSSItem = {
        title: 'Test Title',
        description: 'Test Description',
        link: 'https://example.com',
        pubDate: new Date().toISOString(),
        author: 'author@example.com',
      };

      expect(item.title).toBe('Test Title');
      expect(item.description).toBe('Test Description');
      expect(item.link).toBe('https://example.com');
      expect(item.pubDate).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
      expect(item.author).toBe('author@example.com');
    });

    it('should accept optional fields', () => {
      const item: RSSItem = {
        title: 'Test Title',
        description: 'Test Description',
        link: 'https://example.com',
        pubDate: new Date().toISOString(),
        author: 'author@example.com',
        categories: ['Tech', 'JavaScript'],
        content: '<p>HTML content</p>',
        imageUrl: 'https://example.com/image.jpg',
        guid: 'unique-id',
      };

      expect(item.categories).toEqual(['Tech', 'JavaScript']);
      expect(item.content).toBe('<p>HTML content</p>');
      expect(item.imageUrl).toBe('https://example.com/image.jpg');
      expect(item.guid).toBe('unique-id');
    });
  });

  describe('RSSChannel', () => {
    it('should accept valid RSSChannel structure', () => {
      const channel: RSSChannel = {
        title: 'Test Channel',
        link: 'https://example.com',
        description: 'Test Description',
        language: 'en-us',
        items: [],
      };

      expect(channel.title).toBe('Test Channel');
      expect(channel.link).toBe('https://example.com');
      expect(channel.description).toBe('Test Description');
      expect(channel.language).toBe('en-us');
      expect(channel.items).toEqual([]);
    });

    it('should accept optional fields', () => {
      const channel: RSSChannel = {
        title: 'Test Channel',
        link: 'https://example.com',
        description: 'Test Description',
        language: 'en-us',
        copyright: 'Copyright 2024',
        managingEditor: 'editor@example.com (Editor Name)',
        webMaster: 'webmaster@example.com (Webmaster)',
        pubDate: new Date().toISOString(),
        lastBuildDate: new Date().toISOString(),
        category: 'Technology',
        items: [],
      };

      expect(channel.copyright).toBe('Copyright 2024');
      expect(channel.managingEditor).toBe('editor@example.com (Editor Name)');
      expect(channel.webMaster).toBe('webmaster@example.com (Webmaster)');
      expect(channel.category).toBe('Technology');
      expect(channel.pubDate).toBeDefined();
      expect(channel.lastBuildDate).toBeDefined();
    });
  });

  describe('RSSFeedConfig', () => {
    it('should accept valid RSSFeedConfig structure', () => {
      const config: RSSFeedConfig = {
        siteUrl: 'https://example.com',
        authorName: 'Test Author',
        authorEmail: 'author@example.com',
      };

      expect(config.siteUrl).toBe('https://example.com');
      expect(config.authorName).toBe('Test Author');
      expect(config.authorEmail).toBe('author@example.com');
    });

    it('should accept optional fields', () => {
      const config: RSSFeedConfig = {
        siteUrl: 'https://example.com',
        authorName: 'Test Author',
        authorEmail: 'author@example.com',
        language: 'en-us',
        copyright: 'Copyright 2024',
        description: 'Site Description',
      };

      expect(config.language).toBe('en-us');
      expect(config.copyright).toBe('Copyright 2024');
      expect(config.description).toBe('Site Description');
    });
  });
});

