import React from "react";
import { Link } from "react-router-dom";
import "./ForgetPassword.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import forgetpswdpic from "../../Assets/Pictures/loginpagepic.svg";
import leftarrowforgetpswd from "../../Assets/Pictures/leftarrowforgetpswd.svg";

export default function ForgetPassword() {
  return (
    <div className="forgetpasswordmain">
      <Navbar />
      <div className="forgetpswdpage">
        <div>
          <img
            className="forgetpswdpic"
            src={forgetpswdpic}
            alt="Login Illustration"
          />
        </div>
        <div className="forgetpswdinfo">
          <h1>Forget Password</h1>
          <p className="forgetpswdpara">
            All good. Enter your account’s email address and we’ll <br /> send
            you a link to reset your password.
          </p>
          <div className="input-group3">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              required
            />
          </div>
          <button className="resetbtn">
            <Link to="/"> RESET LINK</Link>
          </button>
          <p className="returntologin">
            <Link to="/LoginPage">
              <span>
                <img
                  className="leftarrowforgetpswd"
                  src={leftarrowforgetpswd}
                  alt=""
                />
              </span>{" "}
              Retrun to login
            </Link>
          </p>
        </div>
      </div>

      <hr className="lastline3" />
      <Footer />
    </div>
  );
}
