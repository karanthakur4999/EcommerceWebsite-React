import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

const App = () => {

  const theme ={
    colors:{
      bg: "#fff",
    },
  }
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle/>
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
    </ThemeProvider>
    
    </>
  )
}
export default App;