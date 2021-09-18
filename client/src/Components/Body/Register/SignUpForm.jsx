import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Signup.css";
const SignUpForm = () => {
  const [userInputs, setUserInputs] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
  });
  const history = useHistory();
  let name, value;
  const inputFormHandler = (event) => {
    
    name = event.target.name;
    value = event.target.value;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const registerFormSubmitHandler = async (event) => {
    event.preventDefault();
    const {
      username,
      firstName,
      lastName,
      email,
      password,
      confirmpassword,
      phone,
    } = userInputs;

    const response = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            firstName,
            lastName,
            email,
            password,
            confirmpassword,
            phone,
        }),
    })
    const data = await response.json();
    if(data.staus === 400 || !data){
        window.alert("Error");
        console.log("Error");
    }
    else{
        window.alert("Success");
        console.log("Success");
        
        history.push("/login");
    }
  };
  return (
    <section className="vh-100 singup-section">
      <div className="container h-100 mt-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black signup-card-border">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form
                      className="mx-1 mx-md-4"
                      onSubmit={registerFormSubmitHandler}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user-tag fa-lg me-3"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="username"
                            value={userInputs.username}
                            onChange={inputFormHandler}
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Username
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <div className="row">
                            <div className="col">
                              <input
                                type="text"
                                name="firstName"
                                value={userInputs.firstName}
                                onChange={inputFormHandler}
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                First Name
                              </label>
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                name="lastName"
                                value={userInputs.lastName}
                                onChange={inputFormHandler}
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Last Name
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            value={userInputs.email}
                            onChange={inputFormHandler}
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            value={userInputs.password}
                            onChange={inputFormHandler}
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="confirmpassword"
                            value={userInputs.confirmpassword}
                            onChange={inputFormHandler}
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-mobile fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="tel"
                            name="phone"
                            value={userInputs.phone}
                            onChange={inputFormHandler}
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Your Phone
                          </label>
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
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
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

export default SignUpForm;
