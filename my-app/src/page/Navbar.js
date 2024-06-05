// components/Navbar.js
import React from 'react';

const Navbar = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: '1.2',
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <img src="/9th MSC.png" alt="image description" width="111" height="111" className="mr-2" />
        <div style={style}>
          <div>Hello my name is</div>
          <div>Sunshine</div>
        </div>
      </div>
      <ul className="navbar-nav ml-auto d-flex align-items-center">
        <li className="nav-item">
          <a className="nav-link" href="#">Link 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 2</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
