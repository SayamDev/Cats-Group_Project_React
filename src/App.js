import { useEffect, useState } from 'react'
import './App.css';
// import Basket from './Basket';
import Navbar from "./Navbar"
import Data from './Data'
import React from "react";
import Modal from './Modal'
// import Routing from "./Routing"
// import { Container } from './App.styled';




const App = () => {

  // const [cats, setCats] = useState([]);
  // const [error, setError] = useState(null)

  const [basket, setBasket] = useState([]);
  const [itemCount, setItemCount] = React.useState(1);
  const [show, setShow] = useState(false)

  const {cat} = Data;

  const handleAddProduct = (product) => {
    const ProductExist = basket.find((cat) => cat.name === product.name);
    if (ProductExist) {
      setBasket(
        basket.map((cat) =>
        cat.name === product.name
        ? {...ProductExist, quantity: ProductExist.quantity + 1}
        :cat
      )
      )
    }
    else {
      setBasket([...basket, {...product, quantity: 1}])
    }
  }

  return (
    // <Container>
    <div>
      {/* <Routes> */}
      {/* <Wrapper> */}
        <div className='App'>
          <button onClick={() => setShow(true)}>The Basket</button>
          <Modal onClose={() => setShow(false)} show={show}/>
        </div>
        <Navbar />
        {/* </Wrapper> */}
        <Data handleAddProduct={handleAddProduct}/>
        {/* <Routing */}
          {/* //   */}
          {/* /> */}
        {/* <Routing  */}
        {/* // cats={cats}  */}
        {/* /> */}
      {/* <Router/> */}
    </div>
    // </Container>
  )



}
      
export default App;
