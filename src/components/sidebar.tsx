import React from "react";
import { Link } from "react-router-dom";
import { useFetchAccounts } from "../dataAccess/accounts/fetchAccounts";
import { IAccount } from "../models/accounts";

const SideBar = () => {
  const accounts = useFetchAccounts();

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
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Moneybags</div>
      </a>
      <hr className="sidebar-divider my-0"></hr>
      <li className="nav-item active">
        <Link to="/" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link to="/budgets" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>Budgets</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/planning" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>Planning</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Accounts</div>
      {accounts && renderAccounts(accounts)}
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          <i className="fas fa-fw fa-sign-out"></i>
          <span>Log out</span>
        </Link>
      </li>
    </ul>
  );
};

export default SideBar;
