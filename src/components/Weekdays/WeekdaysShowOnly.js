import { useState, useEffect } from 'react';

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

function WeekdayShowOnly({ id, habitDays, dayLetter }){
    const [isSelected, SetIsSelected] = useState(false);

    useEffect(() => {
        if(habitDays.includes(id)){
            SetIsSelected(true);
        }
    });

    return(
        <WeekdayStyleButton isSelected={isSelected}>
            {dayLetter}
        </WeekdayStyleButton>
    );
}

export default function WeekdaysShowOnly({ habitDays }){
    return(
        <WeekdaysStyle>
            {days.map(day => (
                <WeekdayShowOnly
                    key = {day.id}
                    id = {day.id}
                    dayLetter = {day.letter}
                    habitDays = {habitDays}
                />
            ))}
        </WeekdaysStyle>
    );
}