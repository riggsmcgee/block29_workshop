import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Player from './pages/Player';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
