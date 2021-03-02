import "./UserlLists.css";
import React, { useState, useEffect } from "react";

import axios from "axios";

import UserCard from "./userCard";

const UserLists = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(users);

  return (
    <div>
      <h3>welcome to users list</h3>
      <div className="holder">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserLists;
