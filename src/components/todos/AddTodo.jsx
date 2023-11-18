import React from "react";
import { useDispatch } from "react-redux";
import Input from "../UI/input/Input";
import { addTodo, updateTodo } from "../../store/actions/todoActions";

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid: todo.uid,
      };
      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }
    setTodo({
      name: "",
      isComplete: false,
    });
  };

  return (
    <div className="addTodoContainer">
      <Input
        autoComplete="off"
        label="Введите заметку..."
        value={todo.name}
        onSubmit={handleSubmit}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
    </div>
  );
};

export default AddTodo;
