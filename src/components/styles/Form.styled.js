import styled from 'styled-components';
import { devices } from '../../devices';

export const FormStyle = styled.form`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(2, 4rem);
	row-gap: .8rem;
	margin-bottom: 2.4rem;

	@media ${ devices.tablet }{
		grid-template-columns: 1fr 1fr minmax(15rem, 16rem);
		column-gap: 1.2rem;
		grid-template-rows: repeat(1, 1fr);
	}

	@media screen and (min-width: 1200px){
		width: 95%;
	}

	input{
		height: 4rem;
		padding-left: 1.2rem;

		&:focus::placeholder{
			opacity: 0;
			transition: all .4s;
		}
		
		&::placeholder{
			transition: all .4s;
		}
		
	}

`;