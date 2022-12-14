import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HabitsPage from './pages/HabitsPage/HabitsPage';
import GlobalStyle from './styles/globalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Margin>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/cadastro' element={<SignUpPage />}/>
          <Route path='/habitos' element={<HabitsPage />}/>
        </Routes>
      </BrowserRouter>
      </Margin >
    </>
  );
}

const Margin = styled.div`
  margin-top: 70px;
  margin-bottom: 91px;
`


