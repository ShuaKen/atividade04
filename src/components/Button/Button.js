// Define um componente Button genérico
const Button = ({ text, onClick, type = 'button', className = '', ...props }) => {
    return (
        <button 
            className={`button ${className}`} type={type} onClick={onClick} {...props} 
        >
            {text} 
        </button>
    );
};

export default Button;
