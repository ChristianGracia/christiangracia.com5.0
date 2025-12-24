import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import Header from "./components/Header";
import { SITE_THEME } from "./enums/enums";
import {
  Box,
  createTheme,
  ThemeProvider,
  useColorScheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import type { PaletteMode } from "@mui/material/styles";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const itemInStorage = localStorage?.getItem(SITE_THEME.DARK);
  console.log("item in storage: " + itemInStorage);
  const isPrefSet = localStorage?.getItem(SITE_THEME.DARK) === "true";
  console.log("is dark mode set: " + isPrefSet);
  console.log("user preferences: " + prefersDarkMode);
  const [isDarkMode, setIsDarkMode] = useState(
    isPrefSet ? true : prefersDarkMode
  );

  const { mode, setMode } = useColorScheme();
  // if (!mode) {
  //   return null;
  // }

  const handleChangeTheme = (isDarkModeEnabled: boolean) => {
    console.log(isDarkModeEnabled);
    setIsDarkMode(isDarkModeEnabled);
    setMode(!isDarkModeEnabled ? "light" : "dark");
    if (isDarkModeEnabled) {
      localStorage.setItem(SITE_THEME.DARK, "true");
    } else {
      localStorage.removeItem(SITE_THEME.DARK);
    }
  };

  const appTheme = createTheme({
    palette: {
      mode: (isDarkMode ? SITE_THEME.DARK : SITE_THEME.LIGHT) as PaletteMode,
    },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#FF5733",
          },
          // ...other tokens
        },
      },
      dark: {
        palette: {
          primary: {
            main: "#E0C2FF",
          },
          // ...other tokens
        },
      },
    },
  });

  return (
    <ThemeProvider theme={appTheme} defaultMode={"dark"}>
      <Header
        handleChangeTheme={handleChangeTheme}
        isDarkModeEnabled={isDarkMode}
      />
      <Box sx={{ bgcolor: "primary.main" }}>text</Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
