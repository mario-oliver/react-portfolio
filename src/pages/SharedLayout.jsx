import React from 'react';
import { Outlet } from 'react-router-dom';
import StyledNavbar from './StyledNavbar';

export function SharedLayout({}) {
  return (
    <>
      <header>
        <StyledNavbar></StyledNavbar>
      </header>
      <Outlet></Outlet>
      <footer>
        <div class="footer-container">
          <p>&copy; Career started 2012. All rights reserved Mario Oliver</p>
          <p className="small">Some help from my intern ChatGPT</p>
        </div>
      </footer>
    </>
  );
}
