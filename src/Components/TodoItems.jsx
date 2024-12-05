import TodoItem from "./TodoItem";

const TodoItems = ({todoItems,deleteTodoItems}) => {
 

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} deleteTodoItems = {deleteTodoItems}/>
      ))}
    </>
  );
};
export default TodoItems;
