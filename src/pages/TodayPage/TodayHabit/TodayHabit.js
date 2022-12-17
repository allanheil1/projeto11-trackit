import { Box, TodaytHabitStyle, CheckHabit } from './style';

export default function TodayHabit() {
    return (
      <Box>
        <TodaytHabitStyle>
          <h1> Ler 1 capítulo de livro </h1>
          <h2> Sequência atual: 3 dias </h2>
          <h3> Seu recorde: 3 dias </h3>
          <CheckHabit> ✓ </CheckHabit>
        </TodaytHabitStyle>
      </Box>
    );
}