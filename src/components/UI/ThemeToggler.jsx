import { useState, useEffect } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggleActive = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center z-30 pt-4">
      <div className="flex justify-between w-full items-center">
        <span className="text-light-text dark:text-dark-text text-sm font-bold">
          Dark Mode
        </span>
        <div
          className={`cursor-pointer w-14 h-7 flex items-center bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end rounded-full px-1 ${
            theme === "dark"
              ? "bg-gradient-to-r from-dark-toggle-start to-dark-toggle-end"
              : " bg-light-toggle"
          }`}
          onClick={handleToggleActive}
        >
          {/* Switch */}
          <div
            className={`bg-white w-5 h-5 transition-all duration-300 rounded-full shadow-md transform ${
              theme === "dark" ? "translate-x-7" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
