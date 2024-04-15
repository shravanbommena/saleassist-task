import React from "react";
import { MdOutlineShoppingBag, MdSearch } from "react-icons/md";
import { FaRegUser, FaRegBookmark } from "react-icons/fa";
import "./index.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <h2 className="navbar-title">TANN TRIM</h2>
        <div className="navbar-button-group">
          <button className="navbar-button navbar-button-md">
            <MdSearch />
          </button>
          <button className="navbar-button">
            <FaRegUser />
          </button>
          <button className="navbar-button">
            <FaRegBookmark />
          </button>
          <button className="navbar-button navbar-button-md">
            <MdOutlineShoppingBag />
          </button>
        </div>
      </div>
      <div className="navbar-bottom">
        <ul className="navbar-bottom-links">
          <li className="navbar-link">Bags</li>
          <li className="navbar-link">Travel</li>
          <li className="navbar-link">Accessories</li>
          <li className="navbar-link">Gifting</li>
          <li className="navbar-link">Jewelery</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
