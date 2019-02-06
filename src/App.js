import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, guidID, findById, toggleTodo, updateTodo} from './lib/todoHelpers'
import {pipe, partial} from '../src/lib/utils'

class App extends Component {
  state = {
    // contains whatever we need-- a todos prop
    todos: [
      {id: guidID(), name: 'Learn JSX', isComplete: true},
      {id: guidID(), name: 'Build an Awesome App', isComplete: false},
      {id: guidID(), name: 'Ship It!', isComplete: false}
    ],
    currentTodo: ''
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    // const todo = findById(id, this.state.todos)
    // const toggled = toggleTodo(todo)
    // const updatedTodos = updateTodo(this.state.todos, toggled)
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
    this.setState({todos: updatedTodos})
  }

  handleSubmit = (evt) => {
      evt.preventDefault()
      const newId = guidID()
      const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false} // single addtition
      const updatedTodos = addTodo(this.state.todos, newTodo) // Both the list and the new item
      this.setState({
        todos: updatedTodos,
        currentTodo: '',
        errorMessage: ''
      })
  }

  // do not allow empty values to be put in to the list. Add validation
  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a Todo Name'
    })
  }
  // You don't always have to use a constructor()/ super(), here we put the STATE above it and use it on it's OWN :) However, then you 
  // need to change the syntax of the methods() below from just regular things like:  doThisOrThat() { obj } to the more vogue doThisOrThat = () => { obj } [w/ the FatArrow :)]
  // constructor() {
  //   super()
    // // HandleInputChange is one of the built-in event/functions for React native.. Passes in 'this' context and refs the new event handler
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
  //}
  // Use SET_STATE here, not just 'state' this gives it fluidity, add an OnChange to this input..
  // SST Notes: Here in the App.js we are not stateless, however, other files may be stateless and therefore was pass the 'state' in "props" and use 'setState'

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    }) 
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
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
        {/* this is way cool, did you know if the condition before the && is True, what follows goes ON! */}
        {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
        <TodoForm handleInputChange={this.handleInputChange} 
          currentTodo={this.state.currentTodo}
          handleSubmit={submitHandler} />
        {/* TodoItem is a CHILD of TodoList! props need to pass thru BOTH to make it work */}
        <TodoList handleToggle={this.handleToggle} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
