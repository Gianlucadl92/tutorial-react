import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Sono la pagina di About</h3>
      <button className="btn" onClick={() => navigate("-2")}>
        Redirect
      </button>
    </div>
  );
};

export default About;
