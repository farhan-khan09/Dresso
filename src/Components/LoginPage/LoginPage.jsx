import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import loginpagepic from "../../Assets/Pictures/loginpagepic.svg";
import linelogin from "../../Assets/Pictures/Line 45 (1).svg";

export default function LoginPage() {
  return (
    <div className="loginmain">
      <Navbar />
      <div className="loginpage">
        <div>
          <img
            className="loginpagepic"
            src={loginpagepic}
            alt="Login Illustration"
          />
        </div>
        <div className="loginformmain">
          <h1>Hello! Welcome back!</h1>
          <p className="loginpara">
            Log in with your data that you entered during your <br />
            registration.
          </p>
          <form className="formmain">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <p className="forgetpswd">
              <Link to="/ForgetPassword">Forget Password</Link>
            </p>
            <button type="submit" className="loginbtn">
              LOGIN
            </button>
          </form>
          <div className="linemain">
            <img className="linelogin" src={linelogin} alt="" />
            <p>or</p>
            <img className="linelogin" src={linelogin} alt="" />
          </div>
          <h3 className="createaccount">
            <Link to="/CreateUser">Create Account</Link>
          </h3>
          <p className="privacypolicylogin">
            Privacy Policy & Terms and Conditions
          </p>
        </div>
      </div>
      <hr className="lastline" />
      <Footer />
    </div>
  );
}
