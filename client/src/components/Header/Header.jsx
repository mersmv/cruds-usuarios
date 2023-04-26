import { StyledHeader, StyledIcon, StyledInput, StyledNewUser } from "./styles"

const Header = () => {
    return (
        <StyledHeader>
            <form action="">
                <StyledInput type="text" placeholder="Find your user:"></StyledInput>
                
            </form>
            <StyledNewUser>
                New User
                <StyledIcon src="../../../public/images/user-plus-solid.svg" alt="" />
            </StyledNewUser>
        </StyledHeader>
    )
}

export default Header