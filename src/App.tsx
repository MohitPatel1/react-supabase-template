import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';

function HomePage() {
  return (
    <Box>
      <HeroSection />
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
