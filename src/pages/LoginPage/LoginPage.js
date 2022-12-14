import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

export default function LoginPage() {
    return (
      <LoginPagesStyles>
        <img src={Logo} />
        <input type='email' placeholder='email'></input>
        <input type='password' placeholder='senha'></input>
        <button>Entrar</button>
        <Link to='/cadastro'>
          <Cadastre>
            Não tem uma conta? Cadastre-se!
          </Cadastre>
        </Link>
      </LoginPagesStyles>
    );
  }

const LoginPagesStyles = styled.div`
	display:flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  img{
    margin-bottom: 32px;
  }

  input{
    height: 45px;
    width: 303px;
    margin-bottom: 6px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    ::placeholder{
      color: #DBDBDB;
      font-size: 20px;
      padding-left: 10px;
      text-decoration: none;
    }

  }

  button{
    height: 45px;
    width: 303px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: white;
    text-align: center;
    margin-bottom: 25px;
    background-color: #52B6FF;
  }
  button:hover{
    opacity: 0.75;
    cursor: pointer;
  }
`

const Cadastre = styled.div`
  color: #52B6FF;
  font-family: 'Lexend Deca';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: underline;
`

