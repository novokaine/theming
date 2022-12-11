import React, { useState } from "react";
import addStyle from "./utils/addStyle";
import "./css/cssApproach/main.scss";

const lightColors = {
  blue: "#0084E7",
  red: "#b93604",
  green: "#6cfc02",
  text: "#000",
  button: "#0084E7",
};

const darkColors = {
  blue: "#2d05b3",
  red: "#b93604",
  green: "#2c6601",
  text: "#fff",
  button: "#2d05b3",
};

const colorPallete = (theme) => {
  const palette = theme === "light" ? lightColors : darkColors;

  return `
    :root {
      --primary-blue: ${palette.blue};
      --primary-red: ${palette.red};
      --primary-green: ${palette.green};
      --text-color: ${palette.text},
      --button: ${palette.button}
    }
  `;
};

const CssApproach = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  addStyle(`${colorPallete(selectedTheme)}`);

  const themeSwitcher = (
    <div className='theme-switcher'>
      <button
        type='button'
        disabled={selectedTheme === "light"}
        onClick={() => setSelectedTheme("light")}
      >
        Change theme to light
      </button>
      <button
        type='button'
        disabled={selectedTheme === "dark"}
        onClick={() => setSelectedTheme("dark")}
      >
        Change theme to dark
      </button>
    </div>
  );

  const colorSamples = (
    <div className='color-samples'>
      <div className='class-one'>class one</div>
      <div className='class-two'>class two</div>
      <div className='class-three'>class three</div>
    </div>
  );

  return (
    <>
      <div className={`theme-${selectedTheme}`}>
        {themeSwitcher}
        {colorSamples}
      </div>
      <p>CSS Approach</p>
    </>
  );
};

export default CssApproach;
