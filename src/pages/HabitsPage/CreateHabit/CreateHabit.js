import axios from 'axios';
import { useState, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import UserContext from '../../../contexts/UserContext';
import Weekdays from '../../../components/Weekdays/Weekdays';
import { CreateHabitStyle, ButtonsWrapper, Button } from './style';

export default function CreateHabit({ setIsCreatingHabit, getHabits }) {

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
        getHabits();
      });
      promise.catch((err) => {
        const errorMsg = err.response.statusText;
        setIsLoading(false);
        alert(`Erro: ${errorMsg}`);
      });
    }

    return (
      <>
        <CreateHabitStyle isLoading={isLoading} data-test='habit-create-container'>
            <input 
              placeholder='nome do hábito'
              type='text' 
              disabled={isLoading} 
              onChange={e => setHabitName(e.target.value)} 
              value={habitName}
              data-test='habit-name-input' 
            />
            <Weekdays daysSelected={daysSelected} setDaysSelected={setDaysSelected} isLoading={isLoading}/>
            <ButtonsWrapper>
                <Button type='cancelar' onClick={cancelCreation} disabled={isLoading} data-test='habit-create-cancel-btn' > Cancelar </Button>
                <Button type='salvar' onClick={checkHabit} disabled={isLoading} data-test='habit-create-save-btn' > 
                  {isLoading ? 
                    <ThreeDots 
                    height="50" 
                    width="50" 
                    radius="9"
                    color="white" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                  : 'Salvar'}  
                </Button>
            </ButtonsWrapper>
        </CreateHabitStyle>
      </>
    );
  }