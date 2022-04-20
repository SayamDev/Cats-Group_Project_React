

const Basket = (props) => {


    if(!props.show){return null}

    return (
      <div className = "basketModel">
          {props.basket.map((item, index) => (
          <div>
            <img key={index} src={item.url} alt="image of cat" />
           
            <button onClick={() => props.removeItem(index)}>Remove Cat</button>
          </div>
          ))}
          <h4>Total Price: {props.faker.finance.amount(700, 1000, 2, '£')}</h4>
      </div>
        );
      };

export default Basket;