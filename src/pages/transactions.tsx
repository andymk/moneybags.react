import React, { useEffect } from "react";
import SideBar from "../components/sidebar";
import { useFetchTransactions } from "../dataAccess/transactions/fetchTransactions";
import { ITransaction } from "../models/transaction";

const TransactionsPage = (props: any) => {
  const transactions = useFetchTransactions(props.match.params.accountid);

  const renderRows = (transList: ITransaction[]) =>
    transList.map((tx: ITransaction) => (
      <tr>
        <td>{tx.date}</td>
        <td>{tx.category}</td>
        <td>{tx.description}</td>
        <td>£{tx.debit}</td>
        <td>£{tx.credit}</td>
        <td></td>
      </tr>
    ));

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
              <tbody>{transactions && renderRows(transactions)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TransactionsPage;
