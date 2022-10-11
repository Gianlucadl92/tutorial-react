import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users";

const FetchDati = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response);
    setUsers(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Fetch Component</h1>
      <ul className="users">
        {users.map((el) => {
          const { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={id}>
              <div className="persone">
                <img src={img} alt={login} />
                <h3>{login}</h3>
                <a href={html_url}> Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchDati;
