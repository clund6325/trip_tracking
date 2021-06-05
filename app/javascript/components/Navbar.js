import React from 'react';

const url = "localhost:3000/"
const Navbar = () => (
  <nav>
    <ul>
      <li>
        <a href="/users">Users</a>
      </li>
      <li>
        <a href="/users/new">New User</a>
      </li>
      <li>
        <a href="/trips">Trips</a>
      </li>
      <li>
        <a href="/users/">New Trip</a>
      </li>
    </ul>
  </nav>
)

export default Navbar;