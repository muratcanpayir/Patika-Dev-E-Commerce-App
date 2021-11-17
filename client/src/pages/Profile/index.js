import React from 'react'
import { useAuth } from '../../context/AuthContext';
import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

function Profile() {
  const {user,logout} =useAuth();
  const navigate=useNavigate()
  
  const handleLogout=async()=>{
    logout(()=>{
      navigate("/");
    });
  }
  return (
    <div>
      
      <br></br>
      <Button colorScheme="red" variant="solid" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}

export default Profile;
