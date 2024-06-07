import React from "react";
import { Link } from "react-router-dom";
import "./FifthPage.css";
import line2 from "../../Assets/Pictures/Frame 9218.svg";
import arrow2 from "../../Assets/Pictures/Arrow 1.svg";
import slidingpics from "../../Assets/Pictures/Group 48095403 (1).svg";
export default function FifthPage() {
  return (
    <div className="fifthpagemain">
      <div className="showcollecmain2">
        <div>
          <h2 className="previouscollection2">
            {" "}
            <span>
              <img className="line2" src={line2} alt="line" />
            </span>
            Top Look Brand 2023
          </h2>
        </div>
        <div>
          <p className="para2">
            The lest stock from the previous season, we still <br /> provide
            last season for those of you.
          </p>
          <button className="showallbtn2">
            <Link to="/">Show all collection</Link>{" "}
            <span>
              <img className="arrowimg2" src={arrow2} alt="" />
            </span>{" "}
          </button>
        </div>
      </div>

      <div>
        <img className="slidingpics" src={slidingpics} alt="" />
      </div>
    </div>
  );
}
