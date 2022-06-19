import React from 'react'
import Product from '../Product/Product'
import "./Home.css"
import Aos from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css"
import { duration } from '@material-ui/core'
import Crousel from "react-alice-carousel"

function Home() {
    const imageData = [
        {
            imageLink: "https://image.shutterstock.com/image-photo/szczecin-polandnovember-2018-amazon-logistics-600w-1247288113.jpg"
        },
        {
            imageLink: "https://image.shutterstock.com/image-photo/szczecin-polandnovember-2018-amazon-logistics-600w-1247288113.jpg"
        },
        {
            imageLink: "https://image.shutterstock.com/image-photo/szczecin-polandnovember-2018-amazon-logistics-600w-1247288113.jpg"
        },
    ]
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 1000,
            delay: 400
        })
    }, [])


    document.title = "Online Shopping site in India: Shop online for, mobile, books, medicine"
    return (
        <div className='home '>
            <div className="home__container">
                <img className='home__images' src="https://image.shutterstock.com/image-photo/szczecin-polandnovember-2018-amazon-logistics-600w-1247288113.jpg" alt="" />

                <div data-aos="slide-up" className="home__row">
                    <Product className="Hover"
                        id="1"
                        title="the lean startup How constant inovation creates redically Successfull buisiness" price={299} image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg" rating={5} />
                    <Product
                        id="2"
                        title="the lean startup How constant inovation creates redically Successfull buisiness" price={299} image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg" rating={5} />

                </div>
                <div data-aos="flip-right" className="home__row">
                    <Product className="Hover"
                        id="3"
                        title="the lean startup How constant inovation creates redically Successfull buisiness" price={299} image="https://cdn.shopify.com/s/files/1/0608/4988/1306/products/3263_1400x.jpg?v=1648711134" rating={5} />
                    <Product className="Hover"
                        id="4"
                        title="the lean startup How constant inovation creates redically Successfull buisiness" price={299} image="https://e7.pngegg.com/pngimages/730/183/png-clipart-loudspeaker-enclosure-wireless-speaker-bluetooth-speaker-electronics-speaker.png" rating={5} />
                    <Product className="Hover"
                        id="5"
                        title="the lean startup How constant inovation creates redically Successfull buisiness" price={2999} image="https://images.unsplash.com/photo-1618478594486-c65b899c4936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" rating={4} />
                </div>
                <div data-aos="slide-up" className="home__row">
                    <Product className="Hover"
                        id="6"
                        title="the lean startup How constant inovation creates redically Successfull buisiness" price={299} image="https://images.unsplash.com/photo-1618478594486-c65b899c4936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" rating={5} />

                </div>
            </div>
        </div>
    )
}

export default Home