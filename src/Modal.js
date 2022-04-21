import React from 'react'

const Modal = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div>
        <div className='modal'>
            <h2 className='modal-title'>Checkout</h2>
            <div className='modal-body'>Thank you for using cats4lyfe</div>
        </div>
        <div className='modal-bottom'>
            <button onClick={props.onClose} className='button'>Close</button>
        </div>
     </div>
    )
}

export default Modal