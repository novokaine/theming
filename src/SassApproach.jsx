import React, { useState } from "react";
import "./css/sassApproach/main.scss";

const SassAppoach = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");

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
      <p>SASS Approach</p>
    </>
  );
};

export default SassAppoach;
