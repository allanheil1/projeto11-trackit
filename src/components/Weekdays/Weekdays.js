import { useState } from 'react';

import { WeekdaysStyle, WeekdayStyleButton } from './style'

let days = [
    {id: 0, letter: 'D', name: 'Domingo'},
    {id: 1, letter: 'S', name: 'Segunda-Feira'},
    {id: 2, letter: 'T', name: 'Terça-Feira'},
    {id: 3, letter: 'Q', name: 'Quarta-Feira'},
    {id: 4, letter: 'Q', name: 'Quinta-Feira'},
    {id: 5, letter: 'S', name: 'Sexta-Feira'},
    {id: 6, letter: 'S', name: 'Sábado'}
]

function Weekday({ id, daysSelected, setDaysSelected, dayLetter, isLoading }){

    const [isSelected, SetIsSelected] = useState(false);

    function selectDay(){
        let novoDaysSelected = daysSelected;
        if(novoDaysSelected.includes(id)){
            novoDaysSelected = novoDaysSelected.filter(item => item !== id);
            SetIsSelected(false);
        }else{
            novoDaysSelected = [...novoDaysSelected, id];
            SetIsSelected(true);
        }
        setDaysSelected(novoDaysSelected);
    }

    return(
        <WeekdayStyleButton onClick={selectDay} isSelected={isSelected} disabled={isLoading}>
            {dayLetter}
        </WeekdayStyleButton>
    );
}

export default function Weekdays( {daysSelected, setDaysSelected, isLoading }){
    return(
        <WeekdaysStyle>
            {days.map(day => (
                <Weekday
                    key = {day.id}
                    id = {day.id}
                    dayLetter = {day.letter}
                    daysSelected = {daysSelected}
                    setDaysSelected = {setDaysSelected}
                    isLoading = {isLoading}
                />
            ))}
        </WeekdaysStyle>
    );
}