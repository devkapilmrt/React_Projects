import React from 'react'

function InputContainer({inputVal, writeToDo, addToDo}) {
  return (
    
    <div className="inputContainer">
        <input type="text"  value={inputVal} onChange={writeToDo}/>
        <button onClick={addToDo}>+</button>
      </div>
  )
}

export default InputContainer