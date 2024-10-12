import React from 'react'
import Todo from './Todo'

function Todocontainer({todos,deleteTodo}) {
  return (
    <div className="container">
      {todos.map((todos, index)=>{
        return (
          <Todo key={index} index={index} deleteTodo={deleteTodo} todo={todos}/>
        )
      })}
        

    </div>
  )
}

export default Todocontainer