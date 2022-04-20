import { useEffect, useState } from "react";
import "./App.css";
import { faker } from "@faker-js/faker";
import Basket from "./Basket";

function Cat() {
  const [cats, setCats] = useState([]);
  // const [basket, setBasket] = useState([]);
  const [error, setError] = useState(null);

  //   const addBasket = (item) => {
  //     setBasket([...basket, item])
  // }

  // >>>>>>> main
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=20"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setCats(data);
      } catch (err) {
        console.log(err.message);
        setError("Could not fetch error");
      }
    };
    fetchCats();
  }, []);

  return (
    <div className="Cat">
      {cats.map((cat, index) => (
        <>
          {error && <p>{error}</p>}
          <h1>{faker.name.firstName()}</h1>
          <h1>{faker.animal.cat()}</h1>
          <h1>{faker.finance.amount(700, 1000, 2, "£")}</h1>
          <img src={cat.url} alt="Cat" />
          <Basket key={index} />
        </>
      ))}
    </div>
  );
}

export default Cat;
