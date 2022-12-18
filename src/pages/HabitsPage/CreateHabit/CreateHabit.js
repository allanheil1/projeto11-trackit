import axios from 'axios';
import { useState, useContext } from 'react';

import UserContext from '../../../contexts/UserContext';
import Weekdays from '../../../components/Weekdays/Weekdays';
import { CreateHabitStyle, ButtonsWrapper, Button } from './style';

export default function CreateHabit({ setIsCreatingHabit }) {

    const [daysSelected, setDaysSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [habitName, setHabitName] = useState('');
    const { token } = useContext(UserContext);

    function cancelCreation(){
      setIsCreatingHabit(false);
      setDaysSelected([]);
    }

    function checkHabit(){
      if(habitName === ''){
        alert('Insira o nome do hábito');
      }else if(daysSelected.length === 0){
        alert('Selecione os dias do hábito');
      }else{
        createHabitAPI();
      }
    }

    function createHabitAPI(){
      setIsLoading(true);
      const promise = axios.post(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
        { name: habitName, days: daysSelected },
        { headers: { 'Authorization': `Bearer ${token}` }}
      );
      promise.then((res) => {
        setIsLoading(false);
        setDaysSelected([]);
        setIsCreatingHabit(false);
        window.location.reload();
      });
      promise.catch((err) => {
        const errorMsg = err.response.statusText;
        setIsLoading(false);
        console.log(`Erro: ${errorMsg}`);
      });
    }

    return (
      <>
        <CreateHabitStyle>
            <input 
              placeholder='nome do hábito'
              type='text' 
              disabled={isLoading} 
              onChange={e => setHabitName(e.target.value)} 
              value={habitName} 
            />
            <Weekdays daysSelected={daysSelected} setDaysSelected={setDaysSelected}/>
            <ButtonsWrapper>
                <Button type='cancelar' onClick={cancelCreation} disabled={isLoading}> Cancelar </Button>
                <Button type='salvar' onClick={checkHabit} disabled={isLoading}> Salvar </Button>
            </ButtonsWrapper>
        </CreateHabitStyle>
      </>
    );
  }