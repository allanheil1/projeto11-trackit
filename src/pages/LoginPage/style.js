import styled from 'styled-components';

export const LoginPagesStyles = styled.div`
  width: 100%;
  height: 100vh;
	display:flex;
  flex-direction: column;
  justify-content: center;
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
    font-size: 20px;
    color: #666666;
    padding-left: 10px;
    ::placeholder{
      color: #DBDBDB;
      font-size: 20px;
      text-decoration: none;
    }
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
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

export const Cadastre = styled.div`
  color: #52B6FF;
  font-family: 'Lexend Deca';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: underline;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`
