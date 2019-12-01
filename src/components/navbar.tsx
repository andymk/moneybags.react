import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state: any) => state.session.User);

  const UserName = () => (
    <li className="nav-item d-none d-sm-inline-block">
      <Link to="/" className="nav-link">
        {user && user.userName}
      </Link>
    </li>
  );
  const pushMenu = () => {
    const body = document.body;
    if (body.clientWidth > 768) {
      if (body.className.indexOf("sidebar-collapse") === -1) {
        body.className += " sidebar-collapse";
      } else {
        body.className = body.className.replace(" sidebar-collapse", "");
      }
    } else {
      if (body.className.indexOf("sidebar-open") === -1) {
        body.className += " sidebar-open";
      } else {
        body.className = body.className.replace(" sidebar-open", "");
      }
    }
  };

  const SearchForm = () => (
    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input
          className="form-control form-control-navbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  );

  const Notifications = (props: any) => (
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="far fa-bell"></i>
        {props.number && props.number > 0 && (
          <span className="badge badge-warning navbar-badge">
            {props.number}
          </span>
        )}
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span className="dropdown-item dropdown-header">
          {props.number} Notifications
        </span>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <i className="fas fa-envelope mr-2"></i> 4 new messages
          <span className="float-right text-muted text-sm">3 mins</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <i className="fas fa-users mr-2"></i> 8 friend requests
          <span className="float-right text-muted text-sm">12 hours</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
          <i className="fas fa-file mr-2"></i> 3 new reports
          <span className="float-right text-muted text-sm">2 days</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item dropdown-footer">
          See All Notifications
        </a>
      </div>
    </li>
  );

  return (
    <React.Fragment>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              onClick={pushMenu}>
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <UserName />
          <Notifications number="0" />
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
