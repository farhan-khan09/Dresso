import React from "react";
import { Link } from "react-router-dom";
import lineinfo from "../../Assets/Pictures/Line 46.svg";
import paymentpage from "../../Assets/Pictures/Screenshot_2024-05-16_120105-removebg-preview.png";
import reddress3 from "../../Assets/Pictures/infoimgsidebar.svg";
import recycle2 from "../../Assets/Pictures/recycle.svg";
import sidebarimgnotification3 from "../../Assets/Pictures/sidebarimgnotification.svg";
// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Payment.css";

export default function Payment() {
  return (
    <div>
      <Navbar />
      <div className="paymentmain">
        <div>
          <img className="paymentpage" src={paymentpage} alt="" />
          <div className="paymentinfo">
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
        <div className="paymentsidebar">
          <div>
            <span>
              <span className="notificationsnumber3">1</span>
              <img
                className="sidebarimgnotification3"
                src={sidebarimgnotification3}
                alt=""
              />
            </span>
            <img className="reddress3" src={reddress3} alt="" />
          </div>
          <div>
            <h2>
              Plus Scroll Embroidered <br /> Belted Tunic Dress
            </h2>

            <p className="dresscolor3">Colour Red</p>
            <img className="lineinfo3" src={lineinfo} alt="" />
            <div className="pricemain3">
              <p>Sub Total</p>
              <p>PKR 45,500</p>
            </div>
          </div>
        </div>
      </div>
      <div className="paymentinfodetail">
        <p>
          <span>Contact:</span> shamskayani12@gmail.com{" "}
          <span>
            <img className="recycle2" src={recycle2} alt="" />
          </span>
        </p>
        <hr />
        <p>
          <span>Ship to:</span> shamskayani12@gmail.com{" "}
          <span>
            <img className="recycle2" src={recycle2} alt="" />
          </span>
        </p>
        <hr />
        <h6 className="shippingmethod2">
          <span>
            Shipping <br /> Method:
          </span>{" "}
          Standard
        </h6>
      </div>
      <div className="paymenttransactionmain">
        <p className="paymentara">Payment</p>
        <p>All transction are encrypted</p>
      </div>
      <div className="codmain">
        <p>
          <span>
            <input type="checkbox" />
          </span>{" "}
          Cash on Delivery
        </p>
        <p>
          <span>
            <input type="checkbox" />
          </span>
          Credit/Debit Card
        </p>
      </div>
    </div>
  );
}
