import React from 'react';
import { useStateValue } from "./StateProvider";
import "./Checkoutproduct.css"
function Checkoutproduct({id,title, price, image,rating}) {
    const [{ basket }, dispatch] = useStateValue();
    
    const Remove = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
        
    };


    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__image" src={image} alt=''/>
            <div className="checkoutproduct__info">
                <p>{title}</p>
                <p className="checkoutproduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="checkoutproduct__rating">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>🌟</p>
                ))}
                </div>
            <button className="checkoutproduct__button" onClick={Remove}>Remove from basket</button>
            </div>
        </div>
    )
}

export default Checkoutproduct
