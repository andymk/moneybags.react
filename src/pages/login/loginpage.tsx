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
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={onSubmit}>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            name="username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            name="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label className="custom-control-label">
                              Remember Me
                            </label>
                          </div>
                        </div>
                        {error && (
                          <div className="alert alert-danger" role="alert">
                            {error}
                          </div>
                        )}
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                          disabled={inProgress}>
                          {inProgress && (
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"></span>
                          )}
                          Login
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                      <div className="text-center">
                        <Link to="/" className="small" href="register.html">
                          Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
