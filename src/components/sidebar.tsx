import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="sidenav-main nav-expanded nav-lock sidenav-light sidenav-active-square">
      <ul className="sidenav sidenav-fixed leftside-navigation menu-shadow">
        <li className="active bold open">
          <Link to="">Home</Link>
        </li>
        <li className="bold">
          <Link to="">Accounts</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
