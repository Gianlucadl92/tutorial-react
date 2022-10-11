import React from "react";
import { useParams } from "react-router-dom";

const SingleProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Sono un singolo profilo con id {id}</h3>
    </div>
  );
};

export default SingleProfile;
