import React from "react";
import { useUsers } from "../hooks/useUsers";
import { UserRow } from "../UserRow/UserRow";

export const UsersPage = () => {
  //acá se llama al hook y se puede desestructurar
  const { users } = useUsers();

  return (
    <div className="mt-5">
      <h1>Users</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.email} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
