import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import { About } from "./views/About";
import { Contact } from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
