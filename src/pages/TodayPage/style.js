import styled from 'styled-components';

export const TodayPageStyle = styled.div`
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

export const TodayTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 22px;
    margin-bottom: 28px;
    h1{
        margin-left: 28px;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        margin-top: 5px;
        margin-left: 28px;
        font-size: 18px;
        color: #BABABA;
        color: ${props => (props.qtyTodayHabitsDone !== 0 ? '#8FC549' : '#666666')};
    }
`

export const EmptyMessage = styled.div`
    margin-top: 28px;
    width: 338px;
    font-size: 18px;
    color: #666666;
`