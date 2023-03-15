import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../../App"

export default function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  //eslint-disable-next-line
  const {dispatch, state} = useContext(UserContext)

  const postData = () => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      toast.error("Invalid email, ex: example@gmail.com");
      return;
    }

    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.warning(data.error);
        } else {
          
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          
          dispatch({type: "USER", payload: data.user})

          toast.success("Sign in succesfully");
          history.push("/");
        }
      });
  };
  return (
    <div>
      <section className="gradient-custom mb-3">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">SIGN IN</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your Username and Password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        <span className="bg-dark px-1">Email</span>
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        id="typePasswordX"
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        <span className="bg-dark px-1"> Password</span>
                      </label>
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      onClick={() => {
                        postData();
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-white-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
