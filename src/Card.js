import React from "react";
import './Card.css';


function Card(propsObject) {
  return (
    <div className="Card">
      <button 
        type="button"
        //applies BUTTON CLICK LISTENER
        onClick={() => propsObject.onClickDelete(propsObject.id)}
      > 
        delete
      </button>
      <h3>{propsObject.title}</h3>
      <p>{propsObject.content}</p>
    </div>
  )
}

Card.propTypes = {
  onClickDelete: () => {}
}

export default Card;
