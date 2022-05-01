import styled from 'styled-components';
import { devices } from '../../devices';

export const SocialNetworks = styled.div`
	display: grid;
	grid-template-rows: 3.2rem 1fr;
	row-gap: 1.2rem;

	@media ${ devices.tablet }{
		grid-template-columns: minmax(10rem, 11rem) 1fr;
		grid-template-rows: repeat(1, 1fr);
		column-gap: 2.4rem;
	}

	@media ${ devices.desktop }{
		column-gap: 1.2rem;
	}

	p{
		align-self: center;
	}

	ul{
		display: flex;
		align-items: center;
		height: 4rem;
		list-style: none;
	}

	li{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1.6rem;
		border: .1rem solid rgb(21, 141, 228);
		padding: .8rem;
		border-radius: .8rem;
	}

	a{
		width: 2.4rem;
		height: 2.4rem;

		img{
			width: 100%;
			max-width: 100%;
		}
	}
`;