import React, { useId } from "react";

const tempData = Array.from({ length: 5 }, (_, index) => {
  return {
    text: `Testo - ${index + 1}`,
  };
});

const Id = () => {
  const id = useId();

  return (
    <div className="useid">
      <label htmlFor={id}> USE ID</label>
      <input id={id} type="checkbox" name="react" />

      <div className="testi">
        {tempData.map((data) => {
          return <div key={data.text}> {data.text} </div>;
        })}
      </div>
    </div>
  );
};

export default Id;
