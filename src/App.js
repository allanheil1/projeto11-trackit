import styled from 'styled-components';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HabitsPage from './pages/HabitsPage/HabitsPage';
import TodayPage from './pages/TodayPage/TodayPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import GlobalStyle from './styles/globalStyle';
import UserContext from './contexts/UserContext';

export default function App() {

  const [token, setToken] = useState(null);
  const [userIcon, setUserIcon] = useState('');
  const [progressPerc, setProgressPerc] = useState(0);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ token, setToken, userIcon, setUserIcon, progressPerc, setProgressPerc }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/cadastro' element={<SignUpPage />}/>
            <Route path='/habitos' element={<HabitsPage />}/>
            <Route path='/hoje' element={<TodayPage />}/>
            <Route path='/historico' element={<HistoryPage />}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}


