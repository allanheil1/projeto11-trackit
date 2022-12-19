import styled from 'styled-components'

export const HabitStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    height: 91px;
    width: 340px;
    margin-top: 10px;
    position: relative;
    img{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    h1{
        color: #666666;
        font-size: 20px;
    }
`