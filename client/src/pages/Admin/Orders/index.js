import React from "react";
import { useQuery } from "react-query";
import { getOrders } from "../../../helpers/api";

function Orders() {
  const { isLoading, isError, data, error } = useQuery(
    "admin:orders",
    getOrders
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {error}</div>;
  }
  return <div>Admin Orders</div>;
}

export default Orders;
