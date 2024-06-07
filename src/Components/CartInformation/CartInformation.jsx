import React from "react";
import { Link } from "react-router-dom";
import lineinfo from "../../Assets/Pictures/Line 46.svg";
import logoinfopage from "../../Assets/Pictures/Screenshot_2024-05-16_120105-removebg-preview.png";
import reddress from "../../Assets/Pictures/infoimgsidebar.svg";
import sidebarimgnotification from "../../Assets/Pictures/sidebarimgnotification.svg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./CartInformation.css";

export default function CartInformation() {
  return (
    <div>
      <Navbar />
      <div className="maincartinfopage">
        <div>
          <img className="logoinfopage" src={logoinfopage} alt="" />
          <div className="infonav">
            <ul>
              <li>
                <Link to="/">Cart</Link>
              </li>
              <li>
                <Link to="/">Information</Link>
              </li>
              <li>
                <Link to="/">Shipping</Link>
              </li>
              <li>
                <Link to="/">Payment</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="infosidebar">
          <div>
            <span>
              <span className="notificationsnumber">1</span>
              <img
                className="sidebarimgnotification"
                src={sidebarimgnotification}
                alt=""
              />
            </span>
            <img className="reddress" src={reddress} alt="" />
          </div>
          <div>
            <h2>
              Plus Scroll Embroidered <br /> Belted Tunic Dress
            </h2>

            <p className="dresscolor">Colour Red</p>
            <img className="lineinfo" src={lineinfo} alt="" />
            <div className="pricemain">
              <p>Sub Total</p>
              <p>PKR 45,500</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contactinfo">
        <h1 className="contact">Contact</h1>
        <div className="emailinputcartinfo">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <h3 className="emailme">
          Email me{" "}
          <span>
            <input type="checkbox" />
          </span>
        </h3>
        <h3 className="shippingaddress">Shipping Address</h3>
        <div class="dropdown-container">
          <label for="cities">Select a city:</label>
          <select id="cities" name="cities">
            <option value="abad">Abad</option>
            <option value="abbottabad">Abbottabad</option>
            <option value="ahmedpur">Ahmedpur</option>
            <option value="attock">Attock</option>
            <option value="bahawalnagar">Bahawalnagar</option>
            <option value="bahawalpur">Bahawalpur</option>
            <option value="bannu">Bannu</option>
            <option value="bhimber">Bhimber</option>
            <option value="burewala">Burewala</option>
            <option value="chakwal">Chakwal</option>
            <option value="charsadda">Charsadda</option>
            <option value="chitral">Chitral</option>
            <option value="dadu">Dadu</option>
            <option value="dera_ghazi_khan">Dera Ghazi Khan</option>
            <option value="dera_ismaeel_khan">Dera Ismaeel Khan</option>
            <option value="faisalabad">Faisalabad</option>
            <option value="gilgit">Gilgit</option>
            <option value="gwadar">Gwadar</option>
            <option value="gujranwala">Gujranwala</option>
            <option value="gujrat">Gujrat</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="islamabad">Islamabad</option>
            <option value="jacobabad">Jacobabad</option>
            <option value="jhang">Jhang</option>
            <option value="jehlum">Jehlum</option>
            <option value="karachi">Karachi</option>
            <option value="kasur">Kasur</option>
            <option value="khanewal">Khanewal</option>
            <option value="kohat">Kohat</option>
            <option value="kotli">Kotli</option>
            <option value="lahore">Lahore</option>
            <option value="larkana">Larkana</option>
            <option value="lodhran">Lodhran</option>
            <option value="malakand">Malakand</option>
            <option value="mardan">Mardan</option>
            <option value="mirpur">Mirpur</option>
            <option value="multan">Multan</option>
            <option value="muzaffarabad">Muzaffarabad</option>
            <option value="muzaffargarh">Muzaffargarh</option>
            <option value="nawabshah">Nawabshah</option>
            <option value="nowshera">Nowshera</option>
            <option value="okara">Okara</option>
            <option value="peshawar">Peshawar</option>
            <option value="quetta">Quetta</option>
            <option value="rahim_yar_khan">Rahim Yar Khan</option>
            <option value="rawalpindi">Rawalpindi</option>
            <option value="sahiwal">Sahiwal</option>
            <option value="sargodha">Sargodha</option>
            <option value="sheikhupura">Sheikhupura</option>
            <option value="sialkot">Sialkot</option>
            <option value="sukkur">Sukkur</option>
            <option value="swat">Swat</option>
            <option value="tando_allahyar">Tando Allahyar</option>
            <option value="thatta">Thatta</option>
            <option value="vehari">Vehari</option>
            <option value="zhob">Zhob</option>
          </select>
        </div>
        <div className="informationinputsmain">
          <div className="firstrow">
            <div className="fname">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="lname">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="address">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              required
            />
          </div>
          <div className="secondrow">
            <div className="city">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="postalcode">
              <label htmlFor="postalcode">Postal Code</label>
              <input type="text" id="postalcode" name="postalcode" required />
            </div>
          </div>
          <div className="phone">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              required
            />
          </div>
          <p className="caution">Please enter correct number</p>
          <div className="conitnuebtnmain">
            <button className="continuebtn">
              <Link to="/Shipping">Continue</Link>
            </button>
          </div>
        </div>
      </div>
      <hr className="lastlinecartinfo" />
      <Footer />
    </div>
  );
}
