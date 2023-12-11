import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className="ml-4">
        <Link to="/">Samuel Kininmonth</Link>
      </h1>
      <ul className="nav-links">
      <li className="mr-5">
          <Link to="/">About Me</Link>
        </li>
        <li className="mr-5">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="mr-5">
          <Link to="/contact">Contact Me</Link>
        </li>
        <li className="mr-5">
        <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;