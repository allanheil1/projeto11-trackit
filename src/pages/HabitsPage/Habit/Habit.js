import axios from 'axios';
import { useContext } from 'react';

import UserContext from '../../../contexts/UserContext';
import WeekdaysShowOnly from '../../../components/Weekdays/WeekdaysShowOnly';
import { HabitStyle, Box } from './style';
import Trashbin from '../../../assets/trashbin.png'

export default function Habit({ habitName, habitDays, habitId, getHabits }) {

  const { token } = useContext(UserContext);

    async function deleteHabit(id){
      if(window.confirm('Deseja realmente deletar esse hábito?')){
        await axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, 
        {headers: { 'Authorization': `Bearer ${token}`}});
        getHabits();
      }
    }

    return (
      <Box>
        <HabitStyle data-test='habit-container'>
            <h1 data-test='habit-name'> {habitName} </h1>
            <img src={Trashbin} onClick={() => deleteHabit(habitId)} data-test='habit-delete-btn'/> 
            <WeekdaysShowOnly habitDays={habitDays}/>
        </HabitStyle>
      </Box>
    );
  }