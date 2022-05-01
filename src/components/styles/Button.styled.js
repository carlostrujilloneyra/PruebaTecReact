// Botón Iniciar sesión
import styled from 'styled-components';
import { devices } from '../../devices';

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

export const MainButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: .8rem 1.6rem;
	color: #FFFFFF;
	z-index: 10;
	margin-right: 1.2rem;
	border: none;
	cursor: pointer;

	&:hover::before{
		transition: all .4s;
		box-shadow: 0rem .4rem .8rem rgb(21, 141, 228);
	}
	
	&::before{
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background-color: rgb(21, 141, 228);
		border-radius: .8rem;
		z-index: -10;
		transition: all .4s;
	}

	@media ${ devices.tablet }{
		margin-bottom: 1.2rem;
	}

	@media ${ devices.desktop }{
		margin-bottom: 0;
	}

`;

export const DownloadButton = styled(MainButton)`
	font-size: 1.6rem;
	font-family: 'Jost', sans-serif;
`;