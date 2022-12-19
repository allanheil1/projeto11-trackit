import { Box, TodaytHabitStyle, CheckHabit } from './style';

export default function TodayHabit({ name, done, currentSequence, highestSequence }) {

  
    return (
      <Box>
        <TodaytHabitStyle>
          <h1> {name} </h1>
          <h2> Sequência atual: {currentSequence} dias </h2>
          <h3> Seu recorde: {highestSequence} dias </h3>
          <CheckHabit done={done}> ✓ </CheckHabit>
        </TodaytHabitStyle>
      </Box>
    );
}