import React from 'react'

function Todo({todo, index, deleteTodo}) {
  return (
    <div className="todo">
          <p>{todo}</p>
          <div className="actions">
            <input className="c-box" type="checkBox"></input>
            <button  onClick={()=> deleteTodo(index)} className="d-button">Delete</button>
          </div>

    </div>
    
  )
}

export default Todo