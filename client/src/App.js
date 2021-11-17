import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";

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
            <Route path="/profile" element={(
              <ProtectedRoute />
            )} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
