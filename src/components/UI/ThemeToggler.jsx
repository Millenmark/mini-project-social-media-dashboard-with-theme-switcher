/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import Toggle from "../partials/Toggle";
import { ToggleContext } from "../../context/ToggleContext";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
  const { isToggleActive } = useContext(ToggleContext);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === "dark" && isToggleActive) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [theme, isToggleActive]);

  return (
    <>
      <Toggle />
    </>
  );
};

export default ThemeToggler;
