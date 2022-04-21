import { useEffect, useState } from 'react'
import './App.css';
// import Basket from './Basket';
import Navbar from "./Navbar"
import Data from './Data'
// import Routing from "./Routing"
import React from "react";




const App = () => {

  // const [cats, setCats] = useState([]);
  // const [error, setError] = useState(null)

  const [basket, setBasket] = useState([]);
  const [itemCount, setItemCount] = React.useState(1);

  const {cat} = Data;

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

  return (
    <div>
      {/* <Routes> */}
        <Navbar />
        <Data />
        {/* <Routing */}
          {/* // handleAddProduct={handleAddProduct}  */}
          {/* /> */}
        {/* <Routing  */}
        {/* // cats={cats}  */}
        {/* /> */}
      {/* <Router/> */}
    </div>
  )



}
      
export default App;
