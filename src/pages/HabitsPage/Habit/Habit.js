import WeekdaysShowOnly from '../../../components/Weekdays/WeekdaysShowOnly';
import { HabitStyle } from './style';
import Trashbin from '../../../assets/trashbin.png'

export default function Habit({ habitName, habitDays }) {
    return (
      <HabitStyle>
          <h1> {habitName} </h1>
          <img src={Trashbin} /> 
          <WeekdaysShowOnly habitDays={habitDays}/>
      </HabitStyle>
    );
  }