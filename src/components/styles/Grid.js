import styled from 'styled-components';
import { devices } from '../../devices';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	row-gap: 3.2rem;
	padding: 0 2.4rem;
	margin-bottom: 3.2rem;
	
	/* Para cuando sea tablet */
	@media ${ devices.tablet }{
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(1, minmax(42rem, 45rem));
		justify-content: flex-start;
		column-gap: 3.6rem;
		row-gap: 0;
		margin-bottom: 4.8rem;
		padding: 0 3.6rem;
	}

	@media ${ devices.desktop }{
		padding: 0 12rem;
	}

	@media screen and (min-width: 1200px){
		column-gap: 4.8rem;
	}

	@media screen and (min-width: 1300px){
		grid-template-columns: minmax(52rem, 55rem) 1fr;
		grid-template-rows: repeat(1, minmax(36rem, 40rem));
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