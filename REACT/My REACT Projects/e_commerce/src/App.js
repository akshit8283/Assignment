import './App.css';
import { Routes, Route } from 'react-router-dom'  
import Header from './Components/Header'; 
import Home from './Components/Home'; 
import Footer from './Components/Footer'; 
import Contact from './Components/Contact'; 
import ProductDetails from './Components/ProductDetails'; 
import cart from './Components/cart'; 

function App() { 
  return ( 
    <> 
      <Routes>  
        <Route path='/' element={<Home />}></Route> 
        <Route path='/Home' element={<Home />} ></Route> 
        <Route path='/Contact' element={<Contact />} ></Route> 
        <Route path='/ProductDetails' element={<ProductDetails />} ></Route>  
        <Route path='/cart' element={<cart />} ></Route> 
      </Routes> 
      <Header /> 
      <Footer /> 
    </> 
  );      
}     
export default App;    