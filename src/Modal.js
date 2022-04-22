import React from 'react'

const Modal = ({basket, show, handleRemoveProduct, onClose}) => {
    if (!show) {
        return null
    }

    const basketTotal = basket.reduce((accumulator, item) => {
        accumulator += parseFloat(item.price);
        return accumulator;
      }, 0);
    return (
        <div>
        <div className='modal'>
            <h2 className='modal-title'>Items in Basket</h2>
            <div className='modal-body'>
                {basket.map((item, i) => {
                    return (
                        <div>
                         {/* <div className='modal-box' key={item.i}> */}
                            <p>{item.name}</p>
                            <img src={item.image} alt="cat"/>
                            <h3>£{item.price}</h3>
                            
                            <button className='delete' onClick={() => handleRemoveProduct(item)}>X</button>
                        
                        </div>
                    )
                })}
                <h4 className="total"> Total Cost: £{basketTotal.toFixed(2)} p.m</h4>
            </div>
        </div>
        <div className='modal-bottom'>
            <button onClick={onClose} className='button'>Close</button>
        </div>
     </div>
    )
}

export default Modal