import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ProtectedRoute from "./pages/ProtectedRoute";
import Cart from "./pages/Cart";
<<<<<<< HEAD
import Error404 from "./pages/Error404";
=======
>>>>>>> main

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:product_id" element={<ProductDetails />} />
            <Route path="/profile" element={<ProtectedRoute />} />
            <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
            <Route path="*" element={<Error404 />}/>
=======
>>>>>>> main
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
