import { useRef } from "react";
import Buttons from "./Buttons";

const AddTodo = ({addTodoItem}) => {

  const todoTextInput = useRef();
  const todoDateInput = useRef();

  
  const AddHandler = () => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;
    todoTextInput.current.value = '';
    todoDateInput.current.value = '';
    addTodoItem(todoText, todoDate);
  }


  return (
    <div className="container ">
      <div className="row my-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo here"
            ref= {todoTextInput}
          />
        </div>
        <div className="col-3">
          <input type="date" className="form-control" ref={todoDateInput}/>
        </div>
        <div className="col-2">
          <Buttons btntype="success" btntext="Add" handler={AddHandler} />
        </div>

        
      </div>
    </div>
  );
};
export default AddTodo;
