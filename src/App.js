import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor() {
    super()

    this.state = {
      groceries: ['eggs','milk','bread']
    }
  }
  addGrocery(text){
    this.setState({
      groceries: [...this.state.groceries, text]
    })
  }
  deleteItem(index){
    this.setState({
      groceries: [...this.state.groceries.slice(0, index), ...this.state.groceries.slice(index+1)]
    })
  }
  // markDone(index){
  //   this.setState
  // }
  



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grocery List</h1>
        </header>
        <Form title="Add Grocery List Item" add={(arg) => this.addGrocery(arg)} />
        <List items={this.state.groceries} deleteItem={(index) => this.deleteItem(index)}/>
      </div>
    );
  }
}

export default App;
