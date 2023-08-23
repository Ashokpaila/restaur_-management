import React, { useState } from 'react';
import './stylings.css';
import Button from 'react-bootstrap/Button';
import App from './App';
const MenuItems =(props)=>{
    const [menuItems,setMenuItems]= useState([{ id: 1, name: 'Burger', description: 'Delicious burger with all the fixings', price: 199 },
    { id: 2, name: 'Pasta', description: 'Pasta with homemade sauce', price: 299 },
    { id: 3, name: 'Biryani', description: 'Fragrant rice dish with tender meat and aromatic spices', price: 149 },
    { id: 4, name: 'Roti', description: 'Freshly baked Indian flatbread', price: 249 },
    { id: 5, name: 'Thali', description: 'Assortment of different dishes served on a platter', price: 199 },]);
    const [cartItem, setCartItem] = useState([]);

  const removeItem = (itemId) => {
    const updatedCart = cartItem.filter(item => item.id !== itemId);
    setCartItem(updatedCart);
  };
const totalPrice = cartItem.reduceRight((total,array)=>total+array.price,0)
const [message,setMessage]= useState(false)
const finalOrder=()=>{
  setMessage(true);
let finalOrderSummary= cartItem
props.handleCustomerOrder(finalOrderSummary);

}
  return (
    <div className="menu-display">
      <div className="left-section">
        <h2>Menu</h2>
        <div className="menu-items">
          {menuItems.map(menuItem => (
            <div key={menuItem.id} className="menu-item">
              <div className="menu-item-details">
                <h3>{menuItem.name}</h3>
                <p>{menuItem.description}</p>
                <p>Price: {menuItem.price} Rs</p>
              </div>
              <Button className="btn btn-primary btn-lg" onClick={() => setCartItem([...cartItem, menuItem])}>Add</Button>
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
      {message ? (<h2>The food will be served to you in few minutes. Please wait...</h2>) : ( 
      <div><h2>Cart</h2>
        <div className="menu-items">
          {cartItem.map(it => (
            <div key={it.id} className="menu-item">
              <div>{it.name}</div>
              <div>Rs. {it.price}</div>
              <Button className="btn btn-primary btn-lg" onClick={() => removeItem(it.id)}>Remove</Button>
            </div>
          ))}
          {totalPrice !==0 ? (<div className="menu-item">
          <div >Total: </div>
          <div> Rs. {totalPrice}</div>
          <Button onClick={finalOrder} className="btn btn-primary btn-lg" >Confirm Order</Button> 
          </div> ) : null}
        </div>
        </div>)}
         
      </div>
    </div>
  );
};

export default MenuItems;