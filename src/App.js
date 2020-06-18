import React, { Component } from "react";
import List from './List';
import STORE from './store';
import './App.css';

//////////////////////GENERATOR RANDOM CARD & ID FUNCTION
//why was this created as a variable???

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

//////////////////////DELETE CARD FUNCTION
//why was this created as a keyword function???

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

//////////////////////APP is converted to a CLASS COMPONENT... why????
class App extends Component {

  // use STATE not PROPS for STORE
  state = {
    store: STORE,
  }; 
 


  handleDeleteCard = (cardId) => {
    console.log("handleDeleteCard runs");

  }

  handleAddCard = (listId) => {
    console.log("handleAddCard runs");
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {STORE.lists.map(listItem => (
            <List 
              key={listItem.id} 
              header={listItem.header} 
              cardIds={listItem.cardIds} 
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }

}

//CONSOLE LOG TEST//
console.log('App component is working');

export default App;