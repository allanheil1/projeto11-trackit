import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TodayHabit from './TodayHabit/TodayHabit';
import { TodayPageStyle, TodayTitle } from './style';

export default function HabitsPage() {
    return (
      <>
        <Header />
        <TodayPageStyle>
          <TodayTitle>
            <h1> Segunda, 17/05 </h1>
            <h2>Nenhum hábito concluído ainda</h2>
          </TodayTitle>
          <TodayHabit />
        </TodayPageStyle>
        <Footer />
      </>
    );
  }