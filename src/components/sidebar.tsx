import React from "react";
import { Link } from "react-router-dom";
import { useFetchAccounts } from "../dataAccess/accounts/fetchAccounts";
import { IAccount } from "../models/accounts";
import img from "../MBLogo.png";

const SideBar = () => {
  const accounts = useFetchAccounts();

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
            <MenuItem linkTo="/login" text="Login" icon="fa-circle" />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
