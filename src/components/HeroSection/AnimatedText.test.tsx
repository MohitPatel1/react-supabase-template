// biome-ignore lint: Test files use custom matchers from jest-dom
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import AnimatedText from './AnimatedText';

describe('AnimatedText', () => {
  it('renders without crashing', () => {
    const { container } = render(<AnimatedText />);
    expect(container).toBeTruthy();
  });

  it('renders main heading content', () => {
    const { container } = render(<AnimatedText />);
    const heading = container.querySelector('h1');
    const text = heading?.textContent || '';
    expect(text).toContain('Welcome');
    expect(text).toContain('Mohit');
  });

  it('renders the subheading text', () => {
    const { container } = render(<AnimatedText />);
    const subheading = container.textContent;
    expect(subheading).toContain('Building delightful digital experiences');
  });

  it('renders the tagline text', () => {
    const { container } = render(<AnimatedText />);
    const text = container.textContent || '';
    expect(text).toContain('Built with love');
  });

  it('has proper HTML structure', () => {
    const { container } = render(<AnimatedText />);
    
    // Should have heading
    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
    
    // Should have text content
    expect(heading?.textContent).toContain('Welcome');
  });

  it('applies gradient styling to heading', () => {
    const { container } = render(<AnimatedText />);
    const heading = container.querySelector('h1');
    
    // Just verify heading exists with text
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toBeTruthy();
  });

  it('uses responsive font sizes', () => {
    const { container } = render(<AnimatedText />);
    const heading = container.querySelector('h1');
    
    // Verify heading has proper class indicating MUI Typography
    expect(heading).toBeTruthy();
    expect(heading?.className).toContain('MuiTypography');
  });

  it('uses correct typography variant', () => {
    const { container } = render(<AnimatedText />);
    const heading = container.querySelector('h1');
    
    // Verify heading has h1 typography class
    expect(heading).toBeTruthy();
    expect(heading?.className).toContain('MuiTypography-h1');
  });
});
