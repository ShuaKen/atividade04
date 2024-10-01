import './Product.css';
import Button from '../Button/Button'; 

const Product = ({ product, onDelete }) => {
    return (
        <div className='item-lista-products'>
            <div className='image-container'>
                <img src={product.image} alt={product.productName} />
                <Button text="Excluir" onClick={() => onDelete(product.id)} className="delete-button" />
            </div>
            <h2>{product.productName}</h2>
            <p>Descrição: {product.description}</p>
        </div>
    );
};

export default Product;
