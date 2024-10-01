import './Header.css'
import Logo from '../Logo/Logo.js'
function Header(){
    return(
        <header className = 'header'>
            <Logo/>
            <h1>Loja</h1>
        </header>        
    )
}
export default Header;