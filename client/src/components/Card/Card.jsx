import Button from "../Button/Button"
import { StyledAvatar, StyledContainerButton, StyledTitle, StyledUser, StyledUsername } from "./styles"

const Card = ({profileImage, name, username}) => {
    return (
        <StyledUser>
            <StyledAvatar src={profileImage} alt="" />
            <StyledTitle>{name}</StyledTitle>
            <StyledUsername>@{username}</StyledUsername>
            <StyledContainerButton>
                <Button color={'#8c93a8'} text={'Edit'}></Button>
                <Button color={'#62466b'} text={'Delete'}></Button>
                <Button color={'#45364B'} text={'Show Details'}></Button>
            </StyledContainerButton>
        </StyledUser>
    )
}

export default Card