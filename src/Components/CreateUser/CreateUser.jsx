import React from "react";
import { Link } from "react-router-dom";
import "./CreateUser.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import createuserpagepic from "../../Assets/Pictures/loginpagepic.svg";

export default function CreateUser() {
  return (
    <div className="createusermain">
      <Navbar />
      <div className="createuserpage">
        <div>
          <img
            className="createuserpagepic"
            src={createuserpagepic}
            alt="Login Illustration"
          />
        </div>
        <div className="createuserinfo">
          <h1>Create a new account</h1>
          <p className="createuserpara">
            Already have an account?
            <span>
              <Link to="/LoginPage"> Login</Link>
            </span>
          </p>
          <form className="formmain2">
            <div className="row">
              <div className="input-group2">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="input-group2">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="row2">
              <div className="input-group2">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required />
              </div>
              <div className="input-group2">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" required />
              </div>
            </div>
            <div className="row3">
              <div className="input-group2">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" required />
              </div>
              <div className="input-group2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                />
              </div>
            </div>

            <div className="row4">
              <div className="input-group2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-group2">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
            </div>
            <div className="createbtnmain">
              <button type="submit" className="createbtn">
                CREATE
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="lastline" />
      <Footer />
    </div>
  );
}
