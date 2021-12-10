import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Box } from "@chakra-ui/react";
import "./styles.css";

function Admin() {
  const { user } = useAuth();
  return user.role === "admin" ? (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Box mt="10">
        <Outlet />
      </Box>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Admin;
