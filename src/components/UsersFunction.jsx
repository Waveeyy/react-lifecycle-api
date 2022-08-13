import React, { useState, useEffect } from "react";
import axios from "axios";

function UsersFunction() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => {
        setUsers(users.data);
        console.log(users.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <h1>Name: {item.name}</h1>
            <h1>Username: {item.username}</h1>
            <h1>email: {item.email}</h1>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default UsersFunction;
