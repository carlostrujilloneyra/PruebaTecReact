import styled from 'styled-components';
import { devices } from '../../devices';

export const ContainerButtons = styled.div`
	display: flex;

	@media ${ devices.tablet }{
		flex-direction: column;
	}

	@media ${ devices.desktop }{
		flex-direction: row;
	}
`;