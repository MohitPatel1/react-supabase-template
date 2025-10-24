# Hero Section Component

## Overview
A full-viewport hero section featuring a sunflower field video background with seamless blending effects, animated text, and interactive elements.

## Features

### 1. **Video Background**
- Seamless sunflower field video (`fly-over-field-of-blossom-yellow-sunflowers-slow-movement.webm`)
- Auto-playing, looping, muted video
- Reduced opacity (0.6) with subtle blur and brightness filter
- Completely obscured by multiple overlays to look like a natural background

### 2. **Visual Effects & Layering**
Multiple overlays create a seamless, artistic look:

- **Gradient Overlay**: Sunflower-colored gradient (135deg) that blends the video
- **Noise Texture**: Subtle radial gradient dots for organic feel
- **Vignette Effect**: Radial gradient creating depth and focus on center content
- **Combined Effect**: The video is completely transformed into an artistic background

### 3. **Animated Text**
`AnimatedText.tsx` component with:
- Letter-by-letter staggered reveal animation
- Animated gradient text that shifts colors
- "Welcome to Mohit's Digital Presence" main heading
- Subheading: "Building delightful digital experiences"
- Tagline: "Built with love, care, coffee, and a lot of coding ☕"
- Spring physics for organic motion

### 4. **Floating Particles**
- 6 sunflower-colored particles
- Floating upward animation
- Opacity fade in/out
- Random positioning
- Infinite loop with delays


## Animation Timeline

```
0.0s  - Background fades in
0.5s  - Gradient overlay appears
1.0s  - Content container slides up
1.5s  - Text letters start appearing (staggered)
2.5s  - Particles start floating
3.0s  - All animations complete
```

## Technical Details

### Dependencies
- `@mui/material` - UI components
- `framer-motion` - Animations
- TypeScript support

### File Structure
```
src/components/HeroSection/
├── HeroSection.tsx      # Main component
├── AnimatedText.tsx     # Text animation component
├── index.ts             # Export
└── README.md            # This file
```

### Props
None - fully self-contained component

### Styling
- Uses MUI `sx` prop exclusively (no custom CSS)
- Responsive typography with breakpoints
- Sunflower color scheme (#FFD93D, #FFF9E6)
- Full viewport height (100vh)
- No scrolling in hero section

## Usage

```tsx
import HeroSection from './components/HeroSection';

function HomePage() {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
}
```

## Key Design Decisions

1. **No scrolling**: Fixed 100vh height ensures video stays visible
2. **Video opacity**: Reduced to 0.6 with filters to make it subtle
3. **Multiple overlays**: Combined effects create seamless blend
4. **Staggered animations**: Creates rhythm and visual interest
5. **Spring physics**: Organic, natural feeling motion
6. **Particle effects**: Adds life and dynamism without distraction

## Accessibility

- Video is muted and plays inline
- Content is readable with sufficient contrast
- Animations respect reduced motion preferences (via Framer Motion)

## Future Enhancements

- Custom cursor effects on hover
- Theme switcher widget
- Interactive 3D elements
- Audio-reactive particles
- Personalized greeting for returning visitors
- Navigation menu
- Mini-apps preview cards

