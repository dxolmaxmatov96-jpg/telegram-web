import React from 'react'
import './cart.css'
import Button from '../card/button'
import { totalPrice } from '../units/total-price'
export const Cart = ({ cartItems , onCheckout}) => {

    return (
        <div className='cart__container'>
            <p>
                Umumiy narx: {' '}    
                 {totalPrice(cartItems).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
              
            </p>

            <Button 
            title={`${cartItems.length === 0 ? 'Buyurtma berish' : "To'lov"}`} disable={cartItems.length === 0 ? true : false}  type={'checkout'} onClick={onCheckout} />
        </div>
    )
}
