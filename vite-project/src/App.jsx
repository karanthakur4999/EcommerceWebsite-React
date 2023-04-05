import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;