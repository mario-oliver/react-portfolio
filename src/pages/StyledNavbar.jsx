import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMediumM, FaOpera } from 'react-icons/fa';

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div>
            {' '}
            <FaMediumM style={{ fontSize: '1.1rem' }}></FaMediumM>
            <FaOpera></FaOpera>
          </div>

          <NavLink to="/" className="nav-links">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-links link active' : 'nav-links link'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? 'nav-links link active' : 'nav-links link'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-links link active' : 'nav-links link'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default StyledNavbar;
