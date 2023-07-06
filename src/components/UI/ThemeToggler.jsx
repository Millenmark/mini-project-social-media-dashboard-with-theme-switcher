import {useState, useEffect} from 'react'

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

  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className="rounded-full bg-slate-400 py-2 px-4"
        onClick={handleToggleTheme}
      >
        {theme === "dark" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default ThemeToggler