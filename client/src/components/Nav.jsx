import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme } from "@mui/material/styles";
import logo from "../images/Logo.png";
import { Container } from "react-bootstrap";

// Nav component with dark/light mode toggle
const Nav = ({ mode, setMode }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to toggle between light and dark modes
  const handleThemeChange = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode); // Save mode to localStorage
  };

  // Function to handle opening the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // NavLink component for navigation links
  const NavLink = ({ href, children }) => (
    <a href={href}>
      <Typography variant="body1">
        <Button style={{ color: theme.palette.text.primary }}>
          {children}
        </Button>
      </Typography>
    </a>
  );

  // Load theme preference from local storage when component mounts
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, [setMode]);

  return (
    <Container>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          margin: "0 -20px",
          position: "fixed",
          top: "0",
          zIndex: 10,
          width: "100%",
          backdropFilter: "blur(10px)",
          backgroundColor:
            mode === "light"
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="container">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <a className="navbar-brand" href="#home">
                {/* Tooltip with NK Bank Loan logo */}
                <Tooltip title="NK Bank Loan" placement="bottom">
                  <img
                    src={logo}
                    alt="NK Loan Logo"
                    width="70px"
                    height="70px"
                    style={{ borderRadius: "50px", margin: "0 0 0 20px" }}
                  />
                </Tooltip>
              </a>
            </Grid>
            <Grid item>
              {/* Toggle button for the mobile menu */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </Grid>
          </Grid>
          {/* Navigation links */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-around align-items-center">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#why">WhyUs?</NavLink>
              <NavLink href="#calc">Interest?</NavLink>
              <NavLink href="#review">Reviews</NavLink>
              <NavLink href="#contact">Contact</NavLink>

              {/* Dropdown menu */}
              <div>
                <Button
                  variant="text"
                  color="inherit"
                  aria-controls="work-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <Typography variant="body1">Money</Typography>
                </Button>
                <Menu
                  id="work-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <NavLink href="#money">Purpose</NavLink>
                  </MenuItem>
                </Menu>
              </div>

              {/* Theme toggle button */}
              <Tooltip title="Theme" placement="bottom">
                <IconButton
                  onClick={handleThemeChange}
                  sx={{
                    float: { xs: "none", md: "right" },
                    margin: {
                      xs: "10px auto",
                      sm: "10px auto",
                      md: "0 150px 0 0",
                    },
                  }}
                >
                  {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
