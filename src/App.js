import './App.css';

import { useReducer, useMemo } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Login from './view/Login'
import Index from './view/Index';
import NotFound from './view/NotFound';
import KakaoCallback from './view/KakaoCallback';

import MainContext, {initialState, reducer} from './context/MainContext';

function App() {

  const [state, dispatcher] = useReducer(reducer, initialState);

  const contextValue = useMemo( () => {
    return {state, dispatcher};
  }, [state, dispatcher]);

  return (
    <MainContext.Provider value={contextValue}>
      <Router>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/login" element={<Login />} />
            <Route path ="/callback/kakao" element={<KakaoCallback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
