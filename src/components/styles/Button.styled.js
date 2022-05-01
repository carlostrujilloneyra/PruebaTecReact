// Botón Iniciar sesión
import styled from 'styled-components';

export const ButtonHeader = styled.button`
	text-transform: uppercase;
	background-color: rgb(145, 204, 72);
	font-size: 1.4rem;
	color: #FFFFFF;
	padding: .8rem 2.4rem;
	border-radius: .8rem;
	border: none;
	opacity: .9;

	&:hover{
		opacity: 1;
		cursor: pointer;
		transition: all .4s;
	}
`;