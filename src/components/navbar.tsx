import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IAppState } from "../redux/state/IAppState";

const NavBar = () => {
  const user = useSelector((state: any) => state.loginReducer.User);
  return (
    <header className="page-topbar">
      <div className="navbar navbar-fixed">
        <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark">
          <div className="nav-wrapper">
            <div className="col s12">
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {user && (
                  <li>
                    <Link to="/login/logout=true">Logout</Link>
                  </li>
                )}
                {!user && (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
