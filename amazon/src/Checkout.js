import React from 'react';
import SubTotal from './Subtotal'
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Checkoutproduct from './Checkoutproduct';


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div className="checkout_title">
                    <h3>Hello, {user?.email}</h3>
                    <h2 >
                        Your Shopping Basket
                    </h2>
                </div>
                <hr></hr>

                {basket.map(item=>(
                    <Checkoutproduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}/>
                ))}
            </div>
            <div className="checkout_right">
                <SubTotal/>
                <h2>The SubTotal</h2>
            </div>
        </div>
    )
}

export default Checkout
