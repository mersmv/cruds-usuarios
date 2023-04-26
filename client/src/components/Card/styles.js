import styled from "styled-components";

const StyledUser = styled.div`
    width: 100%;
    border-bottom: 2px solid #b5c2b7;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
`

const StyledAvatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`
const StyledTitle  = styled.h1`
    font-size: 1.3rem;
    font-weight: 400;
`

const StyledUsername = styled.h2`
    font-size: 1.2rem;
    font-weight: 200;
`

const StyledContainerButton = styled.div`
    display: flex;
    gap: 10px;
`

export {StyledUser, StyledAvatar, StyledTitle, StyledUsername, StyledContainerButton}