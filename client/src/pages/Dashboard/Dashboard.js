import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>App</Link>
        </li>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/service'>Service</Link>
        </li>
      </ul>
    </>
  );
}
