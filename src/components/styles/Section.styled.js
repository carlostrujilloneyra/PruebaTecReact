import styled from 'styled-components';
import { devices } from '../../devices';

// Estilos para el section en general
export const SectionStyle = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	margin-bottom: 2.4rem;
	padding: 0 2.4rem;
	padding-top: 2.4rem;

	@media ${ devices.tablet }{
		margin-bottom: 3.6rem;
		padding: 0 3.6rem;
		padding-top: 2.4rem;
	}

	@media ${devices.desktop }{
		margin-bottom: 4.8rem;
		padding: 0 12rem;
		padding-top: 3.2rem;
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

// Estilos para la primera parte del section: Imagen, h2, texto
export const SectionFirstPart = styled.div`
	display: grid;
	grid-template-rows: minmax(5rem, 7rem) 1fr;
	row-gap: 2.4rem;
	margin-bottom: 2.4rem;

	@media ${ devices.tablet }{
		grid-template-columns: 10rem 1fr;
		column-gap: 3.2rem;
		grid-template-rows: repeat(1, 1fr);
	}

	img{
		width: 9rem;
		height: 5rem;
	}
`;

// Estilos para la segunda parte
export const SectionSecondPart = styled.div`
	width: 100%;
	display: grid;
	margin-bottom: 2.4rem;
	row-gap: 1.6rem;

	@media screen and (min-width: 1170px){
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2.4rem;
	}
`;

// Estilos para la tercera parte (Formulario)
export const SectionThirdPart = styled.div`
	p{
		margin-bottom: 1.2rem;
		font-weight: 600;
	}
`;


// Contenedores de imagen y info
export const ContainerImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${ devices.desktop }{
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

export const ContainerInfo = styled(ContainerImage)`
	flex-direction: column;

	h2{
		text-align: center;
		font-weight: 600;
		margin-bottom: 1.2rem;

		@media ${ devices.tablet }{
			text-align: start;
		}
	}

	p{
		text-align: center;
		margin-bottom: 0;

		@media ${ devices.tablet }{
			text-align: start;
		}
	}

	@media ${ devices.tablet }{
		justify-content: flex-start;
		align-items: flex-start;
	}
`;