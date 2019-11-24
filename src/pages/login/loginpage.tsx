import Axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/app-actions";
import { push } from "react-router-redux";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("user1");
  const [password, setPassword] = useState("test");
  const [error, setError] = useState("");
  const [inProgress, setInProgress] = useState(false);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setError("");
    setInProgress(true);
    const data = { username, password };
    Axios.post("/security/login", data)
      .then(res => {
        dispatch(actions.fnLoginSuccess(res.data));
        setInProgress(false);
        dispatch(push("/"));
      })
      .catch(err => {
        setError(err.response.data);
        setInProgress(false);
      });
  };

  return (
    <React.Fragment>
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <Link to="/">
              <b>MoneyBags</b>
            </Link>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <form onSubmit={onSubmit} method="post">
                <div className="input-group mb-3">
                  <input
                    type="tex0t"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label>Remember Me</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={inProgress}>
                      {inProgress && (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"></span>
                      )}
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
              </div>

              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
