import React from 'react'
import { useStateValue } from '../../StateProvider/Stateprovider'
import CheckoutProducts from '../Ckeckout/CheckoutProducts'
import "./Payment.css"
import { NavLink } from "react-router-dom"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

function Payment() {
    document.title = "Payment"
    const [{ basket, user }, dispatch] = useStateValue()

    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = ()=>{

    }

    return (
        <div className='payment'>
            <div className="paymet__container">
                <h1>
                    <NavLink to="/checkout">
                        checkout   ({basket?.length}items)
                    </NavLink>
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="paymet__address">
                        <p>{user?.email}</p>
                        <p>India, Bihar</p>
                        <p>Sitamarhi, Pupri</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="paymet__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket && basket.map(items =>
                            <CheckoutProducts
                                image={items.image}
                                id={items.id}
                                rating={items.rating}
                                price={items.price}
                                title={items.title}



                            />

                        )}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit} >
                           <CardElement/>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Payment