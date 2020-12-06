import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Checkoutproduct from './Checkoutproduct';
import "./Payment.css"
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format";
import axios from './axios'

function Payment() {
    
    const [{basket, user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [Clientsecret, setClientsecret] = useState("")
    useEffect(() => {
        const getClientSecret = async ()=>{
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${getBasketTotal(basket)}`
            })
            setClientsecret(response.data.clientSecret)
        }
        getClientSecret()
        
    }, [basket])
    const handleSumbit = async (e) =>{
        e.preventDefault();
        setProcessing(true);

    }
    const handleChange =  e =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }
    return (
        <main className="payment">
            <div className="payment__container">
                <h1>Checkout <Link to="./checkout">({basket?.length} items)</Link></h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                        </div>             
                    <div className="payment__address">
                        <h3>{!user? "User" : user.email}</h3>
                        </div>        
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review the Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                    {basket.map(item=>(
                    <Checkoutproduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}/>
                ))}
                        </div>   
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__method">
                        <form onSubmit={handleSumbit}>
                            <CardElement onChange={handleChange}/>
                            {error && <div className="payment__error">{error}</div>}
                            <div className="payment__pricecontainer">
                                <CurrencyFormat
                                renderText ={(value)=>(
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={'₹ '}
                                />
                                

                                <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p>: "Proceed with Payment"}</span></button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Payment
