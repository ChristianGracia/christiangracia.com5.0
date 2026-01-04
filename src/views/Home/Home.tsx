import { Button } from "@mui/material";
import { type FC } from "react";
import { Link } from "react-router";

const Home: FC = () => {
  return (
    <>
      <div className="home-container">
        <span className="name">Christian Gracia</span>
        {/* <div className="calc-width graph animated-line"></div> */}
        <span className="description">
          I'm a software engineer who likes to build full stack web and mobile
          apps with React, Node.js, Angular, Java, Python, C#, React Native,
          Swift, and more.
        </span>
      </div>
      <div className="flex justify-center learn-more-container">
        <Button>
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </>
  );
};

export default Home;
