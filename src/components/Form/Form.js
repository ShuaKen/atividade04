import './Form.css';
import FormInput from '../FormInput/FormInput';
const Form = () =>{
    return(
        <form class='form'>
            <FormInput inputName='Nome'id='nome' type='text'/>
            <FormInput inputName= 'Email' id='email' type='email'/>
            <button type='submit'>Enviar</button>
        </form>
    );
};
export default Form;