import React from 'react'
import { useStateValue } from '../../StateProvider/Stateprovider'
import "./Checkout.css"

function CheckoutProducts({image, id, rating, price, title}) {
    const [{ basket }, dispatch] = useStateValue()
const removeFromBasket =()=>{
    dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,

    })
}

    return (
        <div className='checkoutproducts'>
            <div>
                <div className="checkout__items">
                    <div className="checkout__items__image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="checkout__items__description">
                        <h4>{title}</h4>
                        <strong>{`$${price}`}</strong>
                        <div className='checkout__items__rating'>
                            {
                                Array(rating).fill().map((_, i) => {
                                    return (
                                        <p>⭐</p>
                                    )
                                })
                            }
                        </div>
                        <button onClick={removeFromBasket} className='checkout__items__remove'><h4>Remove from Basket</h4></button>
                    </div>

                </div>
                <hr />
            </div>


        </div>
    )
}

export default CheckoutProducts