import React from 'react';
import SammyImage from '../img/sammy.jpg'; // Make sure the path is correct
import '../css/main.css';

export default function Welcome() {
  return (
    <div className="wrapper">
      <h1>Welcome To My App</h1>
      <p>This is going to be the coolest app in the world!</p>
      <img src={SammyImage} alt="Sammy Image" width={200} height={200} />
    </div>
  );
}