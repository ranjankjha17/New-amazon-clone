module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amzn_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        "Nunito-Sans": ['"Nunito Sans", sans-serif'],
        "Rubik": ['"Rubik", sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
