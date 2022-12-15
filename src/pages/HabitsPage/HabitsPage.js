import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Habit from './Habit/Habit';
import { HabitsPageStyle, MyHabits, EmptyMessage } from './style';

export default function HabitsPage() {
    return (
      <>
        <Header />
        <HabitsPageStyle>
          <MyHabits>
            <div> Meus hábitos </div>
            <button> + </button>
          </MyHabits>
          <EmptyMessage>
            Você não tem nenhum hábito cadastrado ainda. 
            Adicione um hábito para começar a trackear!
          </EmptyMessage>
        </HabitsPageStyle>
        <Footer />
      </>
    );
  }