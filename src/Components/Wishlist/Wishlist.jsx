import React from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import image8 from "../../Assets/Pictures/image 8.svg";
import image9 from "../../Assets/Pictures/image 9.svg";
import newlogo from "../../Assets/Pictures/clarity_new-line.svg";

export default function Wishlist() {
  return (
    <div className="Wishlistmain">
      <Navbar />
      <div className="mainwishlistitems">
        <h1>
          MY <span>WISHLIST</span>{" "}
        </h1>
      </div>
      <div className="wishlistpics">
        <div>
          <img className="image8" src={image8} alt="" />
          <div className="discriptionmain">
            <div className="imagediscription">
              <p>
                Plus Scroll Embroidered <br /> Belted Tunic Dress
              </p>
              <img className="newlogo" src={newlogo} alt="" />
            </div>
            <div className="sizeandprice">
              <div>
                <h6>Size: XS M S</h6>
              </div>
              <div>
                <p>PKR 45.500</p>
              </div>
            </div>
            <button className="addtocart">
              <Link to="/Cart">ADD TO CART</Link>
            </button>
          </div>
        </div>
        <div>
          <img className="image9" src={image9} alt="" />
          <div className="discriptionmain">
            <div className="imagediscription">
              <p>
                Plus Scroll Embroidered <br /> Belted Tunic Dress
              </p>
              <img className="newlogo" src={newlogo} alt="" />
            </div>
            <div className="sizeandprice">
              <div>
                <h6>Size: XS M S</h6>
              </div>
              <div>
                <p>PKR 45.500</p>
              </div>
            </div>
            <button className="addtocart">
              <Link to="/Cart">ADD TO CART</Link>
            </button>
          </div>
        </div>
      </div>
      <hr className="linebottom" />
      <Footer />
    </div>
  );
}
