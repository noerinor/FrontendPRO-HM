import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Booking
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Главная
        </Button>
        <Button component={Link} to="/about" color="inherit">
          О нас
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
