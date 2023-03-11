import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div>
      <section class="gradient-custom mb-3">
        <div class="container py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white">
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase">SIGN IN</h2>
                    <p class="text-white-50 mb-5">
                      Please enter your Username and Password!
                    </p>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeEmailX"
                        class="form-control form-control-lg border border-2"
                      />
                      <label class="form-label" for="typeEmailX">
                         <span className="bg-dark px-1">
                         Username
                        </span>
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg border border-2"
                      />
                      <label class="form-label" for="typePasswordX">
                        <span className="bg-dark px-1"> Password</span>
                      </label>
                    </div>

                    <p class="small mb-5 pb-lg-2">
                      <a class="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Sign In
                    </button>

                    {/* <div class="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" class="text-white">
                        <i class="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" class="text-white">
                        <i class="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" class="text-white">
                        <i class="fab fa-google fa-lg"></i>
                      </a>
                    </div> */}
                  </div>

                  <div>
                    <p class="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" class="text-white-50 fw-bold">
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
