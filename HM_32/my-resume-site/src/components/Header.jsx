import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Resume
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/todo">
            TODO
          </Button>
          <Button color="inherit" component={Link} to="/swapi">
            SWAPI
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
