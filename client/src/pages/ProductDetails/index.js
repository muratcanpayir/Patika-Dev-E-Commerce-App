import { useQuery } from "react-query";
import React from "react";
import { useParams } from "react-router";
import { getProductDetails } from "../../helpers/api";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";

function ProductDetails() {
  const { product_id } = useParams();
  const { isLoading, IsError, data } = useQuery(["products", product_id], () =>
    getProductDetails(product_id)
  );
  if (isLoading) return "Loading....";
  if (IsError) return "error has occured" + IsError.message;
  const images=data.photos.map((url)=>({original:url}))
  return (
    <div>
      <Button colorScheme="orange">Buy</Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      <Box margin="10">
        <ImageGallery items={images}/>
      </Box>
    </div>
  );
}

export default ProductDetails;
