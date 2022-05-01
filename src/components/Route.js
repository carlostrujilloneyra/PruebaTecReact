import { ContainerRoute } from "./styles/ContainerRoute.styled";

const Route = () => {
	
	const profile = 'Perfil >';

  return (

	<>
      <ContainerRoute>
        <h4><a href="https://platzi.com/@Domart/" target="_blank" rel="profile">
            {profile}</a>{" "}
          Diploma de Audioglosario Métricas para Marketing Digital
        </h4>
      </ContainerRoute>
    </>

  );
}

export default Route