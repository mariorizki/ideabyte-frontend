import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
