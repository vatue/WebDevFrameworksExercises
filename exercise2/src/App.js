import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props) {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

  addGroceries = props => {

    if (props === 'Milk'){

      this.setState(() => {
        return {items: [...this.state.items,
        { id: this.state.items.length+1, value: 'Milk',
        qty: Math.floor(Math.random() * (5 - 1) +1), unit: 'ltr',}],
        // (max - min) + min),
        //{ qtyChange: [this.state.items[0].qty] + 5 }]
      }})
    }

    else if  (props === 'Bananas'){

      this.setState(() => {
        return {items: [...this.state.items,
        { id: this.state.items.length+1, value: 'Bananas',
        qty: Math.floor(Math.random() * (10 - 3) +1), unit: 'pcs'}]
      }})
    }

    else if  (props === 'Bread'){

      this.setState(() => {
        return {items: [...this.state.items,
        { id: this.state.items.length+1, value: 'Bread',
        qty: Math.floor(Math.random() * (5 - 1) +1), unit: 'x'}]
      }})
    } else {

      this.setState(() => {
        return {items: [...this.state.items,
        { id: this.state.items.length+1, value: 'Eggs',
        qty: Math.floor(Math.random() * (10 - 4) +4), unit: 'x'}]
      }})
      /*it's hardcoded because i'm slow in the brain*/
    }
  }

  render() {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />

      <button onClick= {() => this.addGroceries('Milk') }>Add milk</button>
      <button onClick= {() => this.addGroceries('Bananas') }>Add bananas</button>
      <button onClick= {() => this.addGroceries('Bread') }>Add bread</button>
      <button onClick= {() => this.addGroceries('Eggs') }>Add eggs</button>

    </div>
  }
}

export default App;