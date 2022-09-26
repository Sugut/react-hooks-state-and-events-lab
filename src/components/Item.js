import React, { useState } from "react";
import items from "../data/items";

function Item({ name, category }) {
    
  const [cart, setCart]= useState(false)
    function handleClick(){
      setCart((cart) => !cart);
    }
   const cartClass= cart? "in-cart" : " "
   const btnText = cart? "Remove From Car": "Add to Cart"
      return(
        <li className={cartClass}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add" onClick={handleClick}>{btnText}</button>
      </li>
      )
    
    }



export default Item;
