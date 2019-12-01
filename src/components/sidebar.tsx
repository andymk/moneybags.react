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
        <i className="nav-icon fas fa-tachometer-alt"></i>
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
            <MenuItem linkTo="/" text="Dashboard" expand={false} />
            <li className="nav-item">
              <a href="../widgets.html" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>Widgets</p>
              </a>
            </li>

            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie"></i>
                <p>
                  Charts
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../charts/chartjs.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>ChartJS</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/flot.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Flot</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/inline.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Inline</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-tree"></i>
                <p>
                  UI Elements
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../UI/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>General</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/icons.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Icons</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/buttons.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Buttons</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/sliders.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Sliders</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/modals.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Modals & Alerts</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/navbar.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Navbar & Tabs</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/timeline.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Timeline</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/ribbons.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Ribbons</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-edit"></i>
                <p>
                  Forms
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../forms/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>General Elements</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/advanced.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Advanced Elements</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/editors.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Editors</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-table"></i>
                <p>
                  Tables
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../tables/simple.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../tables/data.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>DataTables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../tables/jsgrid.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>jsGrid</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-header">EXAMPLES</li>
            <li className="nav-item">
              <a href="../calendar.html" className="nav-link">
                <i className="nav-icon far fa-calendar-alt"></i>
                <p>
                  Calendar
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../gallery.html" className="nav-link">
                <i className="nav-icon far fa-image"></i>
                <p>Gallery</p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-envelope"></i>
                <p>
                  Mailbox
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../mailbox/mailbox.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Inbox</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../mailbox/compose.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Compose</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../mailbox/read-mail.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Read</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-book"></i>
                <p>
                  Pages
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../examples/invoice.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Invoice</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/profile.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/e_commerce.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>E-commerce</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/projects.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Projects</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/project_add.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Project Add</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/project_edit.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Project Edit</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../examples/project_detail.html"
                    className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Project Detail</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/contacts.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Contacts</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon far fa-plus-square"></i>
                <p>
                  Extras
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Login</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/register.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Register</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../examples/forgot-password.html"
                    className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Forgot Password</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../examples/recover-password.html"
                    className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Recover Password</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/lockscreen.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Lockscreen</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../examples/legacy-user-menu.html"
                    className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Legacy User Menu</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/language-menu.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Language Menu</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/404.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Error 404</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/500.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Error 500</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/pace.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Pace</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/blank.html" className="nav-link active">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Blank Page</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../../starter.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Starter Page</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-header">MISCELLANEOUS</li>
            <li className="nav-item">
              <a href="https://adminlte.io/docs/3.0" className="nav-link">
                <i className="nav-icon fas fa-file"></i>
                <p>Documentation</p>
              </a>
            </li>
            <li className="nav-header">MULTI LEVEL EXAMPLE</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-circle nav-icon"></i>
                <p>Level 1</p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-circle"></i>
                <p>
                  Level 1<i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Level 2</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>
                      Level 2<i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Level 2</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-circle nav-icon"></i>
                <p>Level 1</p>
              </a>
            </li>
            <li className="nav-header">LABELS</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-danger"></i>
                <p className="text">Important</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-warning"></i>
                <p>Warning</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-info"></i>
                <p>Informational</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
