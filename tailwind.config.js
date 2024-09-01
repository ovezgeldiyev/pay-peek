/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFEFA",
        bgDark: "#F3F2EE",
        gray: "#EBEAF0",
        black: "#000000",
        white: "#ffffff",
        main: "#76FF94",
      },
    },
    fontSize: {
      xxxl: ["55px", { lineHeight: 1 }],
      xxl: ["40px", { lineHeight: 1.2 }],
      xl: ["35px", { lineHeight: 1.4 }],
      l: ["22px", { lineHeight: 1 }],
      m: ["20px", { lineHeight: 1.4 }],
      sm: ["16px", { lineHeight: 1.4 }],
    },

    boxShadow: {
      btnShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
      inputShadow: "1px 1px 10px rgba(0, 0, 0, 0.25)",
    },
    fontFamily: {
      mainFont: "Proxima Nova",
      interFont: "Inter",
      dmSansFont: "DM Sans",
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
      "2xl": "1640px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "24px",
        lg: "32px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1280px",
          // "@screen xl": {
          //   maxWidth: "",
          // },
        },
      });
    },
  ],
};
