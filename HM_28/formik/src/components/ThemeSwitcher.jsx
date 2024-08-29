import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className="btn btn-secondary">
      {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
    </button>
  );
};

export default ThemeSwitcher;
