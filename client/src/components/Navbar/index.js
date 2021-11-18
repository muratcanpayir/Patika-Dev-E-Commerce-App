import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const {loggedIn}=useAuth();
  console.log(loggedIn);
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate("/signup");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToProfile=()=>{
    navigate("/profile");
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">E-Commerce</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {
          !loggedIn ?
          <>
          <Button onClick={goToSignup} colorScheme="blue">
          Register
        </Button>
        <Button onClick={goToLogin} colorScheme="blue">
          Login
        </Button>
        </>
        :
        <Button onClick={goToProfile}>Profile</Button>
        }
        
      </div>
    </nav>
  );
}

export default Navbar;