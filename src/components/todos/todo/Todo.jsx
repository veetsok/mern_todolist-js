import React from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CreateIcon from "@mui/icons-material/Create";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import cl from "./Todo.module.css";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteTodo } from "../../../store/actions/todoActions";

const useStyles = createUseStyles({
  isComplete: {
    color: "green",
  },

  checked: {
    textDecoration: "line-through",
  },
});

const Todo = ({ todo, setTodo, todos }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  function getDayInfo(timestamp) {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    const timeDiff = Math.abs(currentTime - postTime);

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;

    let timeAgo;

    if (timeDiff < minute) {
      timeAgo = Math.round(timeDiff / 1000) + " секунд назад";
    } else if (timeDiff < hour) {
      timeAgo = Math.round(timeDiff / minute) + " минут назад";
    } else if (timeDiff < day) {
      timeAgo = Math.round(timeDiff / hour) + " часов назад";
    } else if (timeDiff < month) {
      timeAgo = Math.round(timeDiff / day) + " дней назад";
    } else {
      timeAgo = Math.round(timeDiff / month) + " месяцев назад";
    }

    return timeAgo;
  }

  const handleOnUpdateClick = (id) => {
    const foundTodo = todos.find((todo) => todo._id === id);
    setTodo({ ...foundTodo });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div className={cl.block}>
        <div className={cl.text}>
          {todo.isComplete ? (
            <Typography variant="subtitle1" className={classes.checked}>
              {todo.name}
            </Typography>
          ) : (
            <Typography variant="subtitle1">{todo.name}</Typography>
          )}

          <Typography className={cl.author} variant="subtitle1">
            Автор: {todo.author}
          </Typography>
          <Typography className={cl.date} variant="subtitle1">
            Добавлено: {getDayInfo(todo.date)}
          </Typography>
        </div>
        <div className={cl.btns}>
          {auth._id && auth._id === todo.uid ? (
            <ButtonGroup size="small" aria-label="outlined primary button group">
              <Button onClick={() => handleCheck(todo._id)}>
                {todo.isComplete ? (
                  <CheckCircleIcon className={classes.isComplete} color="action" />
                ) : (
                  <CheckCircleIcon color="action" />
                )}
              </Button>

              <Button onClick={() => handleOnUpdateClick(todo._id)}>
                <CreateIcon />
              </Button>
              <Button onClick={() => handleDelete(todo._id)}>
                <DeleteForeverIcon color="secondary" />
              </Button>
            </ButtonGroup>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Todo;
