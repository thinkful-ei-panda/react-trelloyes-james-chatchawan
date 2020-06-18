import React from "react";
import List from "./List";
import STORE from "./store";
import "./App.css";

class App extends React.Component {
  state = STORE;

  handleDeleteButton(card) {
    // this.setState({

    // })
    console.log("delete button was pressed for ", card);
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map((listItem) => (
            <List
            
              key={listItem.id}
              id={listItem.id}
              header={listItem.header}
              cardIds={listItem.cardIds}
              onDeleteCard={this.handleDeleteButton}

              title={props.title}
              content={props.content}
              onDeleteCard={props.onDeleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

// import React from "react";
// import AddItemForm from './state-shopping/AddItemForm';
// import ShoppingList from './state-shopping/ShoppingList';

// export default class App extends React.Component {
//   state = {
//     shoppingItems: [
//       /* put stub items in here for testing */
//       { name: 'apples', checked: false },
//       { name: 'oranges', checked: true },
//       { name: 'bread', checked: false },
//     ]
//   };

//   handleDeleteItem = (item) => {
//     const newItems = this.state.shoppingItems.filter(itm => itm !== item)
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

//   handleCheckItem = (item) => {
//     const newItems = this.state.shoppingItems.map(itm => {
//       if (itm === item) {
//         itm.checked = !itm.checked
//       }
//       return itm
//     })
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

//   handleAddItem = (itemName) => {
//     const newItems = [
//       ...this.state.shoppingItems,
//       { name: itemName, checked: false }
//     ]
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

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
