import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store/auth";

function Header() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const clickHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={clickHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
