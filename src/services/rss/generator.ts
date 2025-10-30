/**
 * RSS Feed Generator Service
 * Generates RSS XML content from channel configuration
 */

import type { RSSChannel } from './types';

/**
 * Escapes XML special characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Generates RSS XML from channel configuration
 */
export function generateRSS(channel: RSSChannel): string {
  const items = channel.items
    .map((item) => {
      const categories = item.categories
        ? item.categories.map((cat) => `    <category>${escapeXml(cat)}</category>`).join('\n')
        : '';

      const imageTag = item.imageUrl
        ? `    <image>\n      <url>${escapeXml(item.imageUrl)}</url>\n    </image>`
        : '';

      // Always include escaped description
      const descriptionTag = `    <description>${escapeXml(item.description)}</description>`;

      // Include raw HTML in CDATA when content is present
      const contentEncodedTag = item.content
        ? `    <content:encoded><![CDATA[${item.content}]]></content:encoded>`
        : '';

      return `  <item>
    <title>${escapeXml(item.title)}</title>
    <link>${escapeXml(item.link)}</link>
    <guid isPermaLink="true">${escapeXml(item.guid || item.link)}</guid>
    <pubDate>${new Date(item.pubDate).toUTCString()}</pubDate>
    <author>${escapeXml(item.author)}</author>
${categories}
${imageTag}
${descriptionTag}
${contentEncodedTag}
  </item>`;
    })
    .join('\n');

  const copyright = channel.copyright
    ? `    <copyright>${escapeXml(channel.copyright)}</copyright>\n`
    : '';

  const managingEditor = channel.managingEditor
    ? `    <managingEditor>${escapeXml(channel.managingEditor)}</managingEditor>\n`
    : '';

  const webMaster = channel.webMaster
    ? `    <webMaster>${escapeXml(channel.webMaster)}</webMaster>\n`
    : '';

  const lastBuildDate = channel.lastBuildDate
    ? `    <lastBuildDate>${new Date(channel.lastBuildDate).toUTCString()}</lastBuildDate>\n`
    : '';

  const categoryTag = channel.category ? `    <category>${escapeXml(channel.category)}</category>\n` : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/" xmlns:webfeeds="http://webfeeds.org/rss/1.0" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(channel.title)}</title>
    <link>${escapeXml(channel.link)}</link>
    <description>${escapeXml(channel.description)}</description>
    <language>${channel.language}</language>
${categoryTag}${managingEditor}${webMaster}${copyright}${lastBuildDate}
${items}
  </channel>
</rss>
`;
}

/**
 * Creates a default RSS channel with sample items
 * This is a placeholder for future content integration
 */
export function createDefaultChannel(siteUrl: string, authorName: string, authorEmail: string): RSSChannel {
  const now = new Date().toISOString();
  
  return {
    title: 'Mohit Patel - Digital Presence',
    link: siteUrl,
    description: 'Latest updates, thoughts, projects, and mini-apps from Mohit Patel',
    language: 'en-us',
    copyright: `Copyright ${new Date().getFullYear()} Mohit Patel`,
    managingEditor: `${authorEmail} (${authorName})`,
    webMaster: `${authorEmail} (${authorName})`,
    lastBuildDate: now,
    items: [
      {
        title: 'Welcome to My Digital Presence',
        description: 'A delightful way to experience who I am and what I build. Explore my portfolio, mini-apps, and connect with me.',
        link: siteUrl,
        pubDate: now,
        author: `${authorEmail} (${authorName})`,
        categories: ['Announcement', 'Personal'],
        content: `
          <h2>Welcome to My Digital Presence</h2>
          <p>This is a living, breathing digital identity platform where you don't just see my work—you experience who I am.</p>
          <p>Explore my portfolio, try interactive mini-apps, read my thoughts, and connect with me.</p>
          <p><a href="${siteUrl}">Visit the site →</a></p>
        `,
      },
      {
        title: 'Mini-Apps Collection Launching Soon',
        description: 'Interactive experiences and tools that showcase my creativity and technical skills.',
        link: `${siteUrl}#mini-apps`,
        pubDate: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        author: `${authorEmail} (${authorName})`,
        categories: ['Development', 'Featured'],
        content: `
          <h2>Mini-Apps Collection</h2>
          <p>Stay tuned for a collection of interactive mini-applications!</p>
          <p>These will include games, tools, creative experiments, and more.</p>
        `,
      },
      {
        title: 'Follow My Journey',
        description: 'Join me on my journey of learning, building, and growing in the tech world.',
        link: `${siteUrl}#about`,
        pubDate: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        author: `${authorEmail} (${authorName})`,
        categories: ['Personal', 'Learning'],
        content: `
          <h2>About Me</h2>
          <p>I'm a passionate developer focused on creating delightful digital experiences.</p>
          <p>I believe in learning in public and building meaningful connections.</p>
        `,
      },
    ],
  };
}

