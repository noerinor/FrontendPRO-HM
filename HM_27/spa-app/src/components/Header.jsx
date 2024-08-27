import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <nav>
        <Link to="/" className="btn btn-primary m-2">
          Home
        </Link>
        <Link to="/contacts" className="btn btn-primary m-2">
          Contacts
        </Link>
        <Link to="/about" className="btn btn-primary m-2">
          About
        </Link>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
