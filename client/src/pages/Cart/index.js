import { Button, Alert, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { items, removeFromCart } = useCart();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <Box p="5">
      {items.length < 1 && (
        <Alert status="warning">You have no product in your cart!</Alert>
      )}
      {items.length > 0 && (
        <>
          <ul style={{listStyleType:"decimal"}}> 
            {items.map((item) => (
              <li key={item._id} style={{ marginBottom: 15 }}>
                <Link to={`/product/${item._id}`}>
                  {item.title} {item.price} TL
                  <Image
                    htmlWidth={200}
                    src={item.photos[0]}
                    alt={item.title}
                  />
                </Link>
                <Button
                  mt="2"
                  size="sm"
                  colorScheme="pink"
                  onClick={() => {
                    removeFromCart(item._id);
                  }}
                >
                  Remove From Cart
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10">
            <Text fontSize="22">Total: {total} TL</Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Cart;
