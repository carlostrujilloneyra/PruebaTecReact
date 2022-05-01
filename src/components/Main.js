import { Grid } from "./styles/Grid";
import { FirstPart } from "./styles/FirstPart";
import { Description } from "./styles/Description";
import { ContainerButtons } from "./styles/ContainerButtons";
import { DownloadButton, MainButton } from "./styles/Button.styled";
// Para descargar el certificado:
// import { PDFDownloadLink } from '@react-pdf/renderer';

const Main = () => {
  return (
    <Grid>
      <FirstPart>
        <img src="./images2/certificado.png" alt="certificado" />
      </FirstPart>

      <Description>
        <h1>
          ¡Christopher Coronel Ramirez aprobó el Audiglosario Métricas para
          Marketing Digital!
        </h1>
        <p>
          Tú también puedes aprender del AudioGlosario Métricas para Marketing
          Digital y muchos más.
        </p>

        <ContainerButtons>
          <MainButton as="a" href= "https://platzi.com/cursos/audioglosario-metricas/" target="_blank">Comienza ahora</MainButton>
          <DownloadButton>Descargar certificado</DownloadButton>
        </ContainerButtons>
      </Description>
    </Grid>
  );
}

export default Main;