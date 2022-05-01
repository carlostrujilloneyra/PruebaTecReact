import styled from 'styled-components';
import { devices } from '../../devices';

export const LastButton = styled.button`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4rem;
	color: rgb(21, 141, 228);
	margin-bottom: 1.2rem;
	border: .1rem solid rgb(21, 141, 228);
	border-radius: .8rem;
	background-color: transparent;
	padding: 1rem 1.6rem;
	cursor: pointer;

	@media ${ devices.tablet }{
		display: inline-block;
		padding: 1rem 1.6rem;
	}
`;