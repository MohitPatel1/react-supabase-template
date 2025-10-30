import { describe, expect, it } from 'vitest';
import { createDefaultChannel, generateRSS } from './generator';
import type { RSSItem } from './types';

describe('RSS Generator', () => {
  describe('generateRSS', () => {
    it('should generate valid RSS XML from channel', () => {
      const item: RSSItem = {
        // All required, no special characters
        title: 'Test Title',
        description: 'Test Description',
        link: 'https://example.com/test',
        pubDate: new Date('2024-01-01').toISOString(),
        author: 'test@example.com (Test Author)',
        categories: ['Test'],
      };

      const channel = {
        title: 'Test Channel',
        link: 'https://example.com',
        description: 'Test Description',
        language: 'en-us',
        items: [item],
      };

      const rss = generateRSS(channel);

      expect(rss).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(rss).toContain('<rss version="2.0"');
      expect(rss).toContain('<channel>');
      expect(rss).toContain('<title>Test Channel</title>');
      expect(rss).toContain('<link>https://example.com</link>');
      expect(rss).toContain('<description>Test Description</description>');
      expect(rss).toContain('<language>en-us</language>');
      expect(rss).toContain('<item>');
      expect(rss).toContain('<title>Test Title</title>');
      expect(rss).toContain('<link>https://example.com/test</link>');
      // Should handle missing optional fields gracefully (no guid or image, for example)
      expect(rss).not.toContain('<guid>');
      expect(rss).not.toContain('<image>');
    });

    it('should escape all XML unsafe characters in item and channel fields', () => {
      const item: RSSItem = {
        title: 'This & That <in> "quotes" \'and\' other & unsafe <chars> %',
        description: 'Check escape for <tags>, & symbols and "quotes".',
        link: 'https://example.com/special?query=<bad>&key=val&other="x"',
        pubDate: new Date().toISOString(),
        author: 'foo"bar@example.com & <someone>',
        content: '<script>const i=1;</script> & <xml />',
      };
      const channel = {
        title: 'C & <Channel> "For" XML',
        link: 'https://example.com',
        description: 'A channel with <bad> & "char"',
        language: 'en-us',
        items: [item],
      };

      const rss = generateRSS(channel);

      // Angle brackets must always be escaped
      expect(rss).not.toContain('<in>');
      expect(rss).not.toContain('<chars>');
      expect(rss).toContain('&lt;in&gt;');
      expect(rss).toContain('&lt;chars&gt;');
      // Ampersand escaping in all fields except inside CDATA
      expect(rss).toContain('This &amp; That');
      expect(rss).toContain('Check escape for &lt;tags&gt;, &amp; symbols');
      expect(rss).not.toContain('&key=val&other=');
      expect(rss).toContain('&amp;key=val&amp;other=');
      // Double quotes are not needed for character data but can be XML unsafe if in attribute (not tested here)
      expect(rss).toContain('&quot;quotes&quot;');
      expect(rss).toContain('&quot;For&quot; XML');
      // Single quote can remain as is for values
      // Ensure the author field is properly escaped
      expect(rss).toContain('foo&quot;bar@example.com &amp; &lt;someone&gt;');
      // Content should be wrapped in CDATA, no escaping inside
      expect(rss).toContain('<![CDATA[<script>const i=1;</script> & <xml />]]>');
    });

    it('should handle missing optional fields (no categories, no image, no content, no guid, etc.)', () => {
      const item: RSSItem = {
        title: 'Simple Item',
        description: 'No optional fields present.',
        link: 'https://example.com/simple',
        pubDate: new Date().toISOString(),
        author: 'nobody@example.com',
        // categories, imageUrl, guid, and content fields omitted
      };

      const channel = {
        title: 'Simple Channel',
        link: 'https://example.com',
        description: 'A channel with minimal fields.',
        language: 'en-us',
        // optional channel fields missing as well (e.g., no copyright)
        items: [item],
      };

      const rss = generateRSS(channel);

      // Should not include categories, image, or content fields
      expect(rss).not.toContain('<category>');
      expect(rss).not.toContain('<image>');
      expect(rss).not.toContain('<content:encoded>');
      expect(rss).toContain('<title>Simple Item</title>');
      expect(rss).toContain('<link>https://example.com/simple</link>');
      expect(rss).toContain('<description>No optional fields present.</description>');
      // Should handle missing guid field
      expect(rss).not.toContain('<guid>');
    });

    it('should include <category> only when categories provided', () => {
      const item: RSSItem = {
        title: 'Categorized Item',
        description: 'Has categories.',
        link: 'https://example.com/cat',
        pubDate: new Date().toISOString(),
        author: 'cat@example.com',
        categories: ['Category1', 'Category2'],
      };
      const itemNoCategory: RSSItem = {
        title: 'Uncategorized Item',
        description: 'No categories.',
        link: 'https://example.com/nocat',
        pubDate: new Date().toISOString(),
        author: 'nocat@example.com',
      };

      const channel = {
        title: 'Category Test Channel',
        link: 'https://example.com',
        description: 'Test',
        language: 'en-us',
        items: [item, itemNoCategory],
      };

      const rss = generateRSS(channel);

      expect(rss).toContain('<category>Category1</category>');
      expect(rss).toContain('<category>Category2</category>');
      // Ensure no empty/extra category tags for the item with no categories
      // Extract all <item> blocks and find the one with the target title to avoid cross-item matches
      const itemBlocks = rss.match(/<item>[\s\S]*?<\/item>/g) || [];
      const uncategorizedItemXml = itemBlocks.find((block) =>
        block.includes('<title>Uncategorized Item</title>'),
      ) || '';
      expect(uncategorizedItemXml).toBeTruthy();
      expect(uncategorizedItemXml).not.toContain('<category>');
    });

    it('should include <image> only when imageUrl provided', () => {
      const item: RSSItem = {
        title: 'Has Image',
        description: 'This item has an image.',
        link: 'https://example.com/img',
        pubDate: new Date().toISOString(),
        author: 'img@example.com',
        imageUrl: 'https://example.com/img.jpg',
      };
      const itemNoImage: RSSItem = {
        title: 'No Image',
        description: 'Item without image.',
        link: 'https://example.com/noimg',
        pubDate: new Date().toISOString(),
        author: 'noimg@example.com',
      };

      const channel = {
        title: 'Image Channel',
        link: 'https://example.com',
        description: 'Test channel with images',
        language: 'en-us',
        items: [item, itemNoImage],
      };

      const rss = generateRSS(channel);

      // Only the correct image is included; for items with no imageUrl, there should be no image block
      expect(rss).toContain('<image>');
      expect(rss).toContain('<url>https://example.com/img.jpg</url>');
      expect(rss).not.toMatch(/<item>[\s\S]*<title>No Image<\/title>[\s\S]*<image>/);
    });

    it('should use CDATA for content field if present', () => {
      const item: RSSItem = {
        title: 'Content Item',
        description: 'Regular',
        link: 'https://example.com',
        pubDate: new Date().toISOString(),
        author: 'cdata@example.com',
        content: '<h1>HTML & <bad> tags</h1><p>more</p>',
      };

      const channel = {
        title: 'CDATA Channel',
        link: 'https://example.com',
        description: 'Test',
        language: 'en-us',
        items: [item],
      };

      const rss = generateRSS(channel);

      // Description should always be present and escaped (not CDATA)
      expect(rss).toContain('<description>Regular</description>');
      expect(rss).toContain('<![CDATA[<h1>HTML & <bad> tags</h1><p>more</p>]]>');
      // Content field must be in <content:encoded>
      expect(rss).toContain('<content:encoded><![CDATA[<h1>HTML & <bad> tags</h1><p>more</p>]]></content:encoded>');
    });

    it('should format pubDate in RFC1123 (UTC) format', () => {
      // Carefully check UTC formatted date!
      const date = new Date('2024-01-01T06:07:08Z');
      const item: RSSItem = {
        title: 'Date UTC Item',
        description: 'Date Format check',
        link: 'https://example.com/time',
        pubDate: date.toISOString(),
        author: 'time@example.com',
      };

      const channel = {
        title: 'Date UTC Channel',
        link: 'https://example.com',
        description: 'Test',
        language: 'en-us',
        items: [item],
      };

      const rss = generateRSS(channel);

      // pubDate should be in RFC1123 format (UTC string, not ISO)
      expect(rss).toContain(`<pubDate>${date.toUTCString()}</pubDate>`);
      // Should NOT be in ISO format (the literal string)
      expect(rss).not.toContain(date.toISOString());
    });

    it('should allow missing optional item and channel fields', () => {
      const item: RSSItem = {
        title: 'No Optionals',
        description: 'Missing all optionals',
        link: 'https://example.com/req',
        pubDate: new Date().toISOString(),
        author: 'req@example.com',
      };

      const channel = {
        title: 'No Optional Channel',
        link: 'https://example.com',
        description: 'Only required fields.',
        language: 'en-us',
        items: [item],
      };

      const rss = generateRSS(channel);

      // No copyright, categories, or other item optionals
      expect(rss).not.toContain('<category>');
      expect(rss).not.toContain('<image>');
      expect(rss).not.toContain('<content:encoded>');
    });
  });

  describe('createDefaultChannel', () => {
    it('should create channel with correct metadata', () => {
      const channel = createDefaultChannel('https://example.com', 'Test Author', 'test@example.com');

      expect(channel.title).toBe('Mohit Patel - Digital Presence');
      expect(channel.link).toBe('https://example.com');
      expect(channel.description).toContain('Mohit Patel');
      expect(channel.language).toBe('en-us');
      expect(Array.isArray(channel.items)).toBe(true);
      expect(channel.items.length).toBeGreaterThan(0);
    });

    it('should include all required fields for every item and not require optional fields', () => {
      const channel = createDefaultChannel('https://example.com', 'Test Author', 'test@example.com');

      channel.items.forEach((item) => {
        expect(item.title).toBeDefined();
        expect(item.description).toBeDefined();
        expect(item.link).toBeDefined();
        expect(item.pubDate).toBeDefined();
        expect(item.author).toContain('test@example.com');
        // Omitted optional fields should either be undefined or absent
        expect(item.categories === undefined || Array.isArray(item.categories)).toBe(true);
        expect(item.content === undefined || typeof item.content === 'string').toBe(true);
        expect(item.imageUrl === undefined || typeof item.imageUrl === 'string').toBe(true);
      });
    });

    it('should set correct copyright year in UTC', () => {
      const channel = createDefaultChannel('https://example.com', 'Test Author', 'test@example.com');
      const currentYear = new Date().getUTCFullYear();

      expect(channel.copyright).toContain(currentYear.toString());
    });
  });
});

