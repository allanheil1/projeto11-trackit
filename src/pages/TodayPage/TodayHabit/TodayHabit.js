import axios from 'axios';
import { useContext } from 'react';

import { Box, TodaytHabitStyle, CheckHabit, StyledText } from './style';
import UserContext from '../../../contexts/UserContext';

export default function TodayHabit({ id, name, done, currentSequence, highestSequence, getTodayHabits }) {

    const { token } = useContext(UserContext);

    function clickedHabit(){
      !done ? checkHabitDone() : uncheckHabitDone();
    }

    async function checkHabitDone(){
      await axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, 
        { },
        { headers: {'Authorization': `Bearer ${token}`}}
      );
      getTodayHabits();
      //setTimeout(() => {getTodayHabits()}, 1000);
      //promise.then(getTodayHabits());
    }

    async function uncheckHabitDone(){
      await axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, 
        { },
        { headers: {'Authorization': `Bearer ${token}`}}
      );
      getTodayHabits();
      //setTimeout(() => {getTodayHabits()}, 1000);
      //promise.then(getTodayHabits());
    }


  
    return (
      <Box>
        <TodaytHabitStyle done={done} high={highestSequence} current={currentSequence}>
          <h1> {name} </h1>
          <h2> Sequência atual: <span>{currentSequence} dias </span></h2>
          <h3> Seu recorde: <span>{highestSequence} dias </span></h3>
          <CheckHabit done={done} onClick={() => clickedHabit()}> ✓ </CheckHabit>
        </TodaytHabitStyle>
      </Box>
    );
}