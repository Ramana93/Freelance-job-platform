import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🔥 GigFinder</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/saved">Saved Gigs</Link>
        <Link to="/available">Available Gigs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
