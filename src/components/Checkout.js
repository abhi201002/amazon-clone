import React from 'react'
import { useDataValue } from './Datalayer'
import Subtotal from './Subtotal'
import Item from './Item'
import "./checkout.css"

function Checkout() {
  const [{cart},dispatch] = useDataValue();
  return (
    <div className="Checkout">
      <div className="cart">
        <div className="ad">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/December/Getfitdays/Topbanner/Final1/1500x300_rec.jpg" alt="" />
        </div>
        <div className="cart_items">
          <h1>Shopping Cart</h1>
          <br />
          <hr />
          <br />
          {cart?.length ? cart.map((items) =>{
            return (
            <>
            <Item id = {items.id} name = {items.name} price = {items.price} img = {items.img}/>
            <hr />
            </>
            )
          })
          :
          <h4>Cart is Empty</h4>
        }
        </div>
      </div>
      <div className="subtotal">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout