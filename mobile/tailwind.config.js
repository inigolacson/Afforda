/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryColor: "#f2ffff",
        secondaryColor: "#3d5a80",
        textBoxColor: "#b0c8d6",
        textColor: "#293241",
        highlightColor: "#ee6c4d",
        facebookBlue: "#1877F2",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
