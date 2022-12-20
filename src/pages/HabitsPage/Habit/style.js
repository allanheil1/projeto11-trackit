import styled from 'styled-components'

export const HabitStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    margin-left: 15px;
    img{
        position: absolute;
        top: 9px;
        right: 13px;
        margin-top: 5px;
    }
    h1{
        color: #666666;
        font-size: 20px;
        margin-bottom: 10px;
        margin-top: 15px;
    }
`

export const Box = styled.div`
    background-color: white;
    border-radius: 5px;
    height: 91px;
    width: 340px;
    margin-top: 10px;
`