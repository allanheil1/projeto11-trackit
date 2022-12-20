import styled from 'styled-components';

export const HabitsPageStyle = styled.div`
    margin-top: 70px;
    margin-bottom: 91px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
`

export const MyHabits = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    margin-top: 22px;
    h1{
        margin-left: 28px;
    }
`

export const Button = styled.button`
    margin-right: 28px;
    height: 35px;
    width: 40px;
    color: white;
    font-size: 27px;
    border-radius: 5px;
    border: none;
    background-color: #52B6FF;
`

export const EmptyMessage = styled.div`
    margin-top: 28px;
    width: 338px;
    font-size: 18px;
    color: #666666;
`