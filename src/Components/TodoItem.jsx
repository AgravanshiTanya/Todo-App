import Buttons from "./Buttons";

const TodoItem = ({ id, todoText, todoDate, deleteTodoItems }) => {

  
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-5 text-truncate">{todoText}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-2">
          <Buttons btntype="fail" btntext="Delete" handler={() => deleteTodoItems(id)}  />
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
