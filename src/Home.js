import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <h2>Welcome to the Home Page!</h2>
    <p>
        <Link to="/about">Learn more about us</Link>
      </p>
    </>
  )
}

export default Home;