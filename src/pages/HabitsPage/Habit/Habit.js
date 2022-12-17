import Weekdays from '../../../components/Weekdays/Weekdays';
import { HabitStyle } from './style';
import Trashbin from '../../../assets/trashbin.png'

export default function Habit() {
    return (
      <HabitStyle>
          <h1> nome do hábito </h1>
          <img src={Trashbin} /> 
          <Weekdays />
      </HabitStyle>
    );
  }