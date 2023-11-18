import React from "react";
import Logo from "../UI/logo/Logo";
import cl from "./NavBar.module.css";
import Button from "../UI/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const NavBar = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    history("/signin");
  };
  return (
    <div className={cl.navbar}>
      <Logo />

      <div className={cl.__btnsBlock}>
        {user._id ? (
          <>
            <div className={cl.access}>{user.name} авторизовался</div>
            <Button className={cl.btn} onClick={() => handleSignOut()} text="Выйти" />
          </>
        ) : (
          <>
            <Link className={cl.btn__block} to="/signin">
              <Button text="Войти" />
            </Link>

            <Link className={cl.btn__block} to="/signup">
              <Button text="Зарегистрироваться" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
