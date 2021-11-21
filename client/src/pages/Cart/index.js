import { Alert } from '@chakra-ui/alert';
import React from 'react'
import { useCart } from '../../context/CartContext';

function Cart() {
  const {items}=useCart();
  return (
    <div>
      {
        items.length<1 && <Alert status="warning">You have no product in your cart!</Alert>
      }
    </div>
  )
}

export default Cart;
