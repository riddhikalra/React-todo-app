import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { TiEdit } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";


function Todo({ todos, completeTodo, removeTodo, updateTodo , }) {
  const [edit, setEdit] = useState({
    // First Values
    id: null,
    value: "",
  });
  
  const submitUpdate = (value) => {
    // Update todo and submit
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  
  
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />; // Update !
  }
 
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
        <TiDelete
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiTickOutline
        onClick={() => completeTodo(todo.id)}
        className="complete-icon"
        />
        
      </div>
    </div>
  ));
}

export default Todo;