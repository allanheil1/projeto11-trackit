import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Habit from './Habit/Habit';
import CreateHabit from './CreateHabit/CreateHabit';
import { HabitsPageStyle, MyHabits, EmptyMessage } from './style';

export default function HabitsPage() {
    return (
      <>
        <Header />
        <HabitsPageStyle>
          <MyHabits>
            <h1> Meus hábitos </h1>
            <button> + </button>
          </MyHabits>
          <EmptyMessage>
            Você não tem nenhum hábito cadastrado ainda. 
            Adicione um hábito para começar a trackear!
          </EmptyMessage>
          <CreateHabit />
          <Habit />
        </HabitsPageStyle>
        <Footer />
      </>
    );
  }