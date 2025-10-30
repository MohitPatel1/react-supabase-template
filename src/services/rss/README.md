# RSS Feed Service

A production-ready RSS feed implementation for the personal identity platform.

## Overview

This service generates RSS 2.0 XML feeds for content syndication. The feed is statically generated at build time and updated with new content automatically.

## Features

- ✅ Full RSS 2.0 specification compliance
- ✅ XML escaping for special characters
- ✅ CDATA sections for HTML content
- ✅ Category support
- ✅ Image and media attachments
- ✅ Proper date formatting (UTC)
- ✅ Build-time generation
- ✅ Automatic feed link injection
- ✅ Comprehensive test coverage

## Usage

### Generate Feed

```bash
npm run generate:rss
```

This will create `public/feed.xml` with default placeholder content.

### During Build

The feed is automatically generated during the build process:

```bash
npm run build
```

The feed will be available at `/feed.xml` on your deployed site.

## Configuration

Update environment variables in your `.env` file:

```env
VITE_SITE_URL=https://yoursite.com
VITE_AUTHOR_NAME="Your Name"
VITE_AUTHOR_EMAIL=your@email.com
```

## Adding Real Content

To integrate with your actual content (blog posts, projects, etc.):

1. **Create a content service** that fetches your content from Supabase or other sources
2. **Transform your content** into `RSSItem[]` format
3. **Update the `createDefaultChannel` function** or create a custom channel factory
4. **Call `generateRSS(channel)`** to create the XML

### Example: Using Supabase Content

```typescript
import { createDefaultChannel, generateRSS } from './generator';
import { supabase } from '@/lib/supabase';

async function generateFeedWithRealContent() {
  // Fetch blog posts from Supabase
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(20);

  // Transform to RSS items
  const items: RSSItem[] = posts.map(post => ({
    title: post.title,
    description: post.excerpt,
    link: `${SITE_URL}/posts/${post.slug}`,
    pubDate: post.created_at,
    author: `${AUTHOR_EMAIL} (${AUTHOR_NAME})`,
    categories: post.tags,
    content: post.content_html,
    imageUrl: post.featured_image,
    guid: `post-${post.id}`,
  }));

  // Create channel
  const channel = {
    ...baseChannel,
    items,
  };

  // Generate XML
  return generateRSS(channel);
}
```

## Feed Location

Once deployed, the feed will be available at:
- Production: `https://mohit.life/feed.xml`
- Development: `http://localhost:5173/feed.xml`

## Browser Integration

The RSS feed link is automatically added to your HTML `<head>` in `index.html`:

```html
<link rel="alternate" type="application/rss+xml" 
      title="Mohit Patel - RSS Feed" 
      href="/feed.xml" />
```

This allows browsers and RSS readers to discover your feed automatically.

## Testing

Run tests for the RSS service:

```bash
npm run test:run -- src/services/rss
```

## Files

- `types.ts` - TypeScript interfaces for RSS data structures
- `generator.ts` - Core RSS XML generation logic
- `generator.test.ts` - Unit tests for RSS generation
- `types.test.ts` - Type validation tests
- `index.ts` - Service exports

## RSS 2.0 Features Supported

- ✅ Title, Link, Description
- ✅ Language, Copyright
- ✅ Managing Editor, Web Master
- ✅ Last Build Date
- ✅ Categories
- ✅ Individual item titles, links, descriptions
- ✅ Publication dates
- ✅ Authors
- ✅ GUID (globally unique identifiers)
- ✅ Content (via CDATA)
- ✅ Images and media
- ✅ Proper XML namespaces

## Future Enhancements

- [ ] Atom 1.0 feed support
- [ ] Podcast RSS format (if needed)
- [ ] Feed validation endpoint
- [ ] Sitemap integration
- [ ] Content hash for change detection
- [ ] Feed analytics

## References

- [RSS 2.0 Specification](http://www.rssboard.org/rss-specification)
- [W3C Feed Validation Service](https://validator.w3.org/feed/)

