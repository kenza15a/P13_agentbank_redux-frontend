import "./navbar.css";
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, setLogged } from "../../store/authentification2";
import { Link } from "react-router-dom";
import { useEffect } from "react";
<script
  src="https://kit.fontawesome.com/28b2cc206f.js"
  crossorigin="anonymous"
></script>;

function Navbar() {
  const dispatch = useDispatch();
  const logginState = useSelector((state) => state.auth.isloggedIn);
  const userMail = useSelector((state) => state.auth.formValues.user);

  /*To know if e are logged in or not to display
   * the button sign out
   */
  useEffect(() => {
    dispatch(setLogged());
  }, [dispatch]);

  const handleSignout = () => {
    dispatch(logout());
  };

  if (logginState) {
    return (
      <>
        <nav className="main-nav">
          <a className="main-nav-logo" href="/homepage">
            <img
              className="main-nav-logo-image"
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
            <Link className="main-nav-item" to="/user-page">
              <i className="fa fa-user-circle"></i>
              {userMail}
            </Link>
            <Link
              className="main-nav-item"
              to="/sign-in"
              onClick={() => {
                handleSignout();
              }}
            >
              <i className="fa fa-user-circle"></i>
              Sign out
            </Link>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/homepage">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
