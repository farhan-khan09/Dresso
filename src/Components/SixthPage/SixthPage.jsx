import React from "react";
import "./SixthPage.css";
import line3 from "../../Assets/Pictures/Frame 9218.svg";
import review1 from "../../Assets/Pictures/Frame 9315 (1).svg";
import review2 from "../../Assets/Pictures/Frame 9318 (1).svg";
import review3 from "../../Assets/Pictures/Frame 9316.svg";

export default function SixthPage() {
  return (
    <div className="sixthpagemain">
      <div className="showcollecmain3">
        <div>
          <h2 className="previouscollection3">
            {" "}
            <span>
              <img className="line3" src={line3} alt="line" />
            </span>
            Our Customers <br />
            Testimonials
          </h2>
        </div>
        <div>
          <p className="para3">
            Our Brand is very Trustful you can see some <br /> of the reviews of
            clients
          </p>
        </div>
      </div>

      <div className="reviewsmain">
        <img src={review1} alt="" />
        <img src={review2} alt="" />
        <img src={review3} alt="" />
      </div>
    </div>
  );
}
