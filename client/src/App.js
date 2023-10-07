import { useState } from "react";
import Nav from "./components/Nav";
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Home from "./components/Home";
import Expereince from "./components/Expereince";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Review from "./components/Review";
import LoanCalculator from "./components/LoanCalculator";
import Money from "./components/Money";
import Footer from "./components/Footer";
import Quality from "./components/QualityService";

function App() {
  // State to manage the theme mode (light/dark)
  const [mode, setMode] = useState("light");

  // Create a dark theme based on the selected mode
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    // Wrap the entire application in the dark theme provider
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* Render the navigation component */}
        <Nav setMode={setMode} mode={mode} />
        <br />
        <br />
        {/* Render various components for the website */}
        <Home />
        <br />
        <br />
        <Steps />
        <br />
        <br />
        <LoanCalculator />
        <br />
        <br />
        <Services />
        <br />
        <br />
        <Expereince />
        <br />
        <br />
        <Money />
        <br />
        <br />
        <Quality />
        <br />
        <br />
        <Review />
        <br />
        <br />
        {/* Render the footer component */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
