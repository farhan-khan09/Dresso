import React from "react";
import "./MainLandingpage.css";
import Navbar from "../Navbar/Navbar";
import MainVedio from "../MainVedio/MainVedio";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPage/SecondPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import FourthPage from "../FourthPage/FourthPage";
import FifthPage from "../FifthPage/FifthPage";
import SixthPage from "../SixthPage/SixthPage";
import SeventhPage from "../Seventhpage/SeventhPage";
import Footer from "../Footer/Footer";
export default function MainLandingpage() {
  return (
    <div>
      <Navbar />
      <MainVedio />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <Footer />
    </div>
  );
}
