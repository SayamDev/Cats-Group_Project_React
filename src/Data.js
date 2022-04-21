import './App.css';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react'
import React from 'react'

const Data = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCats = async () => {
      try {
        
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20')
        if (!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        setCats(data);
        
      } catch (err) {
        console.log(err.message)
        setError("Could not fetch error")
}}
fetchCats();
  }, []);

  return (
    <div className="Cat">  
    <div className='wrapper'>
         {cats.map( (cat 
        //  handleAddProduct
         ) => (
          <>
          {error && <p>{error}</p>}
          <div className='cat-container'> 
          <h1>{faker.name.firstName()}</h1>
          <h1>{faker.animal.cat()}</h1>
          <img src={cat.url} alt="Cat"/>
          <div className='addTo'>
          <h1>£{faker.finance.amount(700, 1000, 2, )}</h1>
          <button className="addBasket" 
          // onClick={handleAddProduct(cat)}
          >Add to Basket</button>
          <div>
          </div>
        </div>
        </div>
          </>
          ))}
        </div>
        )
      </div>
      
    );
}
export default Data