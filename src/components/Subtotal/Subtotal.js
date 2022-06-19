import React from 'react'
import CurrencyFormat from "react-currency-format"
import "./Subtotal.css"
import { useStateValue } from '../../StateProvider/Stateprovider'
import { getBasketPrice } from '../../StateProvider/reducer'
function Subtotal() {
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
    <button><h4>Proceed to checkout</h4></button>
        </div>
    )
}

export default Subtotal