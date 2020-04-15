import React from 'react'
import './card-list.styles.css';
import Card from '../card/card.component';

export const CardList = ({monsters}) => {
  return (
  <div className="card-list">
    {monsters.map((mon, i) => <Card key={mon.id} monster={mon}></Card>)}
    </div>);
};