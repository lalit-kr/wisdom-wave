import React, { useState } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="vh-100">
      <div className="container m-auto h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card"
              style={{
                borderRadius: "25px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>

                    <form
                      className="mx-1 mx-md-4"
                      action="/"
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className={`form-control ${
                              username.length > 0 && "active"
                            }`}
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Username
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className={`form-control ${
                              password.length > 0 && "active"
                            }`}
                            placeholder=" "
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <input
                          type="submit"
                          value="Login"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-lg"
                        />
                        <a
                          href="/register"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-secondary btn-lg"
                        >
                          Register
                        </a>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                      className="img-fluid"
                      alt="Phone image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
