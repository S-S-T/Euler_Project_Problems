import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // contains whatever we need-- a todos prop
      todos: [
        {id: 1, name: 'Learn', isComplete: true},
        {id: 2, name: 'Build an Awesome App', isComplete: false},
        {id: 3, name: 'Ship It!', isComplete: false}
      ],
      currentTodo: ''
    }
    // passes in 'this' context and refs the new event handler
    this.handleInputChange = this.handleInputChange.bind(this)
  }


  // use SET_STATE here, not just 'state' this gives it fluidity, add an OnChange to this input..
  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    }) 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>        
          <h2>REACT TODOS</h2>        
        </header>
        <div className="Todo-App">
        <TodoForm handleInputChange={this.handleInputChange} 
          currentTodo={this.state.currentTodo} />
        <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
