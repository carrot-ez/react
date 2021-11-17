import './App.css';

import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Login from './view/Login'
import Index from './view/Index';
import NotFound from './view/NotFound';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
