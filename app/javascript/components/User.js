import React from 'react';

const User = ({ user }) => {
  return(
    <>
      <h1>{}</h1>
      <hr />
      <h5>Users</h5>
      <h6>{ users.length <= 0 ? "No users" : "" }</h6>
      <ul>
        {
          users.map( (u) => (
            <li>
              <a href={`/courses/${u.id}`}>{u.name}</a>
            </li>
          ))
        }
      </ul>
      <a href={`/users/${id}`} data-method="delete">
        Delete user
      </a>
    </>
  )
}

export default User;