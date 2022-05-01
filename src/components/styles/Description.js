import styled from 'styled-components';
import { devices } from '../../devices';

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1{
		font-weight: 600;
		margin-bottom: 2.4rem;
		text-align: center;
		line-height: 1;

		@media ${ devices.tablet }{
			text-align: start;
		}
	}

	p{
		text-align: center;
		margin-bottom: 2.4rem;
		
		@media ${ devices.tablet }{
			text-align: start;
		}

		@media screen and (min-width: 1360px){
			width: 70%;
		}

	}

	@media ${ devices.tablet }{
		align-items: flex-start;
		justify-content: flex-start;
		padding-left: 1.2rem;
	}
`;