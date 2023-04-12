import React from 'react'
import './navbar.css'
import '../../Styles/main.css'
import logo from '../../assets/img/argentBankLogo.png'
<script src="https://kit.fontawesome.com/28b2cc206f.js" crossorigin="anonymous"></script>
function Navbar() {
  return (
    <>
      <div className="main-nav">
      <a className="main-nav-logo" href="/homepage">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </div>
    
    </>
  )
}

export default Navbar
