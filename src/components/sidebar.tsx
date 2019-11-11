import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFetchAccounts } from "../dataAccess/accounts/fetchAccounts";

const SideBar = () => {
  const accounts = useFetchAccounts();
  const dispatch = useDispatch();

  const accountItem = () => (
    <li className="nav-item">
      <a className="nav-link" href="tables.html">
        <i className="fas fa-fw fa-table"></i>
        <span>Bank Account £12,123.23</span>
      </a>
    </li>
  );

  useEffect(() => {
    console.log({ accounts });
  });
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
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Bank Account £12,123.23</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Savings Account £0.01</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Credit Card -£500.00</span>
        </a>
      </li>
    </ul>
  );
};

export default SideBar;

{
  /* <li className="active bold open">
        <Link to="">Home</Link>
      </li>
      <li className="bold">
        <Link to="">Accounts</Link>
      </li> */
}
