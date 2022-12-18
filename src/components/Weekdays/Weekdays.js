import { useState } from 'react';

import { WeekdaysStyle, WeekdayStyle } from './style'

let days = [
    {id: 0, letter: 'D', name: 'Domingo'},
    {id: 1, letter: 'S', name: 'Segunda-Feira'},
    {id: 2, letter: 'T', name: 'Terça-Feira'},
    {id: 3, letter: 'Q', name: 'Quarta-Feira'},
    {id: 4, letter: 'Q', name: 'Quinta-Feira'},
    {id: 5, letter: 'S', name: 'Sexta-Feira'},
    {id: 6, letter: 'S', name: 'Sábado'}
]

function Weekday({ id, daysSelected, setDaysSelected, dayLetter }){

    const [isSelected, SetIsSelected] = useState(false);

    function selectDay(){
        let novoDaysSelected = daysSelected;
        if(novoDaysSelected.includes(id)){
            novoDaysSelected = novoDaysSelected.filter(item => item !== id);
            console.log(novoDaysSelected);
            SetIsSelected(false);
        }else{
            novoDaysSelected = [...novoDaysSelected, id];
            console.log(novoDaysSelected);
            SetIsSelected(true);
        }
        setDaysSelected(novoDaysSelected);
    }

    return(
        <WeekdayStyle onClick={selectDay} isSelected={isSelected}>
            {dayLetter}
        </WeekdayStyle>
    );
}

export default function Weekdays( {daysSelected, setDaysSelected }){
    return(
        <WeekdaysStyle>
            {days.map(day => (
                <Weekday
                    key = {day.id}
                    id = {day.id}
                    dayLetter = {day.letter}
                    daysSelected = {daysSelected}
                    setDaysSelected = {setDaysSelected}
                />
            ))}
        </WeekdaysStyle>
    );
}