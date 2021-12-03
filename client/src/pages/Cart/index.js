<<<<<<< HEAD
import { Button, Alert, Image, Box, Text } from "@chakra-ui/react";
=======
import { Alert } from "@chakra-ui/alert";
import { Image } from "@chakra-ui/image";
>>>>>>> main
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {
<<<<<<< HEAD
  const { items, removeFromCart } = useCart();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <Box p="5">
=======
  const { items } = useCart();
  return (
    <div>
>>>>>>> main
      {items.length < 1 && (
        <Alert status="warning">You have no product in your cart!</Alert>
      )}
      {items.length > 0 && (
        <>
<<<<<<< HEAD
          <ul style={{listStyleType:"decimal"}}> 
            {items.map((item) => (
              <li key={item._id} style={{ marginBottom: 15 }}>
=======
          <ul>
            {items.map((item) => (
              <li key={item._id}>
>>>>>>> main
                <Link to={`/product/${item._id}`}>
                  {item.title} {item.price} TL
                  <Image
                    htmlWidth={200}
                    src={item.photos[0]}
                    alt={item.title}
                  />
                </Link>
<<<<<<< HEAD
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
=======
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
>>>>>>> main
  );
}

export default Cart;
