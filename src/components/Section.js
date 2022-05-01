import Form from "./Form";
import { useForm } from "./hooks/useForm";
import { ButtonForm } from "./styles/Button.styled";
import { ContainerInput, Input } from "./styles/ContainerInput.styled";
import { LastButton } from "./styles/LastButton.styled";
import { ContainerImage, ContainerInfo, SectionFirstPart, SectionSecondPart, SectionStyle, SectionThirdPart } from "./styles/Section.styled";
import { SocialNetworks } from "./styles/SocialNetworks.styled";


const Section = () => {
	
	const [formValues, handleInputChange] = useForm({
		name: 'https://platzi.com/r//'
	});

	const { name } = formValues;

  return (
    <SectionStyle>
      <SectionFirstPart>
        {/* Contenedor de la imagen */}
        <ContainerImage>
          <img
            src="https://static.platzi.com/static/images/header-v2/gift-notification.png"
            alt="image-present"
          />
        </ContainerImage>

        {/* Contenedor de la info */}
        <ContainerInfo>
          <h2>
            Refiere y obtén un mes adicional sin costo para seguir aprendiendo
          </h2>
          <p>
            Si alguien se suscribe a Platzi con tu enlace, tú y esa persona
            reciben un mes extra.
          </p>
        </ContainerInfo>
      </SectionFirstPart>

      <SectionSecondPart>
        {/* Contenedor del input */}
        <ContainerInput>
          <Input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={name}
          />
          <ButtonForm>Copiar enlace</ButtonForm>
        </ContainerInput>

        {/* Contenedor de las Redes Sociales */}
        <SocialNetworks>
          <p>Compártelo en:</p>
          <ul>
            <li>
              <a
                href="https://api.whatsapp.com/send/?text=https%3A%2F%2Fplatzi.com%2Fr%2F%2F&app_absent=0"
                target="_blank"
              >
                <img src="./images2/whatsapp.png" alt="wspp-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/share/url?url=https://platzi.com/r//&text=Reg%C3%ADstrate%20y%20recibe%20un%20mes%20gratis%20de%20todos%20los%20cursos%20en%20Platzi"
                target="_blank"
              >
                <img src="./images2/telegram.png" alt="telegram-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/intent/tweet?text=https://platzi.com/r//"
                target="_blank"
              >
                <img src="./images2/twitter.png" alt="twitter-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fplatzi.com%252Fr%252F%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=es_LA">
                <img
                  src="./images2/facebook.png"
                  alt="facebook-icon"
                  target="_blank"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?&url=https://platzi.com/r//"
                target="_blank"
              >
                <img src="./images2/linkedin.png" alt="linkedin-icon" />
              </a>
            </li>
          </ul>
        </SocialNetworks>
      </SectionSecondPart>

	  <SectionThirdPart>
	  	<p>Envía una invitación por correo</p>
		{/* Aquí irá el formulario final */}
		<Form/>
		<LastButton>Conoce más</LastButton>
	  </SectionThirdPart>
    </SectionStyle>
  );
}

export default Section;