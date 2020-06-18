import React from 'react';
import List from './List';
import STORE from './store';
import './App.css';
import { render } from 'enzyme';


 
// add functions to modify STATE

//STEPS TO SOLUTION//
/**
refactor 'App' component -> uses 'state = STORE' ****

***implement "event handlers" for <buttons> (as methods) in 'App' component (has access to 'setState()')

***use 'callback()' "props" -> wire up "event handlers" to 'onClick()' "props" of <buttons>

***utilise the "id" of each LIST && CARD implementing the <buttons>
 */




function App() {
  console.log("deleteCard runs");

  state = STORE // use STATE not PROPS for STORE
list: 


handleDeleteCard = (cardId) => {
//need a "cardId"


// -> remove references to CARD in LIST "cardIds" 
// -> combine '.map()' && '.filter()' generateS a 'newList = []' (array)
// -> deleteCard = () => {console.log("deleteCard runs")}


//     const newItems = this.state.shoppingItems.filter(itm => itm !== item)
//     this.setState({
//       shoppingItems: newItems
//     })
//   }



handleAddCard = (itemName) => {
  // -> add CARD to 'allCards = {}' (object) 
  // -> insert CARD "id" to appropriate LIST "cardIds"
  // -> addCard = () => {console.log("addCard runs")}


//     const newItems = [
//       ...this.state.shoppingItems,
//       { name: itemName, checked: false }
//     ]
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

render() {


}
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {STORE.lists.map(listItem => (
        <List key={listItem.id} header={listItem.header} cardIds={listItem.cardIds} />
      ))}
      </div>
  </main>
  );
}

export default App;




//   render() {
//     return (
//       <>
//         <header>
//           <h1>Shopping List</h1>
//         </header>
//         <main>
//           <section>
//             <AddItemForm onAddItem={this.handleAddItem}/>
//           </section>
//           <section>
//             <ShoppingList
//         items={this.state.shoppingItems}
//         onDeleteItem={this.handleDeleteItem}
//         onCheckItem={this.handleCheckItem}
//       />
//           </section>
//         </main>
//       </>
//     )
//   }
// }