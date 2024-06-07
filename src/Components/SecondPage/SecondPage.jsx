import React from "react";
import "aos/dist/aos.css"; // Import AOS CSS
import "./SecondPage.css";
import line from "../../Assets/Pictures/Frame 9218.svg";
import picture1 from "../../Assets/Pictures/Frame 9226.svg";
import picture2 from "../../Assets/Pictures/groupsecondpage.svg";

export default function SecondPage() {
  return (
    <div className="secondpagemain">
      <div className="newarivalmain">
        <h1>
          <span>
            <img className="line" src={line} alt="line" />
          </span>
          New Arrivals this <br /> Spring Season
        </h1>
        <h1>
          WINTER <br /> COLLECTION
        </h1>
      </div>
      <div className="picturesmain">
        <div>
          <img className="picture1" src={picture1} alt="" />
          <h3 className="yellowsuit">
            Shiny Yellow Suit <br /> Brand
          </h3>
        </div>
        <div>
          {" "}
          <img className="picture2" src={picture2} alt="" />
        </div>
      </div>
    </div>
  );
}
