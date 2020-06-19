import React, { Component } from "react";
import List from './List';
import STORE from './STORE';
import './App.css';


//////////////////////GENERATOR RANDOM CARD & ID FUNCTION
//provided by the assignment--> grok it later!
//created as a VARIABLE for readability & easily pass to other functions

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
//provided by the assignment--> grok it later!

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}


//////////////////////APP is converted to a CLASS COMPONENT... why????
class App extends Component {

  // use STATE for STORE not as "prop"...why???
  state = {
    store: STORE,
  }; 
 

  handleDeleteCard = (cardId) => {
    console.log("handleDeleteCard runs") //<-- console.log to test it runs

    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };


  handleAddCard = (listId) => {
    console.log("handleAddCard runs") //<-- console.log to test it runs

    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
	      return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };


  render() {
    /* sets the CURRENT STATE of STORE as a VARIABLE???*/
    const { store } = this.state

    /* renders DOM HTML using CURRENT STATE */
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {/* CURRENT STATE of STORE mapped with LIST component */}
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }

}

console.log('App component is working'); //<-- console.log to test it runs

export default App; //<-- exports APP to other components (i.e. to use in INDEX)