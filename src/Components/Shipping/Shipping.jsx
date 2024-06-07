import React from "react";
import { Link } from "react-router-dom";
import lineinfo from "../../Assets/Pictures/Line 46.svg";
import shippingpage from "../../Assets/Pictures/Screenshot_2024-05-16_120105-removebg-preview.png";
import reddress2 from "../../Assets/Pictures/infoimgsidebar.svg";
import recycle from "../../Assets/Pictures/recycle.svg";
import sidebarimgnotification2 from "../../Assets/Pictures/sidebarimgnotification.svg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Shipping.css";

export default function Shipping() {
  return (
    <div>
      <Navbar />
      <div className="mainshipping">
        <div>
          <img className="shippingpage" src={shippingpage} alt="" />
          <div className="shippinginfo">
            <ul>
              <li>
                <Link to="/">Cart</Link>
              </li>
              <li>
                <Link to="/">Information</Link>
              </li>
              <li>
                <Link to="/">Shipping</Link>
              </li>
              <li>
                <Link to="/">Payment</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="shippingsidebar">
          <div>
            <span>
              <span className="notificationsnumber2">1</span>
              <img
                className="sidebarimgnotification2"
                src={sidebarimgnotification2}
                alt=""
              />
            </span>
            <img className="reddress2" src={reddress2} alt="" />
          </div>
          <div>
            <h2>
              Plus Scroll Embroidered <br /> Belted Tunic Dress
            </h2>

            <p className="dresscolor2">Colour Red</p>
            <img className="lineinfo2" src={lineinfo} alt="" />
            <div className="pricemain2">
              <p>Sub Total</p>
              <p>PKR 45,500</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shippingdetails">
        <p>
          <span>Contact:</span> shamskayani12@gmail.com{" "}
          <span>
            <img className="recycle" src={recycle} alt="" />
          </span>
        </p>
        <p>
          <span>Ship to:</span> shamskayani12@gmail.com{" "}
          <span>
            <img className="recycle" src={recycle} alt="" />
          </span>
        </p>
        <h3 className="shippingmethod">Shipping Method</h3>
        <p>Standard</p>
        <div className="continuetomainbtn">
          <button className="continuemainbutton">
            <Link to="/Payment">Continue to payment</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
