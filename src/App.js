import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import Routes from './router';

const App = () => {
  return (
    <HashRouter>
      <div id="nav">
        <NavLink exact to="/">
          柱图
        </NavLink>{' '}
        |{' '}
        <NavLink exact to="/about">
          饼图
        </NavLink>
      </div>
      <Routes />
    </HashRouter>
  );
};

export default App;
