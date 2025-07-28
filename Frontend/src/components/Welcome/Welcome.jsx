import "./Welcome.css";
import girl from "../../assets/home.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home_wrapper">
      <div className="top">
        <div className="left">
          <h1>
            Quality <span>Education</span> By Any Means Necessary.
          </h1>
          <button className="signup" onClick={() => navigate("/signup")}>
            Get Started
          </button>
        </div>
        <div className="right">
          <img src={girl} alt="girl" />
          <div className="border"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
