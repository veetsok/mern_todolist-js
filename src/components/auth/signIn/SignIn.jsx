import React, { useState } from "react";
import cl from "./SignIn.module.css";
import InputSign from "../../UI/inputSign/InputSign";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../store/actions/authActions";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Navigate to="/" />;

  return (
    <div className={cl.block}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <InputSign
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          id="enter-email"
          label="Введите e-mail"
          type="email"
        />
        <InputSign
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          id="enter-password"
          label="Введите пароль"
          type="password"
        />
        <button className={cl.btn}>войти</button>
      </form>
    </div>
  );
};

export default SignIn;
