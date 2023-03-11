import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-lg-5 px-md-5">
      <div class="container-fluid justify-content-between">
        <div class="d-flex">
          <Link to="/" class="navbar-brand me-2 mb-1 d-flex align-items-center">
            <img
              src="https://www.clipartmax.com/png/middle/137-1375168_instagram-logo-free-social-media-icons-flaticon-instagram-logo-png.png"
              height="30"
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
            <span class="input-group-text border-0 d-none d-lg-flex">
            <i class="bi bi-search"></i>
            </span>
          </form>
        </ul>

        <ul class="navbar-nav flex-row">
          <li class="nav-item me-3 me-lg-1 active">
            <span class="nav-link">
              <h4>
                <Link to="/">
                <i class="bi bi-house"></i>
                </Link>
              </h4>
            </span>
          </li>

          <li class="nav-item me-3 me-lg-1">
            <span class="nav-link">
              <h4>
                <Link to="/signin">
                <i class="bi bi-flag"></i>
                </Link>
              </h4>
            </span>
          </li>

          <li class="nav-item me-3 me-lg-1">
            <span class="nav-link">
              <h4>
                <Link to="/signup">
                  <i class="bi bi-camera-video"></i>
                </Link>
              </h4>
            </span>
          </li>

          <li class="nav-item me-3 me-lg-1">
            <span class="nav-link">
              <h4>
                <Link  to="/profile">
                  <i class="bi bi-bag"></i>
                </Link>
              </h4>
            </span>
          </li>

          <li class="nav-item me-3 me-lg-1">
            {/* <a class="nav-link" href="/">
              <h4>
                <i class="bi bi-people"></i>
              </h4>
            </a> */}
          </li>
          <li class="nav-item me-3 me-lg-1">
            {/* <a class="nav-link d-sm-flex align-items-sm-center mt-1 border rounded" href="/">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                class="rounded-circle"
                height="22"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
