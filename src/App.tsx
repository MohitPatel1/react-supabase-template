import { Box, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
      }}
    >
      <Typography variant="h1" gutterBottom>
        🌻 Welcome to My Mohit's Digital Presence
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Built with Love, Care, Coffee and a lot of Coding
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;

