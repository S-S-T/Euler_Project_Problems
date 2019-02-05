export const addTodo = (list, item) =>  [...list, item]
const uuid = require('uuid/v1');
// concat instead of push (array commands) ... Concat is for TWO arrays into ONE array

// why do we do this? it gens a number for our ID
export const generateId = () => Math.floor(Math.random()*100000000)
export const guidID = () => uuid();