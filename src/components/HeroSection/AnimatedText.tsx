import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedText = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  const text = "Welcome to Mohit's Digital Presence";
  const letters = text.split('').map((letter, i) => ({ letter, id: `${letter}-${i}` }));
  
  return (
    <Box component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
      {/* Main Heading with letter-by-letter animation */}
      <Typography
        component={motion.h1}
        variant="h1"
        sx={{
          fontFamily: "'Outfit', 'Poppins', sans-serif",
          fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
          fontWeight: 900,
          background: 'linear-gradient(135deg, #2C2C2C 0%, #FFD93D 50%, #2C2C2C 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          mb: 2,
          position: 'relative',
          display: 'inline-block',
        }}
        variants={itemVariants}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
      >
        {letters.map(({ letter, id }, i) => (
          <motion.span
            key={id}
            custom={i}
            variants={letterVariants}
            // style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.span>
        ))}
      </Typography>

      {/* Subheading */}
      <Typography
        component={motion.div}
        variant="h3"
        sx={{
          fontFamily: "'Inter', 'DM Sans', sans-serif",
          fontSize: { xs: '1.25rem', md: '1.75rem' },
          fontWeight: 500,
          color: '#2C2C2C',
          opacity: 0.9,
          mt: 2,
        }}
        variants={itemVariants}
      >
        Building delightful digital experiences
      </Typography>

      {/* Tagline */}
      <Typography
        component={motion.div}
        variant="body1"
        sx={{
          fontSize: { xs: '1rem', md: '1.125rem' },
          color: '#666666',
          mt: 3,
          fontStyle: 'italic',
        }}
        variants={itemVariants}
      >
        Built with love 🥰, care 💖, coffee ☕, and a lot of coding 🌻
      </Typography>
    </Box>
  );
};

export default AnimatedText;
