import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import imagereddress from "../../Assets/Pictures/image 8.svg";
import arrowleft from "../../Assets/Pictures/left.svg";
import arrowright from "../../Assets/Pictures/right.svg";
import uturnarrow from "../../Assets/Pictures/uturnarrow.svg";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="cartmain">
        <h1>
          MY <span>CART</span>
        </h1>
        <div className="cartitem">
          <div className="leftcart">
            <div>
              <img className="imagereddress" src={imagereddress} alt="" />
            </div>
            <div className="mainimagediscriptiom">
              <div>
                <div className="carttextmain">
                  {" "}
                  <h2>
                    Plus Scroll Embroidered <br /> Belted Tunic Dress
                  </h2>
                </div>
                <div className="cartpara">
                  {" "}
                  <p>Size: Defult</p>
                  <p>Colour: Red</p>
                </div>
              </div>
              <div className="quantity">
                <p>Qty:</p>{" "}
                <span>
                  <img className="arrowleft" src={arrowleft} alt="" />
                  <h6>1</h6>
                  <img className="arrowright" src={arrowright} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="rightcart">
            <div className="paymentmain">
              <div>
                <p className="subtotal">Subtotal</p>
              </div>
              <div>
                <p className="amount">PKR 45,500</p>
              </div>
            </div>
            <div>
              <p className="taxanfdiscount">ALL TAXES & DISCOUNT CALCULTED</p>
            </div>
            <button className="buynowbtn">
              <Link to="/CartInformation"> BUY NOW</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="backbtnmain">
        <button className="backtoshopbtn">
          <Link to="/">
            <span>
              <img className="uturnarrow" src={uturnarrow} alt="" />
            </span>{" "}
            Back to Shopping
          </Link>
        </button>
      </div>
      <hr className="linebottom" />
      <Footer />
    </div>
  );
}
