import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Products from './components/Products/Products.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
