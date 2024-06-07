import "aos/dist/aos.css"; // Import AOS CSS
import "./FirstPage.css";
import line from "../../Assets/Pictures/Frame 9218.svg";
import firstpageimage1 from "../../Assets/Pictures/image 10.svg";
import firstpageimage2 from "../../Assets/Pictures/young-stylish-woman-chair_136403-2331 1.svg";
import firstpageimage3 from "../../Assets/Pictures/image 11.svg";

export default function FirstPage() {
  return (
    <>
      <div className="firstbodymain">
        <h1>
          <span>
            <img className="line" src={line} alt="line" />
          </span>
          Welcome to DRESSO <br /> Where Fashion Meets <br /> Comfort!
        </h1>
        <div>
          <p>
            Step into the world of DRESSO, where style is <br /> synonymous with
            comfort. Discover our latest <br /> collection designed to elevate
            your wardrobe with <br /> trendy and cozy essentials
          </p>
        </div>

        <div className="threeimgs">
          <img className="sideimgs" src={firstpageimage1} alt="" />
          <img className="centerimg" src={firstpageimage2} alt="" />
          <img className="sideimgs" src={firstpageimage3} alt="" />
        </div>
      </div>
    </>
  );
}
