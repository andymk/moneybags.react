import React from "react";
import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import PageHeader from "../components/pageheader";
import Footer from "../components/footer";

const AccountsPage = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <SideBar />
      <div className="content-wrapper">
        <PageHeader title="Accounts" />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Title</h3>

              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse">
                  <i className="fas fa-minus"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  data-toggle="tooltip"
                  title="Remove">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              Start creating your amazing application!
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </section>
      </div>

      <Footer />
      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
};

export default AccountsPage;
