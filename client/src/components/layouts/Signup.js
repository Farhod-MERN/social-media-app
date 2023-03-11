import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
      <section class="gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white">
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4">
                    <h2 class="fw-bold mb-2 text-uppercase">SIGN UP</h2>
                    <p class="text-white-50 mb-5">
                      Please register to join our family 💖
                    </p>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        class="form-control form-control-lg border border-2"
                      />
                      <label class="form-label" for="typeEmailX">
                         <span className="bg-dark px-1">
                         Email
                        </span>
                      </label>
                    </div>
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
                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg border border-2"
                      />
                      <label class="form-label" for="typePasswordX">
                        <span className="bg-dark px-1">Repeat Password</span>
                      </label>
                    </div>
                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>

                  <div>
                    <p class="mb-0">
                      Already have account{" "}
                      <Link to="/signin" class="text-white-50 fw-bold">
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
  )
}
