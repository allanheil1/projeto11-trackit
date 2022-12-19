import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';

import { CircularProgressbarWrapper, FooterStyle} from './style';
import UserContext from '../../contexts/UserContext';

export default function Footer() {

  const { progressPerc } = useContext(UserContext);

  return (
    <FooterStyle>
      <Link to='/habitos'>
        Hábitos
      </Link>
      <CircularProgressbarWrapper>
        <Link to='/hoje'>
          <CircularProgressbar
            value={progressPerc}
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
