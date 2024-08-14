import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import Header from "./components/header/Header";
import './App.css';
import Hero from './components/hero/Hero';
import Category from './components/Category/Category';
import Recipes from "./components/Recipes/Recipe";
import AboutUs from "./components/AboutUs/AboutUs";
import Reviews from "./components/Reviews/Reviews";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"; 


function App() {
 // const [count, setCount] = useState(0)
//const [data, Setdata]  = useState("ground");
  return (
    <>
      <div className='main'>
          <Header />
          <Hero />
          <Category  />
           <Recipes  /> 
           <AboutUs  />
           <Reviews  />
           <Menu  />
           <Contact  />
          <Footer />    
       </div>  
    </>
  )
}

export default App;
