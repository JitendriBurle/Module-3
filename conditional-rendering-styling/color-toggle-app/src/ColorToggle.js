import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          width: "200px",
          padding: "20px",
          color: "white",
          backgroundColor: isRed ? "red" : "blue",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        This div changes color
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
}

export default ColorToggle;
