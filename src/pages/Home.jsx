import React from 'react';

const Home = () => {
  return (
    <div>
      <div className='sub-header' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
        About Me
      </div>
      <div className='body-text' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{'\n'} 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{'\n'}
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{'\n'}
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div>
    </div>
  );
};

export default Home;