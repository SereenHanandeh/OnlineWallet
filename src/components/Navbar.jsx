import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // حالة لتتبع إذا كان المستخدم قد سجل الدخول أم لا

  const handleLogout = () => {
    setIsLoggedIn(false); // عند تسجيل الخروج يتم تعيين الحالة كـ false
    navigate("/"); // العودة إلى صفحة تسجيل الدخول
  };

  return (
    <nav className="navbar">
      <h2>Wallet App</h2>
      <ul>
        {/* إذا كان المستخدم قد سجل الدخول */}
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
