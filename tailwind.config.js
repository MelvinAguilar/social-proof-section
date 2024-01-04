/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "20rem",
        md: "48rem",
        lg: "63.75rem",
        xl: "80rem",
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
        stars: "27.8125rem",
      },
      colors: {
        purple: "#512051",
        "purple-light": "#F8C4D9",
      },
    },
  },
  plugins: [],
};
