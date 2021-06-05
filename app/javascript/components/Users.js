import React from 'react'

const Users = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <a href="/users/new">New user</a>
      <br />
      <h2>{ users.length <= 0 ? "No users" : ""}</h2>
      {
        users.map( (user) => (
          <div>
            <a href={`/users/${user.id}`}>{user.name}</a>
          </div>
        ))
      }
    </>
  )
}

export default Users;