import React from "react";
import { Link } from "react-router-dom";
import "./Resetpassword.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import resetpswdpic from "../../Assets/Pictures/loginpagepic.svg";
import leftarrowforgetpswd2 from "../../Assets/Pictures/leftarrowforgetpswd.svg";

export default function ResetPassword() {
  return (
    <div className="resetpasswordmain">
      <Navbar />
      <div className="resetpswdpage">
        <div>
          <img
            className="resetpswdpic"
            src={resetpswdpic}
            alt="Login Illustration"
          />
        </div>
        <div className="resetpswdinfo">
          <h1>Reset your Password</h1>
          <p className="resetpswdpara">
            Almost done. Enter your new password and you’re good to go.
          </p>
          <div className="input-group4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="New password"
              required
            />
          </div>
          <div className="inputdatamain">
            <div className="inputdataleft">
              <ul>
                <li>Lower case</li>
                <li>Numbers.</li>
              </ul>
            </div>
            <div className="inputdataright">
              <ul>
                <li>Uppercase characters.</li>
                <li>14 characters minimum.</li>
              </ul>
            </div>
          </div>
          <div className="input-group4">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm new password"
              required
            />
          </div>
          <button className="resetpswdbtn">
            <Link to="/">RESET PASSWORD</Link>
          </button>
          <p className="returntologin2">
            <Link to="/LoginPage">
              <span>
                <img
                  className="leftarrowforgetpswd2"
                  src={leftarrowforgetpswd2}
                  alt="Left arrow"
                />
              </span>{" "}
              Return to login
            </Link>
          </p>
        </div>
      </div>

      <hr className="lastline4" />
      <Footer />
    </div>
  );
}
