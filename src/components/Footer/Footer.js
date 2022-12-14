import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
  return (
    <FooterStyle>
      <Link to='/habitos'>
        Hábitos
      </Link>
      <CircularProgressbarWrapper>
        <CircularProgressbar
          value={66}
          text={'Hoje'}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "white",
            pathColor: "white",
            trailColor: "transparent"
          })}
        />
      </CircularProgressbarWrapper>
      <Link to='historico'>
        Histórico
      </Link>
    </FooterStyle>
  );
}

const CircularProgressbarWrapper = styled.div`
  height: 91px;
  width: 91px;
  margin-top: -40px;
`

const FooterStyle = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #52B6FF;
    width: 100%;
    height: 70px;
    background-color: white;
    font-weight: 700;
  `
