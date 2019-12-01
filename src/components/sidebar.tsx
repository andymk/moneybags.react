import React from "react";
import { Link } from "react-router-dom";
import { useFetchAccounts } from "../dataAccess/accounts/fetchAccounts";
import { IAccount } from "../models/accounts";
import img from "../MBLogo.png";
import { useDispatch } from "react-redux";
import * as actions from "../redux/session/actions";
import { push } from "react-router-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  const accounts = useFetchAccounts();

  const logOut = () => {
    dispatch(actions.fnLogOut());
    dispatch(push("/login"));
  };

  const newBadge = () => <span className="right badge badge-danger">New</span>;
  const infoBadge = () => <span className="badge badge-info right">6</span>;
  const iconDanger = () => (
    <i className="nav-icon far fa-circle text-danger"></i>
  );

  const MenuHeader = (props: any) => (
    <li className="nav-header">{props.title}</li>
  );

  const MenuItem = (props: any) => (
    <li className="nav-item has-treeview">
      <Link to={props.linkTo} className="nav-link">
        <i className={"nav-icon fas " + props.icon}></i>
        <p>
          {props.text}
          {props.expand && <i className="right fas fa-angle-left"></i>}
        </p>
      </Link>
    </li>
  );

  const SignOut = (props: any) => (
    <li className="nav-item has-treeview">
      <a className="nav-link" onClick={logOut}>
        <i className="nav-icon fas fa-sign-out-alt"></i>
        <p>Sign Out</p>
      </a>
    </li>
  );

  const renderAccounts = (acc: IAccount[]) =>
    acc.map((item: IAccount) => (
      <li className="nav-item" key={item.id}>
        <Link to={"/transactions/" + item.id} className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>
            {item.name} £{item.balance.toFixed(2)}
          </span>
        </Link>
      </li>
    ));

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#" className="brand-link">
        <img
          src={img}
          alt="Logo"
          className="brand-image img-circle elevation-3"
        />
        <span className="brand-text font-weight-light">MoneyBags</span>
      </a>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
            <MenuItem linkTo="/" text="Dashboard" icon="fa-tachometer-alt" />
            <MenuHeader title="OPTIONS" />
            <SignOut linkTo="/login" text="Login" icon="" />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
