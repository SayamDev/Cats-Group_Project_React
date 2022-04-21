import { useEffect, useState } from 'react'
import './App.css';
import Navbar from "./Navbar"
import Data from './Data'
import React from "react";
import Modal from './Modal'





const App = () => {

  const [basket, setBasket] = useState([]);
  const [show, setShow] = useState(false)

    const handleAddProduct = (i) => {
      setBasket([...basket, i])
    }
    console.log(basket)
    
    const handleRemoveProduct = (i) => {
      const removeBasket = basket.filter(cat => cat.id != i.id)
        setBasket(removeBasket)
    }

  return (

    <div>

        <div className='App'>

          <button onClick={() => setShow(true)}>The Basket</button>
          <Modal 
          basket={basket}
          handleRemoveProduct={handleRemoveProduct}
          onClose={() => setShow(false)} show={show}/>

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
