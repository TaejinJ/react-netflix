import React from "react";
import "./Nav.css";
export default function Nav() {
  return (
    <nav className="nav">
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        className="nav_logo"
        onClick={() => {
          window.location.reload();
        }}
      />
      <img
        alt="User logged"
        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png"
        className="nav_avatar"
      />
    </nav>
  );
}
