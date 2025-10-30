import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { nanoid } from 'nanoid';
import sunflowerVideo from '../../assets/videos/fly-over-field-of-blossom-yellow-sunflowers-slow-movement.webm';
import AnimatedText from './AnimatedText';

const HeroSection = memo(() => {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Video Background */}
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.6,
            filter: 'blur(0.5px) brightness(1.1)',
          }}
        >
          <source src={sunflowerVideo} type="video/webm" />
        </Box>

      {/* Gradient Overlay to blend video seamlessly */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, rgba(255, 249, 230, 0.7) 0%, rgba(255, 217, 61, 0.2) 50%, rgba(255, 249, 230, 0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* Subtle noise texture overlay for organic feel */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Vignette effect for depth */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(255, 249, 230, 0.3) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content Container */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          px: 4,
          maxWidth: '1200px',
        }}
      >
        <AnimatedText />
      </Box>

      {/* Floating particles effect */}
      {[...Array(6)].map((_, i) => {
        const particleId = nanoid();
        return (
          <Box
            key={particleId}
            component={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -100],
              x: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
              ease: 'easeOut',
            }}
            sx={{
              position: 'absolute',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#FFD93D',
              boxShadow: '0 0 10px rgba(255, 217, 61, 0.8)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </Box>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
