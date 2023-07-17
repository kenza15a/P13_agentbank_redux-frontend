import "./navbar.css";
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { getProfileData } from "../../redux/slices/profileSlice";
import { useEffect } from "react";

<script
  src="https://kit.fontawesome.com/28b2cc206f.js"
  crossorigin="anonymous"
></script>;

function Navbar() {
  const dispatch = useDispatch();
  const { firstName } = useSelector((state) => state.profileSlice);
  let isConnected =
    !!localStorage.getItem("user") || !!sessionStorage.getItem("user");
  //dispatch the state of firstName and LastName
  useEffect(() => {
    if (isConnected) {
      dispatch(getProfileData());
    } else {
      dispatch(reset());
    }
  }, [isConnected, dispatch]);
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  /*To know if e are logged in or not to display
   * the button sign out
   */

  const handleSignout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  const handleUserSignIn = () => {
    if (user && isConnected) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        {isConnected && (
          <div>
            <Link className="main-nav-item" to="/profile">
              {firstName}
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
        )}
        {!isConnected && (
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
        )}
      </nav>
    </>
  );
}

export default Navbar;
