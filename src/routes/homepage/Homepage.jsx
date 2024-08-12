import "./homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="main-content">
        <h1>Welcome to the League of Legends homepage!</h1>
        <p>Can you guess the champions secrets?</p>
        <p>Try it for yourself</p>
        <Link className="start" to="/game">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
