import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import {toast} from "react-toastify"
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const history = useHistory()

  const postData = ()=>{

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
     toast.error("Invalid email, ex: example@gmail.com")
     return
    }

    fetch("http://localhost:5000/signup", {
      method: "post",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name, email: email, password: password
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.error){
        toast.warning(data.error);
      }else{
        toast.success(data.msg);
        history.push("/signin")
      }
    })
  }

  return (
    <div>
      <section className="gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-1">
                    <h2 className="fw-bold mb-2 text-uppercase">SIGN UP</h2>
                    <p className="text-white-50 mb-4">
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
                      <label className="form-label" htmlFor="typeEmailX">
                         <span className="bg-dark px-1">
                         Email
                        </span>
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        maxLength={14}
                        id="typeEmailX"
                        value={name}
                        onChange = {(e)=>{setName(e.target.value)}}
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
                        value={password}
                        onChange = {(e)=>{setPassword(e.target.value)}}
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        <span className="bg-dark px-1"> Password</span>
                      </label>
                    </div>
                    {/* <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg border border-2"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
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

                  <div className='mt-4'>
                    <p className="mb-0">
                      Already have account{" "}
                      <Link to="/signin" className="text-white-50 fw-bold">
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
