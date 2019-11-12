import React from "react";
import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";

const HomePage = () => {
  return (
    <React.Fragment>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NavBar />
          <h3>Dashboard</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
