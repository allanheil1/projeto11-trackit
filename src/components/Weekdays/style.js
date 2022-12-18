import styled from 'styled-components';

export const WeekdaysStyle = styled.div`
    display: flex;
    gap: 4px;
`

export const WeekdayStyle = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => (props.isSelected === true ? '#CFCFCF' : '#FFFFFF')};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: ${props => (props.isSelected === false ? '#CFCFCF' : '#FFFFFF')};
    display: flex;
    align-items: center;
    justify-content: center;
`