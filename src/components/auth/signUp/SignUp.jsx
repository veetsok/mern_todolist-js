import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./SignUp.module.css";
import InputSign from "../../UI/inputSign/InputSign";
import { signUp } from "../../../store/actions/authActions";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if (auth._id) return navigate("/");

  return (
    <div className={cl.block}>
      <form onSubmit={handleSubmit}>
        <InputSign
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          id="enter-name"
          label="Введите имя"
          type="text"
          autoComplete="current-password"
        />
        <InputSign
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          id="enter-email"
          label="Введите e-mail"
          type="email"
          autoComplete="current-password"
        />
        <InputSign
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          id="enter-password"
          label="Введите пароль"
          type="password"
          autoComplete="current-password"
        />
        <button className={cl.btn}>Зарегистрироваться`</button>
      </form>
    </div>
  );
};

export default SignUp;
