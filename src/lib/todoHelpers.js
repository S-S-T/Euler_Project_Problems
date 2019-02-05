// export const addTodo = (list, item) =>  [...list, item]
const uuid = require('uuid/v1');
// concat instead of push (array commands) ... Concat is for TWO arrays into ONE array
// const GUIDS = [];  ARRAYS COMMANDS: 1.) PUSH  2.) CONCAT  3.) FIND  4.) MAP

// why do we do this? it gens a number for our ID
// export const generateId = () => Math.floor(Math.random()*100000000)
export const guidID = () => uuid();

export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
  ]
}
