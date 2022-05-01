import styled from 'styled-components';

export const ContainerInput = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(2, 4rem);
	row-gap: 1.2rem;

	@media screen and (min-width: 840px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-columns: minmax(35rem, 40rem) minmax(13rem, 14rem);
		grid-template-rows: 4rem;
	}
`;

// Clase para los inputs

export const Input = styled.input`
	width: 100%;
	height: 4rem;
	border-radius: .8rem;
	border: .1rem solid rgb(230, 230, 230);
	background-color: rgb(246, 246, 246);
	padding-left: 1.2rem;
	font-family: 'Jost', sans-serif;
	color: #1D1C1E;
	font-size: 1.6rem;
	outline: none;

	@media screen and (min-width: 840px){
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	
	&:focus{
		border: .1rem solid rgb(21, 141, 228);
		outline: .1 rem solid rgb(21, 141, 228);
	}

	&::placeholder{
		color: rgba(117, 117, 117, .9);
	}
`;