import Axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/app-actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log("login");
    const data = { username, password };
    Axios.post("/security/login", data)
      .then(res => {
        dispatch(actions.fnLoginSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="card card-login">
          <div className="card-content">
            <span className="card-title">Log In</span>
            <form onSubmit={onSubmit}>
              <div className="input-field">
                <input
                  className="validate"
                  name="username"
                  type="text"
                  onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field">
                <input
                  className="validate"
                  name="password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input className="btn right" type="submit" value="Log In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
