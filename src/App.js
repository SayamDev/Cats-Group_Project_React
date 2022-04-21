import { useEffect, useState } from 'react'
import './App.css';
// import Basket from './Basket';
import Navbar from "./Navbar"
import Data from './Data'
import React from "react";
import Modal from './Modal'
// import { Name } from '@faker-js/faker/name';
// import Routing from "./Routing"
// import { Container } from './App.styled';





const App = () => {

  // const [cats, setCats] = useState([]);
  // const [error, setError] = useState(null)

  const [basket, setBasket] = useState([]);
  const [show, setShow] = useState(false)
  // const [itemCount, setItemCount] = React.useState(1);

  // const {cat} = Data;
  

  // const handleAddProduct = (product) => {
  //   const ProductExist = basket.find((cat) => cat.name === product.name);
  //   if (ProductExist) {
  //     setBasket(
  //       basket.map((cat) =>
  //       cat.name === product.name
  //       ? {...ProductExist, quantity: ProductExist.quantity + 1}
  //       :cat
  //     )
  //     )
  //   }
  //   else {
  //     setBasket([...basket, {...product, quantity: 1}])
  //   }
  // }

    const handleAddProduct = (i) => {
      const newBasket = [...basket]
      basket.push(i)
      newBasket(setBasket)
    }
    const handleRemoveProduct = (i) => {
      const removeBasket = [...basket]
      basket.splice(i)
      removeBasket(setBasket)
    }

  return (

    <div>

        <div className='App'>

          <button onClick={() => setShow(true)}>The Basket</button>
          <Modal onClose={() => setShow(false)} show={show}/>

        </div>

        <Navbar />
        <Data 
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        />

    </div>

  )
}
      
export default App
