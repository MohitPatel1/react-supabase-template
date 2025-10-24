import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFD93D',
      light: '#FFF176',
      dark: '#F6C90E',
      contrastText: '#2C2C2C',
    },
    secondary: {
      main: '#6BCB77',
      light: '#A8E6CF',
      dark: '#4A9B5F',
      contrastText: '#ffffff',
    },
    error: {
      main: '#FF6B6B',
      light: '#FF8787',
      dark: '#FF5252',
    },
    warning: {
      main: '#FFA500',
      light: '#FFB733',
      dark: '#E69400',
    },
    info: {
      main: '#00D9FF',
      light: '#33E1FF',
      dark: '#00B8D4',
    },
    success: {
      main: '#6BCB77',
      light: '#A8E6CF',
      dark: '#4A9B5F',
    },
    background: {
      default: '#FFF9E6',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Inter', 'DM Sans', sans-serif",
    h1: {
      fontFamily: "'Outfit', 'Poppins', sans-serif",
      fontSize: '3rem',
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Outfit', 'Poppins', sans-serif",
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h3: {
      fontFamily: "'Outfit', 'Poppins', sans-serif",
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "'Outfit', 'Poppins', sans-serif",
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.35,
    },
    body1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  shadows: [
    'none',
    '0 2px 8px rgba(0,0,0,0.05)',
    '0 4px 16px rgba(0,0,0,0.08)',
    '0 8px 32px rgba(0,0,0,0.12)',
    '0 12px 48px rgba(0,0,0,0.15)',
    '0 16px 64px rgba(0,0,0,0.18)',
    '0 20px 80px rgba(0,0,0,0.2)',
    '0 24px 96px rgba(0,0,0,0.22)',
    '0 28px 112px rgba(0,0,0,0.24)',
    '0 32px 128px rgba(0,0,0,0.26)',
    '0 36px 144px rgba(0,0,0,0.28)',
    '0 40px 160px rgba(0,0,0,0.3)',
    '0 44px 176px rgba(0,0,0,0.32)',
    '0 48px 192px rgba(0,0,0,0.34)',
    '0 52px 208px rgba(0,0,0,0.36)',
    '0 56px 224px rgba(0,0,0,0.38)',
    '0 60px 240px rgba(0,0,0,0.4)',
    '0 64px 256px rgba(0,0,0,0.42)',
    '0 68px 272px rgba(0,0,0,0.44)',
    '0 72px 288px rgba(0,0,0,0.46)',
    '0 76px 304px rgba(0,0,0,0.48)',
    '0 80px 320px rgba(0,0,0,0.5)',
    '0 84px 336px rgba(0,0,0,0.52)',
    '0 88px 352px rgba(0,0,0,0.54)',
    '0 92px 368px rgba(0,0,0,0.56)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          textTransform: 'none',
          fontSize: '1.125rem',
          padding: '12px 32px',
          transition: 'all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)'          
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          transition: 'all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)',          
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            fontSize: '1rem',
          },
        },
      },
    },
  },
});

export type Theme = typeof theme;

