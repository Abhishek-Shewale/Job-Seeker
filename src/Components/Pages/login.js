import React from "react";
import "../Styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center"> Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Email</label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control"
            />
          </div>
          <div>
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember Me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <p className="text-end mt-2">
            Forgot <a href=" ">password?</a>
            <Link to="/register" className="ms-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
