/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      width:{
        "w360": "360px",
      },
      height:{
        "h510": "510px",
      },
      colors:{
        "sand": "#CBB8A9",
        "bean": "#332C23",
        "lightbean": "#796953",
        "white": "#f3efe9",
        "black": "#514d48",
        "dry": "#edeae4",
        "warm": "#b68561",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: []
};
