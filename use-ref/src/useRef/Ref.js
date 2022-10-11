import React, { useRef } from "react";

const Ref = () => {
  const ref = useRef(null);
  console.log(ref);

  const handleScroll = () => {
    if (!ref || !ref.current) {
      return;
    }
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <button onClick={handleScroll}>Scroll</button>
      </div>
      <div style={{ height: "100vh" }}></div>
      <h1 ref={ref}>Lorem ipsum dolor sit amet.</h1>
      <div style={{ height: "30vh" }}></div>
    </>
  );
};

export default Ref;
