/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        lg: "1020px",
      },
      fontSize: {
        title: "clamp(2.5rem, 2.2143rem + 1.4286vw, 3.5rem)",
        content: "1.0625rem",
      },
      lineHeight: {
        "extra-loose": "1.56",
        normal: "normal",
        quote: "1.375rem",
      },
      maxWidth: {
        stars: "445px",
      },
      colors: {
        purple: "#512051",
        "purple-light": "#ee69a4",
      },
    },
  },
  plugins: [],
};
