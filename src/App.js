import React, { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoApp from "./ToDoApp";
import './App.css'

const todos = [{
  id: 1,
  title: "todo 1",
  done: false
}, {
  id: 2,
  title: "todo 2",
  done: true
}, {
  id: 3,
  title: "todo 3",
  done: false
}]


const App = () => {
  const [todoList, setTodoList] = useState([...todos])

  const addTodoHandler = (item) => {
    if (item.length <= 0) return
    setTodoList(prev => [...prev, { id: prev.length + 1, title: item, done: false }])
  }

  const markAsDoneHandler = (elem) => {
    return () => {
      const tempItems = todoList
      const filteredItems = tempItems.map((el) => {
        if (el.id === elem) {
          el.done = true
        }
        return el
      })
      setTodoList(filteredItems)
    }
  }

  const deleteItemHandler = (elem) => {
    return () => {
      const tempItems = todoList
      const filteredItems = tempItems.filter(el => {
        return el.id !== elem
      })
      setTodoList(filteredItems)
    }
  }

  return (
    <div className="container">
      <div className="logo">TODO</div>
      <AddToDo addItem={addTodoHandler} />
      <ToDoApp markDone={markAsDoneHandler} deleteItem={deleteItemHandler} items={todoList} />
    </div>
  )
}

export default App