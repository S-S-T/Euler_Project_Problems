import React from 'react'

export const TodoList = (props) => {
    return (
        <div className="Todo-List">
        <ul>
          {/* See how powerful map() function is taknig all todos array and assigning 'state' 
            keys must be assigned to any 'children' of an array, do that in the <li>'s set key */}
          {props.todos.map(todo => 
          <li key={todo.id}>
            <input type="checkbox" defaultChecked={todo.isComplete} /> {todo.name}           
          </li>)}        
        </ul>
        </div>

    )
}