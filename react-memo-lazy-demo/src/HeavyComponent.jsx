import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent rendered");

  let value = 0;
  for (let i = 0; i < 50000000; i++) {
    value += i;
  }

  return (
    <div style={{ marginTop: "20px", padding: "20px", border: "1px solid black" }}>
      <h2>Heavy Component</h2>
      <p>{value}</p>
    </div>
  );
};

export default React.memo(HeavyComponent);
