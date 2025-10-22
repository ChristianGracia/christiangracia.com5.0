import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="home-container">
          <span className="name">Christian Gracia</span>
          <div className="calc-width graph animated-line"></div>
          <span className="description">
            I'm a software engineer who likes to build full stack web and mobile
            apps with React, Node.js, Angular, Java, Python, C#, React Native,
            Swift, and more.
          </span>
        </div>
        <div className="flex justify-center learn-more-container">
          <button className="hover-1">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
