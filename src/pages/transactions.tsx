import React from "react";
import SideBar from "../components/sidebar";

const TransactionsPage = () => {
  return (
    <React.Fragment>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <h3>Transactions</h3>
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Debit</th>
                  <th>Credit</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12/11/19</td>
                  <td>Entertainment</td>
                  <td>Curzon Cinema</td>
                  <td>£17.99</td>
                  <td></td>
                  <td>£100.32</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TransactionsPage;
