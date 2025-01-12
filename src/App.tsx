

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import FAQ from './Pages/FAQ';
import Applies from './Pages/Applies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} /> 
        <Route path="/faq" element={<FAQ />} />
        <Route path="/applies" element={<Applies/>} />
      </Routes>
    </Router>
  );
}

export default App;
