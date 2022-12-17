import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { HistoryPageStyle } from './style';

export default function HistoryPage() {
    return (
      <>
        <Header />
        <HistoryPageStyle>
            <h1> Histórico </h1>
            <h2> Em breve você poderá ver o histórico dos seus hábitos aqui! </h2>
        </HistoryPageStyle>
        <Footer />
      </>
    );
  }