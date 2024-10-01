import React from 'react'; 
import './ReviewList.css'; 

const ReviewList = ({ reviews, products }) => {
    return (
        <div>
            <h3>Avaliações</h3> {/* Título da seção de avaliações */}
            <ul className='lista-avaliacoes'> {/* Lista para exibir as avaliações */}
                {reviews.map((review, index) => {
                    // Procura o produto correspondente à avaliação pelo productId
                    const product = products.find(product => product.id === Number(review.productId));
                    return (
                        <li key={index} className="avaliacao-item"> {/* Cada item da lista de avaliações */}
                            <h4>Produto: {product ? product.productName : 'Produto não encontrado'}</h4> {/* Exibe o nome do produto ou uma mensagem se não encontrado */}
                            <div className="comentario"> {/* Informações sobre a avaliação */}
                                <strong>Nome:</strong> <span>{review.name}</span><br />
                                <strong>Email:</strong> <span>{review.email}</span><br />
                                <strong>Avaliação:</strong> <span>{review.rating} estrelas</span> {/* Exibe a avaliação em estrelas */}
                            </div>
                            <hr className="separador" /> {/* Linha separadora entre avaliações */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ReviewList; 
