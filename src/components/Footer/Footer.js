import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Exibe o ano atual e a mensagem de direitos autorais */}
                <p>&copy; {new Date().getFullYear()} Loja. Todos os direitos reservados.</p>
                
                {/* Lista de links do rodapé */}
                <ul className="footer-links">
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                    <li><a href="/privacidade">Política de Privacidade</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
