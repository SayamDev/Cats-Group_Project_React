import './App.css';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react'
import React from 'react'

const Data = ({handleAddProduct}) => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null)
  


  const fetchData = () => {
    const array = [];

    for (let i = 0; i < 15; i++) {
      const name = faker.name.firstName();
      const price = faker.commerce.price(5, 20);
      const species = faker.animal.cat();

      array.push({ name, price, species });
    }


    return array;
  };

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20"
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err.message);
      setError("Could not fetch data");
    }
  };

  useEffect(() => {
    (async () => {
      const imgs = await fetchImages();
      let data = fetchData();
      data = data.map((cat, i) => {
        cat.image = imgs[i].url;
        cat.id = i;
        return cat;
      });
      setCats(data);
    })();
  }, []);


  return (
    <div>
      {error}
       <div className="Cat">  
        {cats.map((cat, i) => (
          <div key={i}>
            <div className='cat-container'> 
            <h3 className='cat_name'>{cat.name}</h3>
            <h4 className='species'>{cat.species}</h4>
            <img src={cat.image} alt="cats"></img>
            <p className='price'>£{cat.price} per month</p>
            <button className="addBasket" 
            onClick={() => handleAddProduct(cat)}
            >Add to Basket</button>
            </div>
            </div>
        ))}
</div>
      </div>
  );
}

export default Data