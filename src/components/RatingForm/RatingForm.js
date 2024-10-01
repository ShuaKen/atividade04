import React from 'react'; 
import './RatingForm.css'; 
import FormInput from '../FormInput/FormInput'; 
import Button from '../Button/Button'; 
import StarRating from '../StarRating/StarRating'; 

const RatingForm = ({ ratingForm, handleRatingFieldsChange, handleRatingSubmit, products, setRatingForm }) => {
    return (
        <form onSubmit={handleRatingSubmit}> {/* Formulário que chama a função de submissão ao enviar */}
            <FormInput 
                inputName='Nome' 
                id='nome' 
                name='name' 
                type='text' 
                value={ratingForm.name} // Valor do campo de nome
                onChange={handleRatingFieldsChange} // Função chamada ao mudar o valor
            />
            <FormInput 
                inputName='Email' 
                id='email' 
                name='email' 
                type='email' 
                value={ratingForm.email} // Valor do campo de email
                onChange={handleRatingFieldsChange} // Função chamada ao mudar o valor
            />
            <label>Selecionar Produto:</label>
            <select 
                name='selectedProductId' 
                value={ratingForm.selectedProductId} // Valor do campo de seleção
                onChange={handleRatingFieldsChange} // Função chamada ao mudar a seleção
            >
                <option value=''>Escolha um produto</option> {/* Opção padrão */}
                {products.map((product) => (
                    <option key={product.id} value={product.id}> {/* Opção para cada produto */}
                        {product.productName}
                    </option>
                ))}
            </select>
            <label>Avaliação:</label>
            <StarRating 
                rating={ratingForm.rating} // Passa a classificação atual
                setRating={(rating) => setRatingForm({ ...ratingForm, rating })} // Atualiza a classificação no formulário
            />
            <Button text='Adicionar Avaliação' type='submit' /> {/* Botão para submeter a avaliação */}
        </form>
    );
};

export default RatingForm; 
