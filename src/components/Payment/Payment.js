import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider/Stateprovider'
import CheckoutProducts from '../Ckeckout/CheckoutProducts'
import "./Payment.css"
import { NavLink, useNavigate } from "react-router-dom"
import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format'
import { getBasketPrice } from '../../StateProvider/reducer'
import { async } from '@firebase/util'
import axios from '../../axios'

function Payment() {
    document.title = "Payment"
    const navigate = useNavigate()
    const [{ basket, user }, dispatch] = useStateValue()
    const [error, setError] = useState(null)
    const [desabled, setDesabled] = useState(true)
    const [procesing, setProcesing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [clietSecret, setClietSecret] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
        useEffect(() => {
          
        const getClietSeceret = async()=>{
                const responce = () => axios({
                    method: 'POST',
                    url: `  /payments/create?Total=${getBasketPrice(basket)}`
                });
                setClietSecret(responce.data.clientSecret)
        }
          
        getClietSeceret()
        },[basket])
        

    const handleSubmit =async (event) => {
        event.preventDefault()
        setProcesing(true)

        const payload = await stripe.confirmCardPayment(clietSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({PaymentIntent})=>{
            console.log(PaymentIntent);
            setSucceeded(true)
            setError(null)
            setProcesing(false)
            navigate('/orders')
        })

    }
    const handleChange = event => {
        //lidten for changes in the card element
        // add display any error as the customer type any card details
        setDesabled(event.empty)
        setError(event.erorr ? event.erorr.message : "")


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
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>

                                            <p>
                                                <h3> Order Total:{value}</h3>
                                            </p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketPrice(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}


                                />
                                <button desabled={procesing || desabled || succeeded}>
                                    <span>{procesing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Payment