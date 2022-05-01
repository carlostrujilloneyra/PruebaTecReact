import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

	*, *::before, *::after{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html{
		font-size: 10px;
		font-family: 'Jost', sans-serif;
	}

	#root{
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
	}

	h1, h2{
		font-size: 3.2rem;
		color: #1D1C1E;
		font-weight: 400;
	}

	h2{
		font-size: 2.4rem;
	}
	
	p,a, h4 {
		font-size: 1.6rem;
	}
	
	h4{
		font-weight: 700;
		color: #333136;
	}

	p{
		color: #333136;
		line-height: 1.56;
	}
	
	a{
		text-decoration: none;
	}

`;