import React from "react";
import Card from "./Card";
import STORE from './store';
import './List.css';

function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cardIds.map(listItem => (
            <Card 
            key={props.id} 
            id={props.id}
            title={props.title} 
            content={props.content} 
            onDeleteCard={props.onDeleteCard}/>
        ))}
        
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
