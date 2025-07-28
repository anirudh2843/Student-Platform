import "./Navbar.css";
import image from "../../assets/image.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigator = useNavigate();
  return (
    <div>
      <nav className="nav_wrapper">
        <div className="logo_wrapper">
          <a href="#">
            <img src={image} alt="" />
          </a>
        </div>
        <div className="links_wrapper">
          <a href="">Home</a>
          <a href="">Courses</a>
          <a href="">Popular</a>
          <a href="">Instructor</a>
          <a href="">Contact Us</a>
        </div>
        <div className="btn_wrapper">
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className="buttons">
            <button className="login" onClick={() => navigator("/login")}>
              Login
            </button>
            <button className="signup" onClick={() => navigator("/signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
