import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <>
      <div className="App">
      <h1>Welcome to Font Awesome with React and Vite!</h1>
      <p>
        Enjoy a cup of coffee <FontAwesomeIcon icon="coffee" /> or celebrate your success with a check mark!{' '}
        <FontAwesomeIcon icon="check-circle" />
      </p>
    </div>
    </>
  );
};

export default Home;
 