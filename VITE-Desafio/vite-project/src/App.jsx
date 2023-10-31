import "./App.css";
import Header from './components/Header/header';
import Propaganda from './components/Propaganda/propaganda';
import Categoria from './components/Categoria/categoria';
import Produto from './components/Produto/produto';
import Inspiration from './components/Inspiration/inspiration'
import Garantia from './components/Garantia/garantia'
import Footer from './components/Footer/footer'

const App = () => {
  return <div>
    <Header/>
    <Propaganda/>
    <Categoria/>
    <Produto/>
    <Inspiration/>
    <Garantia/>
    <Footer/>
  </div>;

};

export default App;