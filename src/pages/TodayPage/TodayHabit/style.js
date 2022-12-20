import styled from 'styled-components';

export const Box = styled.div`
    height: 94px;
    width: 340px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
`

export const TodaytHabitStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: #666666;
    h1{
        margin-top: 13px;
        margin-left: 15px;
        font-size: 20px;
    }
    h2{
        margin-top: 15px;
        margin-left: 15px;
        font-size: 13px;
        span{
            font-size: 13px;
            color: ${props => (props.done ? '#8FC549' : '#666666')}
        }
    }
    h3{ 
        margin-left: 15px;
        font-size: 13px;
        span{
            font-size: 13px;
            color: ${props => (props.done ? (props.current >= props.high ? '#8FC549' : '#666666') : '#666666')}
        }
    }

`

export const CheckHabit = styled.div`
    position: absolute;
    width: 69px;
    height: 69px;
    right: 13px;
    top: 13px;
    background: ${props => (props.done ? '#8FC549' : '#E7E7E7')};
    border-radius: 5px;
    font-size: 60px;
    color: white;
    text-align: center;
`