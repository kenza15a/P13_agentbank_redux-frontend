import "./navbar.css";
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

<script
  src="https://kit.fontawesome.com/28b2cc206f.js"
  crossorigin="anonymous"
></script>;

function Navbar() {
  const dispatch = useDispatch();

  const { user, isSuccess } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  /*To know if e are logged in or not to display
   * the button sign out
   */

  const handleSignout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/homepage");
  };
  const handleUserSignIn = () => {
    if (user ) {
      navigate("/user-page");
    } else {
      navigate("/sign-in");
    }
  };

  if (user ) {
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
              NAME
            </Link>
            <button
              className="main-nav-item"
              onClick={() => {
                handleSignout();
              }}
            >
              <i className="fa fa-user-circle"></i>
              Sign out
            </button>
          </div>
        </nav>
      </>
    );
  } else {
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
            <button
              className="main-nav-item"
              onClick={() => {
                handleUserSignIn();
              }}
            >
              <i className="fa fa-user-circle"></i>
              Sign In
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
