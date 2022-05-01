import { HeaderStyled, Logo } from './styles/Header.styled';
import { ButtonHeader } from './styles/Button.styled';

const Header = () => {
  return (
  	<HeaderStyled>
		<Logo src="./images2/logo.png" alt="logo-platzi" />
		<ButtonHeader as= "a" href= "https://platzi.com/login/" target = "_blank" >Iniciar Sesión</ButtonHeader>
	</HeaderStyled>

  )
}

export default Header;