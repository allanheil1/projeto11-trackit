import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Habit from './Habit/Habit';
import CreateHabit from './CreateHabit/CreateHabit';
import { HabitsPageStyle, MyHabits, EmptyMessage, Button } from './style';
import UserContext from '../../contexts/UserContext';

export default function HabitsPage(){

    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState([]); 
    const [emptyMessageView, SetEmptyMessageView] = useState(true);
    const [isCreatingHabit, setIsCreatingHabit] = useState(false);

    useEffect(() => {
      getHabits();
    }, []);

    function showCreateHabit(){
      setIsCreatingHabit(!isCreatingHabit);
    }

    function getHabits(){
      const config = { headers: {Authorization: `Bearer ${token}`}};
      const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

      promise.then((res) => {
        setHabits(res.data);
        //caso venha dados, nao precisamos mais mostrar a mensagem de 'não há hábitos'
        SetEmptyMessageView(false);
      });

      promise.catch((err) => {
        const errorMsg = err.response.statusText;
        alert(`Erro: ${errorMsg}`);
      });
    }

    if((emptyMessageView && habits.length === 0)){
      return(
        <>
        <Header />
        <HabitsPageStyle>
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
        </HabitsPageStyle>
        <Footer />
      </>  
      );
    }

    return(
      <>
        <Header />
        <HabitsPageStyle>

          <MyHabits>
            <h1> Meus hábitos </h1>
            <Button onClick={showCreateHabit} data-test='habit-create-btn'> + </Button>
          </MyHabits>

          {isCreatingHabit && <CreateHabit setIsCreatingHabit={setIsCreatingHabit} getHabits={getHabits}/>}

          {(habits.length === 0) && 
          <EmptyMessage> 
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
          </EmptyMessage>}

          {habits.map((h, index) => 
            <Habit
              key={index}
              habitName={h.name}
              habitDays={h.days}
              habitId={h.id}
              getHabits={getHabits}
            />
          )}

        </HabitsPageStyle>
        <Footer />
      </>  
    );
  }