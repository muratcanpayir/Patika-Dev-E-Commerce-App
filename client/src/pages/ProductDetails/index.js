import { useQuery } from "react-query";
import React from "react";
import { useParams } from "react-router";
import { getProductDetails } from "../../helpers/api";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const { product_id } = useParams();
  const { addToCart, items } = useCart();
  const { isLoading, IsError, data } = useQuery(["products", product_id], () =>
    getProductDetails(product_id)
  );
  if (isLoading) return "Loading....";
  if (IsError) return "error has occured" + IsError.message;

  const findCartItem = items.find((item) => item._id === product_id);
  const images = data.photos.map((url) => ({ original: url }));
  return (
    <div>
      <Button colorScheme={findCartItem ? "pink" : "green"} onClick={() => addToCart(data,findCartItem)}>
        {findCartItem ? "Remove From Cart" : "Add To Cart"}
      </Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetails;
