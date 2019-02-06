// THESE ARE A LIST OF FUNCTIONS TO BE USED FOR TESTING.  HELPERS IS THE 
// NAME OF THE DIRECTORY HERE AND ALL THESE ARE EXPORTED/IMPORTED OUT TO WHEREVER THEY MAY ROAM

// const GUIDS = [];  ARRAYS COMMANDS: 1.) PUSH  2.) CONCAT  3.) FIND  4.) MAP

const uuid = require('uuid/v1'); // ALLOWS GUIDS TO BE CREATED, VERY COOL/EASY

// export const generateId = () => Math.floor(Math.random()*100000000)
export const guidID = () => uuid();

export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete}) // overwrites the current id/todos' isComplete prop


// This code here leverages Slice(). Below are the parts: 1.) Slice of index 0 to the UpdatedIndex; then 
// 2.) the item that has been UPDATED, then 3. Slice of all remaining upper values till end of []
export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [...list.slice(0, updatedIndex), updated, ...list.slice(updatedIndex+1)
  ]
}
