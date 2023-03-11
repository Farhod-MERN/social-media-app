import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar bg-dark navbar-expand-lg navbar-light bg-light px-lg-5 px-md-5">
      <div class="container-fluid justify-content-between">
        <div class="d-flex">
          <Link to="/" class="navbar-brand me-2 mb-1 d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/800px-Instagram_logo.png"
              height="40"
              alt="MDB Logo"
              loading="lazy"
              //   style="margin-top: 2px;"
            />
          </Link>
        </div>

        <ul className="navbar-nav flex-row d-none d-md-flex">
          <form class="input-group w-auto my-auto d-none d-sm-flex">
            <input
              autocomplete="off"
              type="search"
              class="form-control rounded"
              placeholder="Search"
              //   style="min-width: 125px;"
            />
            <span class="input-group-text border-0 d-none d-lg-flex text-white pointer">
              <i class="bi bi-search"></i>
            </span>
          </form>
        </ul>

        <ul class="navbar-nav flex-row">
          <li class="nav-item me-3 me-lg-1 active">
            <span class="nav-link">
              <h4>
                <Link to="/" className="text-white">
                <i class="bi bi-house-door-fill"></i>
                </Link>
              </h4>
            </span>
          </li>

          <li class="nav-item me-3 me-lg-1">
            <span class="nav-link">
              <h4>
                <Link to="/mypost" className="text-white">
                <i class="bi bi-collection-play"></i>
                </Link>
              </h4>
            </span>
          </li>

          <li class="nav-item me-3 me-lg-1">
            <span class="nav-link">
              <h4>
                <Link to="/add" className="text-white">
                <i class="bi bi-plus-circle"></i>
                </Link>
              </h4>
            </span>
          </li>
          <li class="nav-item me-3 me-lg-1">
            <span class="nav-link">
              <h4>
                <Link to="/chat" className="text-white">
                <i class="bi bi-chat-dots"></i>
                </Link>
              </h4>
            </span>
          </li>
          <li class="nav-item dropdown me-3 me-lg-1">
            <Link
              class="nav-link dropdown-toggle hidden-arrow"
              to=""
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
               <li className="border border-bottom py-1">
              <Link  to="/profile" className="px-3"  >
                My profile
                </Link>
              </li>
               <li className="border border-bottom py-1">
              <Link  to="/signin"  className="px-3">  
                Sign in
                </Link>
              </li>
               <li className="border border-bottom py-1">
              <Link  to="/signup"  className="px-3">  
                Sign Up
                </Link>
              </li>
               <li className="border border-bottom py-1">
              <Link  to="/logout"  className="px-3">  
                Log out
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
