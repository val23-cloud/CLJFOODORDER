
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Menu from './Pages/Menu';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner13.png'
import women_banner from './Components/Assets/banner12.png'
import kid_banner from './Components/Assets/banner14.png'
import PaymentFailure from "./Components/PaymentStatus/PaymentFailure";
import PaymentSuccess from "./Components/PaymentStatus/PaymentSuccess";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/breakfast' element={<ShopCategory banner={men_banner} category="breakfast"/>}/>
        <Route path='/veg' element={<ShopCategory banner={women_banner} category="veg"/>}/>
        <Route path='/nonveg' element={<ShopCategory banner={kid_banner} category="nonveg"/>}/>
        <Route path='/menu' element={<Menu/>}>
          <Route path=':menuId' element={<Menu/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path='/payment-failure' element={<PaymentFailure />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
