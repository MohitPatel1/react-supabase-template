import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import StarTunnelHero from '../StarLightTunnelSection/AbstractStarLightFuturistic';
import WhiteFlash from './WhiteFlash';
import HeroSection from '../HeroSection/HeroSection';

type Phase = 'tunnel' | 'flash' | 'hero';

const IntroTransition = () => {
  const [phase, setPhase] = useState<Phase>('tunnel');
  const [shouldRespectReducedMotion, setShouldRespectReducedMotion] =
    useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldRespectReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldRespectReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (shouldRespectReducedMotion) {
      // Skip animation instantly for reduced motion
      setPhase('hero');
      return;
    }

    // Phase 1: Tunnel (0-5s)
    const tunnelTimer = setTimeout(() => {
      setPhase('flash');
    }, 5000);

    // Phase 2: Flash (5-5.3s) - handled by WhiteFlash component
    // Phase 3: Hero (5.3s+) - handled by WhiteFlash completion

    return () => {
      clearTimeout(tunnelTimer);
    };
  }, [shouldRespectReducedMotion]);

  const handleTunnelComplete = () => {
    // Early completion if tunnel finishes before timeout
    if (phase === 'tunnel') {
      setPhase('flash');
    }
  };

  const handleFlashComplete = () => {
    setPhase('hero');
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* Phase 1: Star Tunnel */}
      {phase === 'tunnel' && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <StarTunnelHero onComplete={handleTunnelComplete} />
        </Box>
      )}

      {/* Phase 2: White Flash */}
      {phase === 'flash' && <WhiteFlash onComplete={handleFlashComplete} />}

      {/* Phase 3: Hero Section */}
      {phase === 'hero' && <HeroSection show={true} />}
    </Box>
  );
};

export default IntroTransition;

