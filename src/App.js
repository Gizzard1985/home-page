import './App.css';
import Navbar from './component/Navbar';
import Header from "./component/Header"
import Products from './component/Products';
import Footer from './component/Footer';


function App() {
  return (
    <main>
        <Navbar/>
        <Header/> 
        <Products/>
        <Footer/>
    </main>
  );
}

export default App;
