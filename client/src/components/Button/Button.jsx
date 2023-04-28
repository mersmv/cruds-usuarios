import { StyledButton } from './styles';

const Button = ({ color, text }) => {
	return <StyledButton color={color}>{text}</StyledButton>;
};

export default Button;
