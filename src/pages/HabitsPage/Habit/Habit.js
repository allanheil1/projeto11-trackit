import Weekdays from '../../../components/Weekdays/Weekdays';
import { HabitStyle } from './style';
import Trashbin from '../../../assets/trashbin.png'

export default function Habit({ habitName }) {
    return (
      <HabitStyle>
          <h1> {habitName} </h1>
          <img src={Trashbin} /> 
          <Weekdays />
      </HabitStyle>
    );
  }