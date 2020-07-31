import React from 'react';
import HelloWorld from '../components/HelloWorld/HelloWorld';
import Logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="home">
      <img alt="Vue logo" src={Logo} />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  );
};

export default Home;
