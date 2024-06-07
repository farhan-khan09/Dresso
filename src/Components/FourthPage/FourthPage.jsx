import React from "react";
import { Link } from "react-router-dom";
import "./FourthPage.css";
import line from "../../Assets/Pictures/Frame 9218.svg";
import arrow from "../../Assets/Pictures/Arrow 1.svg";
import haniaamir from "../../Assets/Pictures/image 14.svg";
import mehwishhayat from "../../Assets/Pictures/female-friendship-relationships-two-girls-are-drinking-coffee-street-near-glass-office-buildings-corporation-bank-end-working-day-manager-coffee-run_100894-983 1.svg";

export default function FourthPage() {
  return (
    <div className="fourthpagemain">
      <div className="showcollecmain">
        <div>
          <h2 className="previouscollection">
            {" "}
            <span>
              <img className="line" src={line} alt="line" />
            </span>
            Last previous <br /> collection
          </h2>
        </div>
        <div>
          <p className="para">
            The lest stock from the previous season, we still <br /> provide
            last season for those of you.
          </p>
          <button className="showallbtn">
            <Link to="/">Show all collection</Link>{" "}
            <span>
              <img className="arrowimg" src={arrow} alt="" />
            </span>{" "}
          </button>
        </div>
      </div>

      <div className="twoimages">
        <div>
          <img src={haniaamir} alt="" />
          <p>Previous winter screen</p>
        </div>
        <div>
          <img src={mehwishhayat} alt="" />
          <p>Previous Summer screen</p>
        </div>
      </div>
    </div>
  );
}
