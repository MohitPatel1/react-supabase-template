# Personal Identity Platform - Complete Project Context

## Project Overview

**Name**: Personal Identity Platform  
**Owner**: Moohit Patel  
**Type**: Production-grade personal website serving as digital presence  
**Purpose**: Establish personal brand, showcase skills, enable connections, learn advanced React

## Mission Statement

> **"The most delightful way to experience who I am and what I build"**

Every feature, interaction, and pixel must serve this mission. This is not just a portfolio—it's a living digital presence where visitors experience Mohit, not just view his work.

---

## Core Objectives

### Primary Goals
1. **Establish Personal Brand**: Create distinctive digital identity
2. **Digital Presence**: Be discoverable, memorable, shareable
3. **Master React**: Deep dive into advanced patterns, performance, best practices
4. **Showcase Skills**: Demonstrate coding excellence through the site itself

### Success Metrics (1 Year Vision)
- 100+ new connections reaching out
- Regular visits/interactions from friends
- Freelance project inquiries
- Viral sharing (visitors share naturally)
- Mastered advanced React patterns
- Active community (forum discussions, returning visitors)

### Visitor Journey Goals

**Feel About Me**: Creative, thoughtful, approachable, fun, technically skilled, genuine, authentic, someone worth knowing

**Know About Me**: Technical capabilities, personality, values, thoughts, philosophy, likes/dislikes, ideology, evolution

**Do Next**: Drop message (primary CTA), talk via chat/call, share website, return for personalized experience, engage with mini-apps, subscribe to newsletter, join community

---

## Technical Stack

### Frontend
- **Framework**: React 18+ (functional components only, no class components)
- **Language**: TypeScript (strict mode, no implicit any)
- **Build Tool**: Vite
- **UI Library**: Material UI (MUI) v5+
- **State Management**: Context API / Zustand (based on complexity)
- **Routing**: React Router v6 with code-splitting

### Backend & Services
- **Backend**: Supabase (auth, database, storage, real-time)
- **Hosting**: Vercel or Netlify

### Testing
- **Unit/Integration**: Vitest
- **Component Testing**: React Testing Library
- **User Events**: @testing-library/user-event
- **API Mocking**: MSW (Mock Service Worker)
- **E2E Testing**: Playwright
- **Assertions**: @testing-library/jest-dom

### Code Quality
- **Linting/Formatting**: Biome.js (strict rules)
- **Type Checking**: TypeScript strict mode
- **Documentation**: Storybook for components

### Explicitly Avoiding
- ❌ Tailwind CSS (using MUI exclusively)
- ❌ Next.js (using Vite + React)
- ❌ Vanilla JavaScript (TypeScript only)
- ❌ Class-based React (functional components only)
- ❌ Server-side rendering (client-side only)
- ❌ Custom CSS files (MUI styling only)

---

## Design System

### Color Philosophy: Sunflower Mornings
Inspired by bright sunflower fields at dawn—energetic, warm, optimistic, alive.

**Primary Palette**:
- Sunflower: #FFD93D (main brand)
- Golden: #FFA500 (golden hour)
- Bright Yellow: #FFF176 (morning light)
- Deep Gold: #F6C90E (sunflower center)

**Secondary Palette**:
- Sky Blue: #6BCB77 (fresh morning)
- Mint: #4D96A9 (cool breeze)
- Coral: #FF6B6B (sunrise)
- Lavender: #A78BFA (dawn)

**Accent Colors**:
- Electric Blue: #00D9FF (high energy)
- Hot Pink: #FF006E (playful)
- Lime Green: #B9FF66 (fresh)
- Purple: #8B5CF6 (creative)

**Neutrals**:
- Cream: #FFF9E6 (light background)
- Warm Gray: #F5F1E8 (subtle sections)
- Charcoal: #2C2C2C (text on light)
- Soft Black: #1A1A1A (dark background)

### Theme Modes (4 Total)
1. **Sunflower Mode** (default light): Cream background, sunflower primary, warm morning vibes
2. **Twilight Mode** (colored dark): Deep purple-blue gradient, golden pops, magical evening
3. **Forest Mode** (green dark): Deep forest green, lime/sunflower accents, natural calming
4. **Midnight Mode** (pure dark): Soft black, electric blue/sunflower, focused sophisticated

### Typography
- **Headings**: Outfit/Poppins (geometric, rounded, bold 700-900)
- **Body**: Inter/DM Sans (rounded, friendly, 400-600)
- **Accent**: Space Grotesk/Darker Grotesque (quirky, geometric, 500-700)
- **Code**: JetBrains Mono/Fira Code (400, 600)

**Type Scale**: Bold, dramatic headings (48px-72px), comfortable body (18px), pull quotes (32px)

### Design Characteristics
- **Visual Density**: Balanced, depends on section
- **Layout**: Asymmetric, artistic layouts (not centered/symmetric)
- **Navigation**: Creative, experimental
- **Animation**: High energy, playful, surprising
- **Cursor**: Custom cursor with contextual states
- **Interactions**: 3D elements, scroll-triggered animations, hover effects, gamification

### Personality Traits to Reflect
- Analytical & logical
- Creative & artistic
- Playful & humorous
- Curious & experimental
- Empathetic & people-focused

### Design Inspirations
- bruno-simon.com (playful 3D, interactive)
- david-hckh.com (creative layouts)
- pudding.cool (engaging storytelling)

---

## Feature Roadmap

### Phase 1: Foundation & First Impression (Weeks 1-4)
**Goal**: Launch MVP with stunning design and core identity

**Must-Have**:
- Hero section with impressive 3D animation
- About Me (story, philosophy, ideology, likes/dislikes)
- Complete MUI theme with 4 modes
- Creative navigation
- Contact hub (form, social links)
- Responsive design (mobile/tablet/desktop)
- Performance optimized
- One mini-app (first interactive experience)

**Technical Setup**:
- Vite + React + TypeScript structure
- MUI v5+ integration
- Biome.js configuration
- Git with conventional commits
- Environment setup (dev/staging/prod)
- Deployment pipeline

**Success Criteria**: Website live, friends say "Wow", design reflects personality, fast and smooth

---

### Phase 2: Interaction & Connection (Weeks 5-8)
**Goal**: Enable meaningful connections and engagement

**Features**:
- Real-time chat widget
- Calendly integration (book time)
- Newsletter signup (tag-based preferences)
- Social sharing (custom OG images)
- 2-3 mini-apps
- Blog/Quick tips section
- Comment system

**Authentication**:
- Supabase auth (email/password, social login)
- User profiles (basic info)
- Login/signup UI with animations

**Success Criteria**: Receiving messages, calendar bookings, newsletter subscribers, mini-apps being played

---

### Phase 3: Personalization Engine (Weeks 9-12)
**Goal**: Create adaptive, personalized experiences

**Features**:
- User dashboard (personal space)
- Preference system (theme, settings, favorites)
- Interaction tracking (what users explore)
- Personalized recommendations (content/apps based on behavior)
- Progress tracking (users see journey)
- Saved favorites (bookmark content/apps)
- Adaptive UI (interface changes based on user type)
- Activity feed (personal history)

**Advanced**:
- Customizable user profiles
- Achievements/badges (gamification)
- Quick access (most-used features)
- Returning visitor experience ("Welcome back!")

**Success Criteria**: Users creating accounts, personalized content visible, improved engagement, increased time spent

---

### Phase 4: Community & Collaboration (Weeks 13-16)
**Goal**: Build interactive community features

**Features**:
- Community forum (discussion board)
- Collaborative mini-apps (multi-user):
  - Collaborative drawing board
  - Multiplayer games
  - Shared problem-solving
- Social features:
  - Like/react to content
  - User comments/replies
  - User-to-user messaging
  - Activity feed
- Newsletter system (regular updates with tags)
- Content rating (rate mini-apps/content)

**Success Criteria**: Active forum, users collaborating, community feeling, newsletter engagement

---

### Phase 5: Content & Growth (Weeks 17-20)
**Goal**: Regular content and advanced features

**Features**:
- Video content (embed/showcase)
- Quick tips section (regular short-form)
- Advanced mini-apps (complex interactive)
- API playground (technical visitors)
- Code sandbox (live demos)
- Data visualizations (work/learning)
- GitHub integration (contributions/projects)
- Analytics dashboard (public stats)

**Success Criteria**: Weekly content publishing, growing mini-app collection, technical visitor engagement

---

### Phase 6: Polish & Scale (Ongoing)
**Goal**: Continuous improvement and optimization

**Features**:
- Performance optimization (aggressive)
- Advanced animations (complex interactions)
- Easter eggs (hidden surprises)
- A/B testing
- Advanced personalization (ML-based)
- Mobile app consideration (React Native)
- Offline mode (PWA)
- Voice interactions (experimental)

---

## Mini-Apps Collection

### Priority 1 - Launch First
- Tic-Tac-Toe: Simple, fun, shows interaction design
- Color Palette Generator: Practical, visually appealing
- Typing Speed Test: Gamified, shareable results
- Thought of the Day: Personal quotes, changes daily

### Priority 2 - Build Next
- Collaborative Whiteboard: Draw/brainstorm together
- Code Challenge: Daily puzzle with leaderboard
- Personality Quiz: "Which developer are you?"
- Music Visualizer: Audio-reactive graphics
- Pomodoro Timer: Productivity with gamification
- Pixel Art Creator: Simple drawing tool
- Haiku Generator: AI-powered or template-based

### Priority 3 - Advanced
- 3D Object Viewer: Three.js showcase
- Real-time Chat Room: Anonymous chat with themes
- Collaborative Story Writing: Community-driven
- Code Golf Challenge: Shortest code wins
- Data Dashboard: Visualize open datasets
- AI Chatbot: Chat with "digital me"
- Virtual Pet: Tamagotchi-style

### Priority 4 - Experimental
- Generative Art: Algorithm-based creation
- Sound Synthesizer: Web Audio API
- AR Experiences: WebXR experiments
- Motion Detection Games: Camera interaction
- Voice Commands: Speech recognition

**Mini-App Guidelines**:
- Fun and delightful
- Complete experience (not just demos)
- Shows different technical skills
- Shareable results
- Works on mobile
- Collaborative when possible

---

## Personalization System

### Tracked Data (Anonymous Users)
- Pages visited
- Time spent per section
- Mini-apps tried
- Scroll depth
- Click patterns
- Device type
- Returning visitor (cookie)
- Traffic source
- Theme preference
- Time of day

### Tracked Data (Logged-in Users)
All above, plus:
- Profile information
- Saved favorites
- Comments/reactions
- Mini-app progress
- Achievement unlocks
- Social connections
- Preferences set
- Content consumed
- Newsletter interactions
- Forum activity

### Adaptive UI
Different layouts for visitor types:
- **First-time**: Onboarding, exploration prompts
- **Returning**: Quick access to last viewed
- **Recruiter/Professional**: Work, resume, contact
- **Peer/Developer**: Technical content, code, mini-apps
- **Student/Learner**: Education, resources, tips

### Smart Recommendations
- "Based on what you've explored..."
- "You might also like..."
- "Trending among visitors like you..."
- "Finish where you left off..."

### Progress Tracking
- "You've explored 7 of 15 sections"
- "Try 3 more mini-apps to unlock badge"
- "You're on a 5-day streak!"
- Visual progress bars and metrics

### Gamification
**Achievements**:
- Explorer (visited all sections)
- First Friend (created account)
- App Master (tried 5+ apps)
- Night Owl (midnight theme)
- Contributor (comment/forum post)
- Streak Master (7 days in row)
- Completionist (finished all apps)
- Sharer (shared site)
- Early Adopter (first 100 users)
- Super Fan (1+ hour total)

**Rewards**:
- Custom themes unlock
- Special avatars
- Beta access
- Easter eggs
- Contributor badge
- Hall of fame

---

## Connection & Communication

### Real-time
- **Live Chat Widget**: All pages, online status, history for logged-in users, animations
- **Video Calls**: Calendly integration, multiple slot types, automated reminders, custom booking page

### Asynchronous
- **Contact Form**: Categories (project, question, friendship, feedback), file upload, quick templates, estimated response time
- **Newsletter**: Tag-based subscription (tech tips, projects, thoughts, mini-apps), beautiful templates, archive
- **Community Forum**: Category-based, upvoting/downvoting, thread subscriptions, moderation, rich text editor

### Social
- Share buttons (all platforms)
- Referral system (track referrers)
- Visitor comments (blog/projects)
- Reactions (emoji responses)
- Follow system (follow updates)

---

## Content Strategy

### Regular Content Types

**Quick Tips** (Weekly):
- 2-3 minute read
- Short actionable advice
- Code snippets
- Design principles
- Learning insights
- Shareable cards/graphics

**Video Content** (Bi-weekly):
- 5-10 minutes
- Mini-app tutorials
- Coding process
- Thought pieces
- Behind-the-scenes

**Projects/Case Studies** (Monthly):
- Deep dives into builds
- Problem-solving journeys
- Technical breakdowns
- Lessons learned

**Thoughts & Philosophy** (As inspired):
- Personal reflections
- Industry opinions
- Learning philosophy
- Values and ideology
- Longer-form writing

### Content Sections
- About Me (living document)
- Now Page (current focus)
- Uses (tools, tech stack, setup)
- Bookshelf (books/resources)
- Journey (timeline of evolution)
- Values (beliefs)

---

## Testing Strategy

### Testing Pyramid
- **60% Unit Tests** (Vitest): Fast, focused on utilities, hooks, business logic
- **30% Integration Tests** (React Testing Library): Component interactions, user perspective
- **10% E2E Tests** (Playwright): Critical user flows only

### Coverage Requirements
- **Overall**: 80% minimum (statements, branches, functions, lines)
- **Critical Paths** (services, hooks, utils): 90-95%
- **Build fails** if thresholds not met

### Coverage Configuration
```typescript
thresholds: {
  global: { statements: 80, branches: 80, functions: 80, lines: 80 },
  './src/services/': { statements: 95, branches: 90, functions: 95, lines: 95 },
  './src/hooks/': { statements: 90, branches: 85, functions: 90, lines: 90 },
  './src/utils/': { statements: 95, branches: 90, functions: 95, lines: 95 },
}
```

### What to Test

**Unit Tests (Vitest)**:
- Pure functions and utilities
- Custom hooks
- Business logic
- Calculations and transformations
- Edge cases (null, undefined, boundaries)

**Component Tests (RTL)**:
- User interactions (clicks, typing, navigation)
- Rendering with different props
- State changes from user perspective
- Error states and loading states
- Conditional rendering
- Accessibility (keyboard, ARIA, screen readers)

**E2E Tests (Playwright)**:
- Authentication flows (signup, login, logout)
- Critical user journeys (contact form, mini-app usage)
- Multi-step processes
- Cross-page interactions
- Real-time features

**NOT to Test**:
- Implementation details (state variables, methods)
- Third-party libraries (MUI internals)
- CSS styles (use visual regression)

### Testing Patterns

**TDD Workflow (Red-Green-Refactor)**:
1. Write failing test (Red)
2. Make test pass (Green)
3. Improve code (Refactor)

**AAA Pattern**:
- Arrange: Set up test data
- Act: Execute action
- Assert: Verify result

**Query Priority (RTL)**:
1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId (last resort)

### MSW Setup
Mock all API calls and Supabase interactions:
- Auth endpoints (signup, login, session)
- Database operations (CRUD)
- Storage operations (upload, download)
- Real-time subscriptions

### CI/CD Testing
GitHub Actions workflow includes:
- Unit tests with coverage
- Integration tests
- E2E tests (Playwright)
- Lighthouse performance audit
- Type checking (TypeScript)
- Linting (Biome.js)
- Bundle size analysis

**All tests must pass before merge to main**

### Test Scripts
```bash
npm run test                 # Run tests in watch mode
npm run test:coverage       # Generate coverage report
npm run test:integration    # Run integration tests
npm run test:e2e            # Run E2E tests
npm run test:e2e:ui         # Playwright UI mode
npm run test:visual         # Visual regression tests
npm run test:ci             # Full CI test suite
```

---

## Performance Requirements

### Targets
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Initial JS Bundle**: < 200KB gzipped
- **Lighthouse Score**: 95+ (all categories)

### Optimization Strategies

**Code Splitting**:
- Route-based lazy loading (React.lazy)
- Component-based dynamic imports
- Vendor bundle separation

**Memoization**:
- React.memo() for expensive components with stable props
- useMemo() for expensive calculations
- useCallback() for functions passed to memoized children
- Profile before optimizing (no premature optimization)

**Images & Assets**:
- WebP/AVIF formats with fallbacks
- Lazy loading (Intersection Observer)
- Responsive images
- CDN delivery

**List Rendering**:
- react-window or react-virtualized for large lists (>100 items)
- Pagination or infinite scroll
- Stable keys

**Animations**:
- GPU acceleration (transform, opacity only)
- Use will-change sparingly
- requestAnimationFrame for JS animations
- Prefer CSS animations
- 60fps target

---

## Accessibility (a11y)

### Requirements
- **WCAG 2.1 AA compliance**
- Full keyboard navigation
- Proper ARIA labels and roles
- Screen reader optimization (NVDA, VoiceOver)
- Color contrast ratios (4.5:1 for normal text, 3:1 for large)
- Semantic HTML elements

### Implementation
- Leverage MUI's built-in a11y features
- Focus indicators for all interactive elements
- Skip navigation links
- Alt text for all images
- Test with axe DevTools
- Respect prefers-reduced-motion

### Reduced Motion
When prefers-reduced-motion is enabled:
- Replace scroll animations with instant visibility
- Static positioning instead of parallax
- Remove/static particles
- Simple fades instead of complex animations
- Color/shadow changes instead of transforms

---

## File Organization

```
src/
├── features/              # Feature-based modules
│   ├── auth/
│   ├── profile/
│   ├── mini-apps/
│   └── ...
├── components/            # Shared components
│   ├── ui/               # MUI-based design system
│   └── common/           # Reusable business components
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
├── types/                # TypeScript type definitions
├── services/             # API and Supabase services
│   └── supabase/
│       ├── auth.ts
│       ├── database.ts
│       └── storage.ts
├── contexts/             # React Context providers
├── routes/               # Route definitions
├── theme/                # MUI theme configuration
├── mocks/                # MSW handlers
│   ├── handlers.ts
│   └── server.ts
└── main.tsx              # Entry point

tests/
├── e2e/                  # Playwright E2E tests
├── fixtures/             # Test data
├── utils/                # Test utilities
│   └── test-utils.tsx    # Custom render with providers
└── setup/                # Test configuration
```

---

## Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- **Utils**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Types/Interfaces**: PascalCase (e.g., `UserProfile`)
- **Test files**: Same name + `.test.tsx` (e.g., `Button.test.tsx`)
- **E2E tests**: kebab-case + `.spec.ts` (e.g., `auth-flow.spec.ts`)

---

## Git Workflow

### Commit Standards
- Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`
- Descriptive messages
- Atomic commits
- Reference issues when applicable

### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: New features
- `fix/*`: Bug fixes
- `chore/*`: Maintenance

### Code Review Requirements
- All code must be reviewed
- Biome.js checks pass
- Tests pass with coverage maintained
- TypeScript compiles without errors
- Documentation updated

---

## Development Workflow

### Time Commitment
2-10 hours weekly, divided into phases

### Time Allocation
- 40% Feature development
- 30% Learning and experimentation
- 20% Content creation
- 10% Bug fixes and optimization

### Phase Duration
- Each phase: 3-4 weeks
- Weekly mini-goals
- Bi-weekly reviews
- Monthly major milestones

### Development Priorities
1. User-facing features first
2. Core over bells and whistles
3. Learning integrated with every feature
4. Incremental releases (ship small, ship often)
5. Feedback-driven priorities

### Code Quality Gates (Before Commit)
- [ ] Biome.js passes
- [ ] TypeScript compiles (no errors)
- [ ] Tests pass (>80% coverage critical paths)
- [ ] Lighthouse score >95
- [ ] No console errors/warnings
- [ ] Responsive on all devices
- [ ] Accessible (WCAG AA)

---

## Environment Configuration

### Required Environment Variables
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_APP_ENV=
VITE_GA_TRACKING_ID=
```

### Environments
- **Development**: Local with HMR
- **Staging**: Pre-production mirror
- **Production**: Optimized build

---

## Key Decisions Made

### Technology Choices
1. **React over Next.js**: Want to learn React deeply without framework abstractions, client-side rendering sufficient
2. **MUI over Tailwind**: Prefer component-based styling, Storybook integration, theming system
3. **TypeScript strict mode**: Catch errors early, better IDE support, production-grade code
4. **Vite over CRA**: Faster dev experience, better build optimization
5. **Supabase**: All-in-one backend (auth, database, storage, real-time), easy to start
6. **Biome over ESLint/Prettier**: Single tool for linting and formatting, faster

### Design Choices
1. **4 theme modes**: More interesting than just light/dark, shows creativity
2. **Asymmetric layouts**: Breaks away from boring centered designs, more artistic
3. **High-energy animations**: Reflects personality, makes site memorable
4. **Custom cursor**: Unique interaction pattern, desktop enhancement
5. **Sunflower color scheme**: Personal, warm, energetic, different from typical blue portfolios

### Architecture Choices
1. **Feature-based structure**: Scales better than file-type structure
2. **No custom CSS**: MUI only for consistency and maintainability
3. **Progressive phases**: Build incrementally, learn as you go
4. **Testing first**: No code to production without tests
5. **Personalization core**: Not an add-on, built-in from start

---

## Important Principles

### Development Principles
1. **Delight over boring**: If it can be more fun, make it more fun
2. **Personal over generic**: Infuse personality everywhere
3. **Learning over shortcuts**: Do it right, learn deeply
4. **Users over metrics**: Real connections matter more than numbers
5. **Progress over perfection**: Ship and iterate, don't over-polish
6. **Performance is UX**: Fast, smooth, delightful always
7. **Accessible for all**: Everyone should enjoy the experience

### Testing Principles
1. **Test behavior, not implementation**: Focus on what users see/do
2. **Write readable tests**: Clear names, well-organized, minimal setup
3. **Keep tests independent**: Each test runs in isolation
4. **Test one thing at a time**: One logical assertion per test
5. **Maintain test code quality**: Tests are first-class code
6. **Mock external dependencies**: Control test environment
7. **Test edge cases**: Null, undefined, boundaries, errors
8. **Keep tests fast**: Unit tests milliseconds, integration <1s, E2E <5s each

### Design Principles
1. **Test with confidence, ship with pride**
2. **Every commit should ask: "Does this feel like me?"**
3. **If it's not tested, it's broken**
4. **The website should feel like visiting Mohit in person**
5. **Built just for you - personalization at core**

---

## Voice & Tone

### Communication Style
- **Humorous and witty** throughout
- Conversational, not formal
- Personal, not corporate
- Approachable, not intimidating

### Examples

**Error Messages**:
- ❌ "Error 404"
- ✅ "Oops! This page is playing hide and seek 🙈"

**Loading States**:
- ❌ "Loading..."
- ✅ "Brewing something special... ☕"

**Success Messages**:
- ❌ "Success"
- ✅ "Woohoo! That worked perfectly! 🎉"

**Empty States**:
- ❌ "No items found"
- ✅ "Nothing here yet, but that's about to change! ✨"

**Call to Actions**:
- ❌ "Submit"
- ✅ "Let's do this!" or "Send it! 🚀"

---

## Unresolved / To Decide Later

### Technical Decisions Pending
- State management: Context API or Zustand? (Decide based on complexity when building)
- Analytics service: Google Analytics 4 or privacy-focused alternative?
- Error monitoring: Sentry or alternatives?
- Email service: For newsletter and notifications
- Payment processing: If monetization needed (Phase 6+)

### Design Decisions Pending
- Exact hero animation type (3D scene with Three.js? Particle system? Interactive game?)
- Navigation pattern (floating, radial menu, or side drawer?)
- First mini-app to build (Tic-Tac-Toe for simplicity or something more impressive?)

### Feature Priorities Flexible
- Order of mini-apps can change based on inspiration
- Community features timing depends on user growth
- Content publishing schedule will adapt to available time

---

## Next Immediate Actions

### This Week
1. Finalize project structure (create directory skeleton)
2. Setup Vite + React + TypeScript + MUI
3. Configure Biome.js with rules
4. Create base MUI theme with sunflower colors
5. Setup testing infrastructure (Vitest, RTL, Playwright)
6. Initialize Git repository with conventional commits
7. Create deployment pipeline (Vercel/Netlify)

### This Month
1. Complete Phase 1 features (hero, about, navigation, contact, first mini-app)
2. Deploy to production
3. Share with 10 friends for feedback
4. Start content creation (write first quick tip)
5. Plan Phase 2 features in detail

---

## Quick Reference Commands

```bash
# Development
npm run dev                 # Start dev server
npm run build              # Production build
npm run preview            # Preview production build

# Testing
npm run test               # Tests in watch mode
npm run test:coverage      # Generate coverage
npm run test:e2e           # Run E2E tests
npm run test:e2e:ui        # Playwright UI mode
npm run test:ci            # Full CI test suite

# Code Quality
npm run type-check         # TypeScript compilation check
npm run lint               # Run Biome checks
npm run lint:fix           # Auto-fix Biome issues

# Storybook
npm run storybook          # Start Storybook dev
npm run build-storybook    # Build static Storybook
```

---

## Context for AI Assistants

When continuing this project with AI:

1. **Always prioritize**: Testing, performance, accessibility, personalization
2. **Code style**: Functional React, TypeScript strict, MUI styling only, no custom CSS
3. **Testing required**: Every component/hook/utility must have tests before merge
4. **Design philosophy**: Playful, personal, high-energy, sunflower theme
5. **User focus**: Build for connections, not just showcasing
6. **Learning goal**: This is a learning project - explain patterns, teach React best practices
7. **Phase approach**: Currently in Phase 1 (Foundation), build progressively
8. **No shortcuts**: Do it right, even if slower - production-grade code only

### When Generating Code
- Always include TypeScript types
- Always include corresponding tests
- Use MUI components, never custom CSS
- Follow file organization structure
- Add JSDoc comments for complex logic
- Consider performance (memoization, code splitting)
- Ensure accessibility (ARIA labels, keyboard nav)
- Make it personal and fun (humor in copy, delightful interactions)

### When Generating Tests
- Follow testing pyramid (60% unit, 30% integration, 10% E2E)
- Test behavior, not implementation
- Include edge cases and error scenarios
- Use MSW for API mocking
- Ensure >80% coverage
- Write readable test names
- Use AAA pattern (Arrange-Act-Assert)

---

## Summary

This is a **production-grade personal identity platform** for Mohit Patel that serves as his complete digital presence. It's not just a portfolio—it's an interactive, living space where visitors experience Mohit through delightful interactions, mini-apps, and personalized content.

**Tech Stack**: React 18 + TypeScript + Vite + MUI + Supabase + comprehensive testing (Vitest + RTL + Playwright)

**Design**: Sunflower-themed, 4 color modes, asymmetric layouts, high-energy animations, custom cursor, playful personality

**Features**: Phased development (6 phases), mini-apps collection, personalization engine, community features, gamification, real-time chat, content publishing

**Testing**: 80% coverage minimum, TDD workflow, CI/CD integration, no code to production without tests

**Timeline**: 2-10 hours weekly, 3-4 weeks per phase, progressive development

**Goal**: 100+ connections, freelance projects, viral sharing, mastered React, active community—all while having fun and learning deeply.

---

**"The most delightful way to experience who I am and what I build"** 🌻✨