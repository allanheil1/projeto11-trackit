import styled from 'styled-components'

import LogoName from '../../assets/logoname.png'

export default function Header() {
    return (
      <HeaderStyle>
        <img src={LogoName}/>
        <div>
          <img src='https://p.kindpng.com/picc/s/184-1845046_transparent-mtg-card-back-png-magic-the-gathering.png' />
        </div>
      </HeaderStyle>
    );
  }

  const HeaderStyle = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    img{
      height: 58px;
      width: 115px;
      margin-left: 15px;
    }
    div img{
      height: 51px;
      width: 51px;
      border-radius: 50%;
      margin-right: 20px;
    }
  ` 