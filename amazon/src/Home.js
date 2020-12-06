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
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                price={699}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
                <Product 
                id="58785645"
                title ='Focusrite Scarlett Solo (3rd Gen) USB Audio Interface with Pro Tools, First' 
                image="https://images-na.ssl-images-amazon.com/images/I/717gKDL1iML._SL1500_.jpg" 
                price={9999.00}
                rating={4}/> 
               
                
            </div>
            <div className="home_row">
                <Product
                id="2215544"
                title="LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt Speaker - 29UM69"
                rating={5}
                price={29599.00}
                image="https://images-na.ssl-images-amazon.com/images/I/81t1tAzEgGL._SL1500_.jpg"/>      
            </div>
            <div className="home_row">
            <Product
                id="2215654"
                title="Blue Snowball USB Microphone with Two Versatile Pickup Patterns and Stylish, Retro Design for Recording, Streaming & Podcasting on PC & Mac – Textured White"
                rating={4}
                price={7599.00}
                image="https://images-na.ssl-images-amazon.com/images/I/61-BOB5h7uL._SL1500_.jpg"/>      
            <Product
            id="55648489"
            title="ASUS ROG G703GI-E5148T 17.3-inch FHD 144Hz/3ms Gaming Laptop (8th Gen Intel Core i9-8950HK/64GB/2TB SSHD + 1.5TB NVMe SSD/Windows 10/GTX 1080 8GB Graphics/4.70 Kg), Aluminum"
            rating={4}
            price={599990.00}
            image="https://images-na.ssl-images-amazon.com/images/I/71lbxXG9NSL._SL1500_.jpg"
            />
            </div>
            </div>
        </div>
    )
}

export default Home
