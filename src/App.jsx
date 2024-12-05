import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import initialTodoItems from "./Data/initialTodoItems";

function App() {

  const [todoItems, setTodoItems] = useState(initialTodoItems);
   

  const addTodoItem = (todoText,todoDate) => {
       setTodoItems(currentItems => {
        return [...currentItems, {id:todoText, todoText , todoDate}]
      })
  }

  const deleteTodoItems = (todoId) => {
    setTodoItems(currentItems => {
      return currentItems.filter(item => item.id !== todoId);
    })

  }

  return (
      <>
        <center>

        <AppName />
        <AddTodo addTodoItem = {addTodoItem} />
        <TodoItems todoItems = {todoItems} deleteTodoItems={deleteTodoItems}/>

        </center>

      </>
  );
}

export default App;
