import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavStructure = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movie">Movie</Link>
      </li>
      <li>
        <Link to="/tv">TV</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
    </ul>
  );
};

export default withRouter(NavStructure);
