import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { Gym } from './pages/Gym';
import { About } from './pages/About';
import { PageNotFound } from './pages/PageNotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh"}}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
