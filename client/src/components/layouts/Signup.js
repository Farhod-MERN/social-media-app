import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";


export default function Signup() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const postData = ()=>{
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "", email: "", password: ""
      })
    }).then(res => res.json())
    .then(data => {console.log(data)})
  }

  return (
    <div>
      <section className="gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase">SIGN UP</h2>
                    <p className="text-white-50 mb-5">
                      Please register to join our family 💖
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange = {(e)=>{setEmail(e.target.value)}}
                        id="typeEmailX"
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" for="typeEmailX">
                         <span className="bg-dark px-1">
                         Email
                        </span>
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeEmailX"
                        value={name}
                        onChange = {(e)=>{setName(e.target.value)}}
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" for="typeEmailX">
                         <span className="bg-dark px-1">
                         Username
                        </span>
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        value={password}
                        onChange = {(e)=>{setPassword(e.target.value)}}
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" for="typePasswordX">
                        <span className="bg-dark px-1"> Password</span>
                      </label>
                    </div>
                    {/* <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" for="typePasswordX">
                        <span className="bg-dark px-1">Repeat Password</span>
                      </label>
                    </div> */}
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      onClick = {()=>{postData()}}
                    >
                      Sign Up
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Already have account{" "}
                      <Link to="/signin" className="text-white-50 fw-bold">
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
  )
}
