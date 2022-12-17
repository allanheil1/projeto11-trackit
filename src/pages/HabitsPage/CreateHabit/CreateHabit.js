import Weekdays from '../../../components/Weekdays/Weekdays';
import { CreateHabitStyle, ButtonsWrapper, Button } from './style';

export default function CreateHabit() {
    return (
      <>
        <CreateHabitStyle>
            <input placeholder='nome do hábito 'type='text'/>
            <Weekdays />
            <ButtonsWrapper>
                <Button type='cancelar'> Cancelar </Button>
                <Button type='salvar'> Salvar </Button>
            </ButtonsWrapper>
        </CreateHabitStyle>
      </>
    );
  }