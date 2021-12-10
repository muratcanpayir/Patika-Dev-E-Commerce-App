import React from 'react'
import { Link,Navigate } from 'react-router-dom';
import {useAuth} from "../../context/AuthContext";

function Admin() {
  const {user}=useAuth();
  return (
    user.role==="admin" ?
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
    :
    <Navigate to="/"/>
  )
}

export default Admin;
