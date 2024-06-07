import { React, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import "./register.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  // const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  // const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handlePhoneInput = (e) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      newErrors.username = "Username must not contain special characters";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
        password
      )
    ) {
      newErrors.password =
        "Password must be 8-20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
    }
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
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" action="/" onSubmit={handleSubmit} noValidate>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className={`form-control ${username.length > 0 && 'active'}`}
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            data-tooltip-id="usernameTooltip"
                            data-tooltip-content={errors.username || ""}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Username
                          </label>
                          <Tooltip id="usernameTooltip" place="left" type="light" effect="solid" className="custom-tooltip"/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-signature fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className={`form-control ${fullname.length > 0 && 'active'}`}
                            placeholder=" "
                            required
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            data-tooltip-id="fullnameTooltip"
                            data-tooltip-content={errors.fullname || ""}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                          <Tooltip id="fullnameTooltip" place="left" type="light" effect="solid" className="custom-tooltip"/>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example3c"
                            className={`form-control ${phone.length > 0 && 'active'}`}
                            placeholder=" "
                            value={phone}
                            onChange={handlePhoneInput}
                            data-tooltip-id="phoneTooltip"
                            data-tooltip-content={errors.phone || ""}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Phone
                          </label>
                          <Tooltip id="phoneTooltip" place="left" type="light" effect="solid" className="custom-tooltip"/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className={`form-control ${email.length > 0 && 'active'}`}
                            placeholder=" "
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            data-tooltip-id="emailTooltip"
                            data-tooltip-content={errors.email || ""}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Email
                          </label>
                          <Tooltip id="emailTooltip" place="left" type="light" effect="solid" className="custom-tooltip"/>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className={`form-control ${password.length > 0 && 'active'}`}
                            placeholder=" "
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            data-tooltip-id="passwordTooltip"
                            data-tooltip-content={errors.password || ""}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                          <Tooltip id="passwordTooltip" place="left" type="light" effect="solid" className="custom-tooltip"/>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className={`form-control ${confirmPassword.length > 0 && 'active'}`}
                            placeholder=" "
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            data-tooltip-id="confirmPasswordTooltip"
                            data-tooltip-content={errors.confirmPassword || ""}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                          <Tooltip id="confirmPasswordTooltip" place="left" type="light" effect="solid" className="custom-tooltip"/>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <input
                          type="submit"
                          value="Register"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-lg"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
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
};

export default Login;
