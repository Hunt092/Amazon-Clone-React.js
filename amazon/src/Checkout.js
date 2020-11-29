import React from 'react';
import SubTotal from './Subtotal'
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Checkoutproduct from './Checkoutproduct';


function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                </div>
                <hr></hr>

                {basket.map(item=>(
                    <Checkoutproduct
                    id={item.id}
                    title={item.item}
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
