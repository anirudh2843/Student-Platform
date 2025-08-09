import "./Welcome.css";
import girl from "../../assets/home.png";
import { useNavigate } from "react-router-dom";
import c from "../../assets/Programming Icons/c.png";
import cplus from "../../assets/Programming Icons/c++.png";
import python from "../../assets/Programming Icons/python.png";
import java from "../../assets/Programming Icons/java.png";
import js from "../../assets/Programming Icons/js.png";
import progress from "../../assets/progress.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="home_wrapper ">
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
      <section className="skills-section ">
        <div className="skills-section_header">
          <h3 className="skills-section_title">Programming Languages</h3>
        </div>

        <div className="skills-section_languages">
          <img src={c} alt="C" className="skills-section_icon" height={200} />
          <img
            src={cplus}
            alt="C++"
            className="skills-section_icon"
            height={200}
          />
          <img
            src={python}
            alt="Python"
            className="skills-section_icon"
            height={200}
          />
          <img
            src={java}
            alt="Java"
            className="skills-section_icon"
            height={200}
          />
          <img
            src={js}
            alt="JavaScript"
            className="skills-section_icon"
            height={200}
          />
        </div>

        <div className="skills-section_progress">
          <div className="skills-section_progress-image">
            <img src={progress} alt="Progress Tracker" height={200} />
          </div>
          <div className="skills-section_progress-text">
            TRACK YOUR PROGRESS <br /> GUIDE YOURSELF WITH OUR EXPERTS
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
