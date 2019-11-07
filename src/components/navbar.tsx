import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IAppState } from "../redux/state/IAppState";

const NavBar = () => {
  const user = useSelector((state: any) => state.loginReducer.User);
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            Moneybags
          </Link>
          {user && (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/login/logout=true">Logout</Link>
              </li>
            </ul>
          )}
          {!user && (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
