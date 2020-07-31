import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import Routes from './router';

const App = () => {
  return (
    <HashRouter>
      <div id="nav">
        <NavLink exact to="/">
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink exact to="/about">
          About
        </NavLink>
      </div>
      <Routes />
    </HashRouter>
  );
};

export default App;
