import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import moment from "moment";
import {useNavigate} from "react-router-dom";

function Card({item}) {
  const navigate=useNavigate();
  const goProductDetails=()=>{
    navigate(`/product/${item._id}`);
  }
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Box onClick={goProductDetails}>
        <Image src={item.photos[0]} alt={item.title} />
        <Box p="6">
          <Box d="flex" alignItems="center">
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4">
            {item.title}
          </Box>
          <Box>{item.price}</Box>
        </Box>
      </Box>
      <Button colorScheme="messenger">
        Add To Cart
      </Button>
    </Box>
  );
}

export default Card;
