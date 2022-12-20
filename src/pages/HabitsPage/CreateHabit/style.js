import styled from 'styled-components'

export const CreateHabitStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    height: 180px;
    width: 340px;
    margin-top: 10px;
    opacity: ${props => (props.isLoading ? 0.7 : 1)};
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        padding-left: 10px;
        color: #666666;
    }
    input::placeholder{
        color: #DBDBDB;
        font-size: 20px;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 140px;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 35px;
    background-color: ${props => (props.type === 'salvar' 
    ? '#52B6FF' : '#FFFFFF')};
    color: ${props => (props.type === 'cancelar' 
    ? '#52B6FF' : '#FFFFFF')};
    border: none;
    margin-right: 15px;
    border-radius: 5px;
    font-size: 16px;
    opacity: ${props => (props.disabled ? 0.7 : 1)};
`