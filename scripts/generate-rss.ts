/**
 * RSS Feed Generation Script
 * Generates static RSS XML file at build time
 *
 * Usage: npm run generate:rss
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { createDefaultChannel, generateRSS } from '../src/services/rss/generator';

/**
 * Get environment variables for RSS feed
 */
function getRSSConfig() {
  // Get site URL from environment or default
  const siteUrl = process.env.VITE_SITE_URL || 'https://mohit.life';
  const authorName = process.env.VITE_AUTHOR_NAME || 'Mohit Patel';
  const authorEmail = process.env.VITE_AUTHOR_EMAIL || 'mohit@teziapp.com';

  return { siteUrl, authorName, authorEmail };
}

/**
 * Generate and save RSS feed
 */
function generateFeed() {
  console.log('🚀 Generating RSS feed...');

  const { siteUrl, authorName, authorEmail } = getRSSConfig();

  // Create channel with sample/default items
  const channel = createDefaultChannel(siteUrl, authorName, authorEmail);

  // Generate RSS XML
  const rssXML = generateRSS(channel);

  // Ensure public directory exists
  const publicDir = join(process.cwd(), 'public');
  mkdirSync(publicDir, { recursive: true });

  // Write RSS feed to public directory
  const outputPath = join(publicDir, 'feed.xml');
  writeFileSync(outputPath, rssXML, 'utf-8');

  console.log(`✅ RSS feed generated successfully: ${outputPath}`);
  console.log(`📊 Feed contains ${channel.items.length} items`);
  console.log(`🔗 Feed URL: ${siteUrl}/feed.xml`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateFeed();
}

export { generateFeed, getRSSConfig };

