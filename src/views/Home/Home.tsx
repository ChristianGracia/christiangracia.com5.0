import { type FC } from "react";

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
        <button
        // (click)="goToAboutPage()"
        // className="hover-1"
        // mat-raised-button
        // color="accent"
        >
          Learn More
        </button>
      </div>
    </>
  );
};

export default Home;
