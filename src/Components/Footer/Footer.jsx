import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logofooter from "../../Assets/Pictures/Screenshot_2024-05-16_120105-removebg-preview.png";
import facebooklogo from "../../Assets/Pictures/Vector (6).svg";
import instalogo from "../../Assets/Pictures/Group.svg";
import twitterlogo from "../../Assets/Pictures/Vector (7).svg";
import linkdinlogo from "../../Assets/Pictures/Group (1).svg";

export default function Footer() {
  return (
    <div>
      <div className="footermain">
        <div className="leftfooter">
          <div className="logosmainfooter">
            <img src={facebooklogo} alt="" />
            <img src={instalogo} alt="" />
            <img src={twitterlogo} alt="" />
            <img src={linkdinlogo} alt="" />
          </div>
          <div>
            <img className="logofooter" src={logofooter} alt="" />
          </div>
          <div>
            5.5 KM, Raiwind Road (Near Fatehbad Village) <br />
            Lahore, Pakistan.
          </div>
          <div className="phoneemailfooter">
            <ul>
              <li>
                <Link to="/">+92 (42) 111 627422</Link>{" "}
              </li>
              <li>
                <Link to="/">www.dresso.store</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="rightfooter">
          <div className="mainvarities">
            <ul>
              <li className="footerheading">Varieties</li>
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
                <Link to="/">Unstiched</Link>
              </li>
              <li>
                <Link to="/">Ready to wear</Link>
              </li>
              <li>
                <Link to="/">Special for you</Link>
              </li>
              <li>
                <Link to="/">Eid Collection</Link>
              </li>
            </ul>
          </div>
          <div className="mainsubscription">
            <ul>
              {" "}
              <li className="footerheading">Subscription</li>
              <li>
                <Link to="/">Customer Care</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Carrier</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="maininformation">
            <ul>
              {" "}
              <li className="footerheading">Information</li>
              <li>
                <Link to="/">Return & Exchange</Link>
              </li>
              <li>
                <Link to="/">Privacy & Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrightbar">
        <p>Copyright © 2021 Brands Benchmarked Ltd</p>
      </div>
    </div>
  );
}
