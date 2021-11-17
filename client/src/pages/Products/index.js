import React from "react";
import Card from "../../components/Card";
import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";
import { getProducts } from "../../helpers/api";

function Products() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", getProducts, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 12;
      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });
  if (status === "loading") return "Loading...";
  if (status === "error") return "error has occured" + error.message;
  return (
    <div>
      <Grid templateColumns="repeat(3,1fr)">
        {data.pages.map((group, index) => (
          <React.Fragment key={index}>
            {group.map((item) => (
              <Box w="100%" key={item._id}>
                <Card item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex justifyContent="center" mt="10">
        <div>
          <Button
            isLoading={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </Button>
        </div>
      </Flex>
    </div>
  );
}

export default Products;
