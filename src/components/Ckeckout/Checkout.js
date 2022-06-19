import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import "./Checkout.css"
import { useStateValue } from '../../StateProvider/Stateprovider'
import CheckoutProducts from './CheckoutProducts'
import { Flipped } from 'react-flip-toolkit'

function Checkout() {
  const [{ basket , user}, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg" alt="" className="checkout__ad" />
        <div>
          <h3 style={{marginLeft:'10px'}}>{`Hey! ${user? user.email.slice(0,3):'Guest'}`}</h3>
          <h2 className="checkout__title">
            Your Shopping Basket
          </h2>
          {
            basket.map(item => {
              return (
                <Flipped flipId={item.id} stagger>
                  <CheckoutProducts
                  id={item.id}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  image={item.image}
                />
                </Flipped>
              )
            })
          }
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout