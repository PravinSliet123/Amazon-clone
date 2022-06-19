import React from 'react'
import "./Product.css"
import {useStateValue} from "../../StateProvider/Stateprovider"
import { Flipped } from 'react-flip-toolkit'


function Product({ title, image, price, rating,id }) {
const [{basket}, dispatch] = useStateValue()
    const addToBasket = ()=>{
        //dispatch the item into a data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
       <Flipped flipId={basket.id}>
         <div className='product'>
            <div className="product__info">
                <p> {title}</p>
                <p className='product__price'> <small>💲</small>
                    <strong>{price}</strong> </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) => {
                            return(
                                <p>⭐</p>
                            )
                        })
                    }
                </div>
            </div>

            <img src={image} alt="" className="product__image" />
            <button 
            onClick={addToBasket}
            className="product__button">Add to Cart</button>
        </div>
       </Flipped>
    )
}

export default Product