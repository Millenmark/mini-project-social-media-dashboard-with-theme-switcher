/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instagram-gradient-start": "hsl(37, 97%, 70%)",
        "instagram-gradient-end": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
        "dark-toggle-start": "hsl(210, 78%, 56%)",
        "dark-toggle-end": "hsl(146, 68%, 55%)",
        "light-toggle": "hsl(230, 22%, 74%)",
        "dark-bg": "hsl(230, 17%, 14%)",
        "dark-top-bg-pattern": "hsl(232, 19%, 15%)",
        "dark-card-bg": "hsl(228, 28%, 20%)",
        "dark-text": "hsl(228, 34%, 66%)",
        "white-text": "hsl(0, 0%, 100%)",
        "light-bg": "hsl(0, 0%, 100%)",
        "light-top-bg-pattern": "hsl(225, 100%, 98%)",
        "light-card-bg": "hsl(227, 47%, 96%)",
        "light-text": "hsl(228, 12%, 44%)",
        "very-dark-text": "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        14: "14px",
      },
    },
  },
  plugins: [],
};
