import { Link } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TodayHabit from './TodayHabit/TodayHabit';
import { TodayPageStyle, TodayTitle, EmptyMessage } from './style';

export default function HabitsPage() {

    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const { token, setProgressPerc } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [subHeading, setSubHeading] = useState('Nenhum Hábito concluido ainda!');
    const [qtyTodayHabitsDone, setqtyTodayHabitsDone] = useState(0);

    useEffect(() => {
      getTodayHabits();
    }, []);

    function getTodayHabits(){
      const config = { headers: {Authorization: `Bearer ${token}`}};
      const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

      promise.then((res) => {
        const qtyTodayHabits = res.data.length;
        setTodayHabits(res.data);
        let doneTodayHabits = 0;
        res.data.forEach(habit => {
          if(habit.done){
            doneTodayHabits++;
          }
        });
        if(res.data.length !== 0){
          let perc = (doneTodayHabits / qtyTodayHabits) * 100;
          setSubHeading(`${perc.toFixed(0)}% dos hábitos concluídos!`);
          setProgressPerc(perc);
          setqtyTodayHabitsDone(doneTodayHabits);
        }else{
          setSubHeading(`0% dos hábitos concluídos!`);
          setProgressPerc(0);
          setqtyTodayHabitsDone(0);
        }
      });

      promise.catch((err) => {
        const errorMsg = err.response.statusText;
        alert(`Erro: ${errorMsg}`);
      });
    }

    return (
      <>
        <Header />
        <TodayPageStyle>
          <TodayTitle qtyTodayHabitsDone={qtyTodayHabitsDone}>
            <h1> {days[dayjs().day()]}, {dayjs().format('DD/MM')} </h1>
            <h2> {subHeading} </h2>
          </TodayTitle>
          {todayHabits.length !== 0 && (
            todayHabits.map(h => (
            <TodayHabit 
              key={h.id}
              id = {h.id} 
              name={h.name}
              done={h.done}
              currentSequence={h.currentSequence}
              highestSequence={h.highestSequence}
              getTodayHabits={getTodayHabits}
            />))
          )}
        </TodayPageStyle>
        <Footer />
      </>
    );
  }