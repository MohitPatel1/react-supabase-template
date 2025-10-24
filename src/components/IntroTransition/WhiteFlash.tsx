import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface WhiteFlashProps {
  onComplete: () => void;
}

const WhiteFlash = ({ onComplete }: WhiteFlashProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 700); // Duration matches animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        times: [0, 0.1, 0.5, 1],
        duration: 0.7,
        ease: 'easeInOut',
      }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 0 200px rgba(255, 255, 255, 1) inset',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default WhiteFlash;

