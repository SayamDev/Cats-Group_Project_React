import './App.css';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react'
import React from 'react'

const Data = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null)


  const fetchData = () => {
    const array = [];

    for (let i = 0; i < 9; i++) {
      const name = faker.name.firstName();
      const price = faker.commerce.price(50, 1000);
      const species = faker.animal.cat();

      array.push({ name, price });
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
       <div className='wrapper'></div>
        {cats.map((cat, i) => (
          <div key={i}>
            <div className='cat-container'> 
            <h3>{cat.name}</h3>
            <h4>{cat.species}</h4>
            <p>£{cat.price}</p>
            <img src={cat.image} alt="cats"></img>
            <button className="addBasket" 
          // onClick={handleAddProduct(cat)}
            >Add to Basket</button>
            </div>
            </div>
        ))}
</div>
      </div>
  );
}

    {/* return (
     <div className="Cat">  
     <div className='wrapper'>
          {cats.map( (cat,  
           handleAddProduct
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
}   */}
export default Data