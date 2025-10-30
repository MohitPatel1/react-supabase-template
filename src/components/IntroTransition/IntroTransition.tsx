import { Box } from '@mui/material';
import { useState, useCallback } from 'react';
import StarTunnelHero from '../StarLightTunnelSection/AbstractStarLightFuturistic';
import WhiteFlash from './WhiteFlash';
import HeroSection from '../HeroSection/HeroSection';

type Phase = 'tunnel' | 'flash' | 'hero';

const IntroTransition = () => {
  const [phase, setPhase] = useState<Phase>('tunnel');
 
  // Memoize callbacks to prevent unnecessary rerenders
  const handleTunnelComplete = useCallback(() => {
    // Early completion if tunnel finishes before timeout
    setPhase((currentPhase) => {
      if (currentPhase === 'tunnel') {
        return 'flash';
      }
      return currentPhase;
    });
  }, []);

  const handleFlashComplete = useCallback(() => {
    setPhase('hero');
  }, []);

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
      {phase === 'hero' && <HeroSection />}
    </Box>
  );
};

export default IntroTransition;

