import { useContext } from 'react';

import LogoName from '../../assets/logoname.png'
import { HeaderStyle } from './style';
import UserContext from '../../contexts/UserContext';

export default function Header() {

    const { userIcon } = useContext(UserContext);

    return (
      <HeaderStyle data-test='header'>
        <img src={LogoName}/>
        <div>
          <img src={userIcon} />
        </div>
      </HeaderStyle>
    );
  }