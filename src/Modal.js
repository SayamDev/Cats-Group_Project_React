import React from 'react'

const Modal = ({basket, show, handleRemoveProduct, onClose}) => {
    if (!show) {
        return null
    }
    return (
        <div>
        <div className='modal'>
            <h2 className='modal-title'>Checkout</h2>
            <div className='modal-body'>
                {basket.map((item, i) => {
                    return (
                        <div>
                         {/* <div className='modal-box' key={item.i}> */}
                            <p>{item.name}</p>
                            <img src={item.image} alt="cat"/>
                            <h3>£{item.price}</h3>
                            <button onClick={() => handleRemoveProduct(item)}>Delete</button>
                            </div>
                    )
                })}
            </div>
        </div>
        <div className='modal-bottom'>
            <button onClick={onClose} className='button'>Close</button>
        </div>
     </div>
    )
}

export default Modal