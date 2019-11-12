import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state: any) => state.user.User);
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {user && user.userName}
            </span>
            <img
              className="img-profile rounded-circle"
              src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
