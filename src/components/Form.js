import { useForm } from "./hooks/useForm";
import { Input } from "./styles/ContainerInput.styled";
import { FormStyle } from "./styles/Form.styled"

const Form = () => {

	const [formValues, handleInputChange] = useForm({
		name:'',
		email: ''
	});

	const { name, email } = formValues;

  return (
	<FormStyle>
		<Input type="text" 
		name="name"
		placeholder="Nombre"
		autoComplete="off"
		onChange={ handleInputChange }
		value= { name }/>

		<Input type="email" 
		name="email"
		placeholder="Correo"
		autoComplete="off"
		onChange={ handleInputChange }
		value= { email }
		/>
	</FormStyle>
  )
}

export default Form;