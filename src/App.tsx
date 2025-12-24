import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import Header from "./components/Header";
import { SITE_THEME } from "./enums/enums";

function App() {
  const handleChangeTheme = (isDarkModeEnabled: boolean) => {
    console.log(isDarkModeEnabled);
    if (isDarkModeEnabled) {
      localStorage.setItem(SITE_THEME.DARK, "true");
    } else {
      localStorage.removeItem(SITE_THEME.DARK);
    }
  };
  return (
    <>
      <Header handleChangeTheme={handleChangeTheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
