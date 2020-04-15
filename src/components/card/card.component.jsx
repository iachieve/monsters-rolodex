import React from 'react';
import './card.styles.css';

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img alt="monster"
        src={`https://robohash.org/set_set3/bgset_bg1//${monster.id}?size=180x180`} />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  )
};

export default Card
