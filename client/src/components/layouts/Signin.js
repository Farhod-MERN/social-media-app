import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
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
                        type="text"
                        id="typeEmailX"
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                         <span className="bg-dark px-1">
                         Username
                        </span>
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        <span className="bg-dark px-1"> Password</span>
                      </label>
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-white-50 fw-bold">
                        Sign In
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
