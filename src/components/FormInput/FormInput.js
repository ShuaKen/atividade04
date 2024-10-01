import React from 'react';
import './FormInput.css'; 

const FormInput = ({ inputName, id, name, type, value, onChange }) => {
    return (
        <div className="form-input"> {/* Contêiner para o input */}
            <label htmlFor={id}>{inputName}</label> {/* Label associada ao input */}
            <input
                id={id} // ID do input
                name={name} // Nome do input para identificação
                type={type} // Tipo do input (text, email, etc.)
                value={value} // Valor atual do input
                onChange={onChange} // Função chamada ao alterar o valor
                required // Torna o campo obrigatório (opcional)
            />
        </div>
    );
};

export default FormInput; // Exporta o componente para uso em outros arquivos
