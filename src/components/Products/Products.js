import './Products.css'; 
import Product from '../Product/Product.js'; 
import { useEffect, useState } from 'react'; 
import FormInput from '../FormInput/FormInput.js'; 
import Button from '../Button/Button.js'; 
import RatingForm from '../RatingForm/RatingForm'; 
import ReviewList from '../ReviewList/ReviewList';

const Products = () => {
    // Estado para armazenar a lista de produtos
    const [products, setProducts] = useState([]);
    
    // Estado para armazenar os dados do formulário de produto
    const [productForm, setProductForm] = useState({
        productName: '',
        image: '',
        description: ''
    });
    
    // Estado para armazenar os dados do formulário de avaliação
    const [ratingForm, setRatingForm] = useState({
        selectedProductId: '',
        name: '',
        email: '',
        rating: 0,
    });
    
    // Estado para armazenar a lista de avaliações
    const [reviews, setReviews] = useState([]);

    // Efeito colateral para buscar produtos quando o componente é montado
    useEffect(() => {
        getProducts();
    }, []);

    // Função para lidar com a mudança nos campos do formulário de produto
    const handleProductFieldsChange = (event) => {
        setProductForm({
            ...productForm, // Mantém os outros campos inalterados
            [event.target.name]: event.target.value // Atualiza o campo modificado
        });
    };

    // Função para lidar com a mudança nos campos do formulário de avaliação
    const handleRatingFieldsChange = (event) => {
        setRatingForm({
            ...ratingForm, // Mantém os outros campos inalterados
            [event.target.name]: event.target.value // Atualiza o campo modificado
        });
    };

    // Função para submeter o formulário de produto
    const handleProductSubmit = async (event) => {
        event.preventDefault(); // Previne o comportamento padrão de submissão de formulário

        try {
            // Faz uma requisição POST para adicionar um novo produto
            const response = await fetch('http://localhost:3005/Products', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productForm) // Converte o objeto productForm para JSON
            });

            // Verifica se a resposta foi bem-sucedida
            if (response.ok) {
                alert(`Produto adicionado: ${productForm.productName}`);
                getProducts(); // Atualiza a lista de produtos
                // Limpa o formulário após a submissão
                setProductForm({
                    productName: '',
                    image: '',
                    description: ''
                });
            } else {
                console.error('Erro ao adicionar produto', response.statusText);
                alert('Falha ao adicionar produto. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro de rede', error);
            alert('Erro de rede. Tente novamente.');
        }
    };

    // Função para submeter o formulário de avaliação
    const handleRatingSubmit = async (event) => {
        event.preventDefault(); // Previne o comportamento padrão de submissão de formulário

        try {
            // Faz uma requisição POST para adicionar uma nova avaliação
            const response = await fetch('http://localhost:3005/Reviews', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: ratingForm.selectedProductId,
                    name: ratingForm.name,
                    email: ratingForm.email,
                    rating: ratingForm.rating,
                })
            });

            // Verifica se a resposta foi bem-sucedida
            if (response.ok) {
                alert(`Avaliação adicionada para o produto ID: ${ratingForm.selectedProductId}`);
                const newReview = await response.json(); // Obtém a nova avaliação adicionada
                setReviews([...reviews, newReview]); // Atualiza a lista de avaliações

                // Limpa o formulário após a submissão
                setRatingForm({
                    selectedProductId: '',
                    name: '',
                    email: '',
                    rating: 0,
                });
            } else {
                console.error('Erro ao adicionar avaliação', response.statusText);
                alert('Falha ao adicionar avaliação. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro de rede', error);
            alert('Erro de rede. Tente novamente.');
        }
    };

    // Função para buscar produtos e avaliações
    const getProducts = async () => {
        try {
            const productResponse = await fetch('http://localhost:3005/Products');
            const productsData = await productResponse.json(); // Converte a resposta para JSON
            
            const reviewResponse = await fetch('http://localhost:3005/Reviews');
            const reviewsData = await reviewResponse.json(); // Converte a resposta para JSON
            
            setProducts(productsData); // Atualiza o estado com os produtos recebidos
            setReviews(reviewsData); // Atualiza o estado com as avaliações recebidas
        } catch (error) {
            console.error('Erro ao buscar produtos ou avaliações', error);
            alert('Erro ao buscar produtos ou avaliações. Tente novamente.');
        }
    };

    // Função para excluir um produto
    const handleProductDelete = async (productId) => {
        try {
            const response = await fetch(`http://localhost:3005/Products/${productId}`, {
                method: 'DELETE',
            });
        
            // Verifica se a resposta foi bem-sucedida
            if (response.ok) {
                alert(`Produto excluído com sucesso!`);
                setProducts(products.filter(product => product.id !== productId)); // Atualiza a lista de produtos
            } else {
                console.error('Erro ao excluir produto', response.statusText);
                alert('Falha ao excluir produto. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro de rede', error);
            alert('Erro de rede. Tente novamente.');
        }
    };

    return (
        <section className='products'>
            <h2>Adicionar Produto</h2>
            <form onSubmit={handleProductSubmit}>
                <FormInput 
                    inputName='Nome do Produto' 
                    id='productName' 
                    name='productName' 
                    type='text' 
                    value={productForm.productName} 
                    onChange={handleProductFieldsChange} 
                />
                <FormInput 
                    inputName='Imagem' 
                    id='image' 
                    name='image' 
                    type='text' 
                    value={productForm.image} 
                    onChange={handleProductFieldsChange} 
                />
                <FormInput 
                    inputName='Descrição' 
                    id='description' 
                    name='description' 
                    type='text' 
                    value={productForm.description} 
                    onChange={handleProductFieldsChange} 
                />
                <Button text='Adicionar Produto' type='submit' />
            </form>

            <ul className='lista-produtos'>
                {products.map((product) => (
                    <li key={product.id} className='produto-item'>
                        <Product 
                            product={product} 
                            onDelete={handleProductDelete} // Passa a função de exclusão para o componente Product
                        />
                    </li>
                ))}
            </ul>
            
            <h2>Avaliar Produto</h2>
            <RatingForm 
                ratingForm={ratingForm}
                handleRatingFieldsChange={handleRatingFieldsChange}
                handleRatingSubmit={handleRatingSubmit}
                products={products}
                setRatingForm={setRatingForm} // Passa a função para redefinir o formulário de avaliação
            />

            <ReviewList reviews={reviews} products={products} /> {/* Exibe a lista de avaliações */}
        </section>
    );
};

export default Products; 