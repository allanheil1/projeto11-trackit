import axios from 'axios';
import { useContext } from 'react';

import { Box, TodaytHabitStyle, CheckHabit } from './style';
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
        <TodaytHabitStyle>
          <h1> {name} </h1>
          <h2> Sequência atual: {currentSequence} dias </h2>
          <h3> Seu recorde: {highestSequence} dias </h3>
          <CheckHabit done={done} onClick={() => clickedHabit()}> ✓ </CheckHabit>
        </TodaytHabitStyle>
      </Box>
    );
}