import { useEffect, useState } from 'react'
import './App.css';
import { faker } from '@faker-js/faker';

function Cat() {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null)


  const petGender = faker.name.firstName()
  const petSpecies = faker.animal.cat()
  const petPrice = faker.finance.amount(700, 1000, 2, '$')
  
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
      {cats.map( (cat) => (
        <>
        {error && <p>{error}</p>}
        
        <div className='cat-container'>
        
        <h1>{petGender}</h1>
        <h1>{petSpecies}</h1>
        <img src={cat.url} alt="Cat"/>
        <h3>Cost:{petPrice}</h3>
        </div>
        </>
      ))}
      </div> 
    </div>
  );

}

export default Cat;