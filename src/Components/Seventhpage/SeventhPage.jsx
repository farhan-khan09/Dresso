import React from "react";
import { Link } from "react-router-dom";
import "./SeventhPage.css";
import line4 from "../../Assets/Pictures/Frame 9218.svg";

export default function SeventhPage() {
  return (
    <div className="seventhpagemain">
      <div className="showcollecmain4">
        <div>
          <h2 className="previouscollection4">
            {" "}
            <span>
              <img className="line4" src={line4} alt="line" />
            </span>
            Join Our Community
          </h2>
        </div>
        <div>
          <p className="para4">
            Community is the heart of belonging, where individuals come together
            in <br /> unity, support, and shared purpose, fostering connection
            and collective <br /> strength."
          </p>
        </div>
      </div>
      <div className="emailsignupbtns">
        <button className="emailbtn">
          <Link to="/"> Add Your Email Here</Link>
        </button>
        <button className="signupbtn">
          <Link to="/">Sign Up</Link>{" "}
        </button>
      </div>
    </div>
  );
}
