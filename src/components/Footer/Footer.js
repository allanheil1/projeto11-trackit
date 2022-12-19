import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbarWrapper, FooterStyle} from './style';

export default function Footer() {
  return (
    <FooterStyle>
      <Link to='/habitos'>
        Hábitos
      </Link>
      <CircularProgressbarWrapper>
        <Link to='/hoje'>
          <CircularProgressbar
            value={66}
            text={'Hoje'}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "white",
              pathColor: "white",
              trailColor: "transparent"
            })}
          />
        </Link>
      </CircularProgressbarWrapper>
      <Link to='/historico'>
        Histórico
      </Link>
    </FooterStyle>
  );
}
