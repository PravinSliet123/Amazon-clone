import React from 'react'
import CurrencyFormat from "react-currency-format"
import "./Subtotal.css"
import { useStateValue } from '../../StateProvider/Stateprovider'
import { getBasketPrice } from '../../StateProvider/reducer'
import { useNavigate } from 'react-router-dom'
function Subtotal() {
    const navigate = useNavigate()
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>

                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )} decimalScale={2}
                value={getBasketPrice(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}


            />
    <button onClick={e=>{navigate("/payment")}}><h4>Proceed to checkout</h4></button>
        </div>
    )
}

export default Subtotal