import React from 'react'; 
import './StarRating.css';

const StarRating = ({ rating, setRating }) => {
    return (
        <div className="star-rating"> {/* Contêiner para as estrelas */}
            {[1, 2, 3, 4, 5].map((star) => ( // Mapeia os números de 1 a 5 para criar as estrelas
                <span
                    key={star} // A chave única para cada estrela
                    className={`star ${star <= rating ? 'filled' : ''}`} // Adiciona a classe 'filled' se a estrela estiver preenchida
                    onClick={() => setRating(star)} // Define a classificação ao clicar na estrela
                >
                    ★ {/* Símbolo da estrela */}
                </span>
            ))}
        </div>
    );
};

export default StarRating;
