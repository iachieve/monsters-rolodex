import React from 'react';
import './card.styles.css';

export const Card = ({ monster }) => {
  let imgSets = ['set_set1', 'set_set2', 'set_set3', 'set_set4']
  return (
    <div className="card-container">
      <img alt="monster"
        src={`https://robohash.org/${imgSets[Math.floor(Math.random() * 4)]}/bgset_bg1//${monster.id}?size=180x180`} />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
};

export default Card
