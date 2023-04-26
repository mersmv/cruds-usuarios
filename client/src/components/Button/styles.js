import styled from "styled-components";

const StyledButton = styled.div`
    width: 110px;
    height: 35px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${({color}) => color};
    border: solid 1px ${({color}) => color};
    border-radius: 25px;
    cursor: pointer;
`

export {StyledButton}