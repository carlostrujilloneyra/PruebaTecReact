import styled from 'styled-components';
import { devices } from '../../devices';

export const HrStyled = styled.div`
	width: 100%;
	padding: 0 2.4rem;
	height: 0;

	@media ${ devices.tablet }{
		padding: 0 3.6rem;
	}

	@media ${ devices.desktop }{
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

export const Line = styled.div`
	width: 100%;
	height: .1rem;
	border-top: .1rem solid rgb(230, 230, 230);
`;