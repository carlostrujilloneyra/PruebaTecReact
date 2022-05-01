import styled from 'styled-components';
import { devices } from '../../devices';

export const ContainerRoute = styled.div`
	width: 100%;
	margin: 2.4rem 0;
	padding: 0 3.2rem;
	
	/* Para cuando sea tablet */
	@media ${ devices.tablet }{
		margin: 3.2rem 0;
		padding: 0 3.6rem;
	}

	@media ${ devices.desktop }{
		margin-bottom: 3.6rem 0;
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