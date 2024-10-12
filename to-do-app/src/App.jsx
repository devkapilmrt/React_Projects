import { useState } from "react"
import "./app.css"
import InputContainer from "./components/InputContainer"
import Todocontainer from "./components/Todocontainer"

function App() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])
  
  function writeToDo(e){
    setInputVal(e.target.value)

    
  }
  function addToDo(){
    if(inputVal!=''){
      setTodos((preval)=>[...preval, inputVal])
      setInputVal('')
    }

  }
  function deleteTodo(todoindex){
    setTodos((preval)=>preval.filter((preval, preValIndex)=>{
      return preValIndex!=todoindex
    }))
    

    
  }
  
  
  return (
    
    <main>
      <h1>To Do List</h1>
      <InputContainer  inputVal={inputVal} writeToDo={writeToDo} addToDo={addToDo}/>
      <Todocontainer todos={todos} deleteTodo={deleteTodo}/>

    </main>
  )
}

export default App
