import React from 'react';
import NavbarButton from './NavbarButton';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <NavbarButton text="Home" />
        <NavbarButton text="About" />
        <NavbarButton text="Contact" />
        <NavbarButton text="Careers" />
    </nav>
  );
}

export default Navbar;
