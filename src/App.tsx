import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import IntroTransition from './components/IntroTransition';

function HomePage() {
  return (
    <Box>
      <IntroTransition />
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
