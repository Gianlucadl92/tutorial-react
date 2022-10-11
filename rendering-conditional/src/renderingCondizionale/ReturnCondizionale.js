import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ReturnCondizionale = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <>
      <h1>Return Condizionale</h1>
      <div className="container">
        <img src={user.avatar_url} alt={user.name} />
        <h2>{user.login}</h2>
      </div>
      <hr />
    </>
  );
};

const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

const ErrorComponent = () => {
  return (
    <div>
      <h2>Error</h2>
    </div>
  );
};

export default ReturnCondizionale;
