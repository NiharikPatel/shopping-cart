import './App.css';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Header from './Components/Header';
import { CartProvider } from './Components/CartContext';
import Cart from './Components/Cart';



function App() {
  return (
    <div style={{ backgroundColor: '#f1c0ff' }}>
      <CartProvider>
        
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
      
      </Routes>
     
     
      </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
