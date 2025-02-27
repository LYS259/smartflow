import React from 'react';

function UserList({ users }) {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user._id}>
              {user.name} - {user.email} - {user.role}
            </li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}

export default UserList;
