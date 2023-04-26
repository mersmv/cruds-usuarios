import styled from "styled-components";

const StyledHeader = styled.div`
    width: 100%;
    height: 80px;
    padding: 25px;
    background-color: #b5c2b7;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledInput = styled.input`
    width: 150px;
    height: 30px;
    background-color:#F8FFF4;
    border: 1px solid currentcolor;
    border-radius: 10px;
    position: relative;
`

const StyledNewUser = styled.button`
    width: 150px;
    height: 30px;
    background-color: #F8FFF4;
    border-radius: 10px;
    border: solid 1px currentcolor;
    padding-right: 15px;
    position: relative;
    cursor: pointer;
`

const StyledIcon = styled.img`
    position: absolute;
    width: 15px;
    top:8px;
    right: 15px;
`


export {StyledHeader, StyledIcon, StyledInput, StyledNewUser}