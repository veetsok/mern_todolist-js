import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../todo/Todo";
import cl from "./ListTodos.module.css";
import { getTodos } from "../../../store/actions/todoActions";
import { Navigate } from "react-router-dom";

const ListTodos = ({ todo, setTodo }) => {
  const auth = useSelector((state) => state.auth);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [todo._id, dispatch]);

  if (!auth._id) return <Navigate to="/signin" />;

  return (
    <div className={cl.block}>
      <div className={cl.title}>
        {todos.length > 0 ? "Список задач" : "Задач пока нет"}
      </div>
      {todos &&
        todos.map((todo) => {
          return <Todo todo={todo} key={todo._id} setTodo={setTodo} todos={todos} />;
        })}
    </div>
  );
};

export default ListTodos;
