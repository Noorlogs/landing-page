import React from 'react';
import './css/leftSideText.css'

export default function HeaderSec() {
  const backgroundImage = 'https://wallpapercave.com/wp/wp2528702.jpg';

  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '650px', // Adjust the height as needed
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: 'white',
  };
  return (
    <div style={headerStyle}>
      <div className="left-side-text">
        <h2>Welcome to the World of Pokémon</h2>
        <p>Step into a world of adventure, excitement, and discovery.
          Explore the vast Pokémon universe, where trainers like you embark on journeys,
          capture amazing creatures, and forge lifelong friendships.
          Whether you're a seasoned Pokémon Master or just starting your journey, we're here to be your ultimate guide.</p>
        <p> Get ready to catch 'em all!</p>
      </div>
    </div>
  )
}

