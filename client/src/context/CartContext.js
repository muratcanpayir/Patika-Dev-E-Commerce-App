<<<<<<< HEAD
import { createContext, useContext, useEffect, useState } from "react";

const CartContext=createContext();

const defaultCart=JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider=({children})=>{
  const [items,setItems]=useState(defaultCart);

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(items));
  },[items])
=======
import { createContext, useContext, useState } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
  const [items,setItems]=useState([]);
>>>>>>> main

  const addToCart=((data,findCartItem)=>{  
      if(!findCartItem){
        return setItems((items)=>[data,...items])
      }
      const filtered=items.filter((item)=>item._id !== findCartItem._id);
      setItems(filtered);
  })

<<<<<<< HEAD
  const removeFromCart=(id)=>{
    const filtered=items.filter((item)=>item._id!==id);
    setItems(filtered);
  }

  const values={
    items,
    setItems,
    addToCart,
    removeFromCart,
=======
  const values={
    items,
    setItems,
    addToCart
>>>>>>> main
  }

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export const useCart=()=>useContext(CartContext);