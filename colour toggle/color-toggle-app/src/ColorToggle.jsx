import React, { useState } from "react";

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true); // true = red, false = blue

  const toggleColor = () => {
    setIsRed(!isRed); // switch between red and blue
  };

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {isRed ? "Red Color" : "Blue Color"}
      </div>

      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
};

export default ColorToggle;
