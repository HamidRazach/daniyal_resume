import React from "react";
const Bubbles = () => {
  return (
    <section className="sticky">
      <div className="bubbles">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="bubble" key={index}></div>
        ))}
      </div>
    </section>
  );
};

export default Bubbles;
