import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Pictures/Screenshot_2024-05-16_120105-removebg-preview.png";
import search from "../../Assets/Pictures/search.svg";
import user from "../../Assets/Pictures/user.svg";
import heart from "../../Assets/Pictures/heart.svg";
import cart from "../../Assets/Pictures/cart.svg";
import shipping from "../../Assets/Pictures/Vector (8).svg";

export default function Navbar() {
  return (
    <div className="navbarmain">
      <div className="firstdivnavbar">
        <div className="navbaricons">
          <Link to="/">
            <img id="iconsize" src={search} alt="" />
          </Link>
          <Link to="/LoginPage">
            <img id="iconsize" src={user} alt="" />
          </Link>
          <Link to="/Wishlist">
            <img id="iconsize" src={heart} alt="" />
          </Link>
          <Link to="/Cart">
            <img id="iconsize" src={cart} alt="" />
          </Link>
          <Link to="/">
            <img id="iconsize" src={shipping} alt="" />
          </Link>
        </div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Summer Collection</Link>
          </li>
          <li>
            <Link to="/">Winter Collection</Link>
          </li>
          <li>
            <Link to="/">Azadi Collection</Link>
          </li>
          <li>
            <Link to="/">Unstitched</Link>
          </li>
          <li>
            <Link to="/">Ready to wear</Link>
          </li>
          <li>
            <Link to="/">Special for You</Link>
          </li>
          <li>
            <Link to="/">Eid Collection</Link>
          </li>
        </ul>
        {/* <button className="logoutbtn">
          <Link to="/"> Log Out </Link>
        </button> */}
      </div>
    </div>
  );
}
