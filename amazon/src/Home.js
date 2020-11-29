import React from 'react'
import './Home.css'
import Product from './Product'
function Home(Homeimage) {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt=""/>
            
            <div className="home_row">
                <Product 
                id='12123156'
                title="The Lean Startup"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
                <Product 
                id="58785645"
                title ='Son GOKU' 
                image="#" 
                price={9000} rating={2}/> 
                <Product/>
            </div>
            <div className="home_row">
                <Product/>
            </div>
            <div className="home_row">
                <Product/>
                <Product/>
            </div>
            </div>
        </div>
    )
}

export default Home
