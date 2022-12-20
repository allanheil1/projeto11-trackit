import axios from 'axios';
import dayjs from 'dayjs';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { ThreeDots } from 'react-loader-spinner';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TodayHabit from './TodayHabit/TodayHabit';
import { TodayPageStyle, TodayTitle, EmptyMessage } from './style';

export default function HabitsPage() {

    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const { token, setProgressPerc } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);
    const [subHeading, setSubHeading] = useState('Nenhum Hábito concluido ainda!');
    const [qtyTodayHabitsDone, setqtyTodayHabitsDone] = useState(0);
    const [emptyMessageView, SetEmptyMessageView] = useState(true);

    useEffect(() => {
      getTodayHabits();
    }, []);

    function getTodayHabits(){
      const config = { headers: {Authorization: `Bearer ${token}`}};
      const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

      promise.then((res) => {
        const qtyTodayHabits = res.data.length;
        setTodayHabits(res.data);
        SetEmptyMessageView(false);
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

    if((emptyMessageView && todayHabits.length === 0)){
      return(
        <>
        <Header />
        <TodayPageStyle>
          <ThreeDots 
            height="100" 
            width="100" 
            radius="9"
            color="#52B6FF" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          /> 
        </TodayPageStyle>
        <Footer />
      </>  
      );
    }

    return (
      <>
        <Header />
        <TodayPageStyle>
          <TodayTitle qtyTodayHabitsDone={qtyTodayHabitsDone}>
            <h1 data-test='today'> {days[dayjs().day()]}, {dayjs().format('DD/MM')} </h1>
            <h2 data-test='today-counter'> {subHeading} </h2>
            {(todayHabits.length === 0) && 
              <EmptyMessage> 
                <h2>Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito para começar a trackear!</h2>
              </EmptyMessage>}
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