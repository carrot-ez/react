import './App.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Login from './view/Login'
import Index from './view/Index';
import NotFound from './view/NotFound';
import KakaoCallback from './view/KakaoCallback';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/login" element={<Login />} />
          <Route path ="/callback/kakao" element={<KakaoCallback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
