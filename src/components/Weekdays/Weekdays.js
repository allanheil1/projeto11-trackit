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

function Weekday({ dayLetter }){
    return(
        <WeekdayStyle>
            {dayLetter}
        </WeekdayStyle>
    );
}

export default function Weekdays(){
    return(
        <WeekdaysStyle>
            {days.map(day => (
                <Weekday
                    key = {day.id}
                    dayLetter = {day.letter}
                />
            ))}
        </WeekdaysStyle>
    );
}