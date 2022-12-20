import axios from 'axios';
import { useContext } from 'react';

import UserContext from '../../../contexts/UserContext';
import WeekdaysShowOnly from '../../../components/Weekdays/WeekdaysShowOnly';
import { HabitStyle } from './style';
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
      <HabitStyle>
          <h1> {habitName} </h1>
          <img src={Trashbin} onClick={() => deleteHabit(habitId)}/> 
          <WeekdaysShowOnly habitDays={habitDays}/>
      </HabitStyle>
    );
  }