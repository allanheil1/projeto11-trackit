import LogoName from '../../assets/logoname.png'
import { HeaderStyle } from './style';

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