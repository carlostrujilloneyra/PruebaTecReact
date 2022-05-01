import styled from 'styled-components';
import { devices } from '../../devices';

export const HeaderStyled = styled.header`
	width: 100%;
	height: 7rem;
	background-color: rgb(21,29, 60);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3.2rem;
	margin-bottom: 2.4rem;

	/* Para cuando sea tablet */
	@media ${ devices.tablet }{
		margin-bottom: 3.2rem;
		padding: 0 3.6rem;
	}

	@media ${ devices.desktop }{
		margin-bottom: 3.6rem;
		padding: 0 12rem;
	}

	/* Aplicamos algunos breakpoints para cuando aumenta el viewport */
	@media ${ devices.desktopFirst }{
		max-width: 80%;
	}

	@media ${ devices.desktopSecond }{
		max-width: 65%;
	}

	@media ${ devices.desktopThird }{
		max-width: 50%;
	}
`;

export const Logo = styled.img`
	cursor: pointer;
`;