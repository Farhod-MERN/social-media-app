import React from "react";
import { Link } from "react-router-dom";
import {ImHome} from "react-icons/im"
import {MdExplore ,MdOutlineAddCircle} from "react-icons/md"
import {RiChatSmile3Fill} from "react-icons/ri"
import {BsSearchHeart} from "react-icons/bs"
export default function Navbar() {
  return (
    <nav className="sticky-top navbar bg-dark navbar-expand-lg navbar-light bg-light px-lg-5 px-md-5">
      <div className="container-fluid justify-content-between">
        <div className="d-flex">
          <Link to="/" className="navbar-brand me-2 mb-1 d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/800px-Instagram_logo.png"
              height="40"
              alt="MDB Logo"
              loading="lazy"
              //   style="margin-top: 2px;"
            />
          </Link>
        </div>

        <ul className="navbar-nav flex-row  d-lg-flex d-md-flex">
          <form className="input-group w-auto my-auto  d-sm-flex">
            <input
              autoComplete="off"
              type="search"
              className="form-control rounded"
              placeholder="Search"
              //   style="min-width: 125px;"
            />
            <span className="input-group-text border-0  d-lg-flex text-white pointer">
              <BsSearchHeart className="mySearchIco"/>
            </span>
          </form>
        </ul>

        <ul className="navbar-nav flex-row myMenues bg-dark">
          <li className="nav-item me-3 me-lg-1 active">
            <span className="nav-link">
              <h4>
                <Link to="/" className="text-white">
                  <ImHome/>
                </Link>
              </h4>
            </span>
          </li>

          <li className="nav-item me-3 me-lg-1">
            <span className="nav-link">
              <h4>
                <Link to="/mypost" className="text-white">
                <MdExplore />
                </Link>
              </h4>
            </span>
          </li>

          <li className="nav-item me-3 me-lg-1">
            <span className="nav-link">
              <h4>
                <Link to="/create" className="text-white">
                <MdOutlineAddCircle />
                </Link>
              </h4>
            </span>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <span className="nav-link">
              <h4>
                <Link to="/chat" className="text-white">
                <RiChatSmile3Fill />
                </Link>
              </h4>
            </span>
          </li>
          <li className="nav-item dropdown me-3 me-lg-1">
            <Link
              className="nav-link dropdown-toggle hidden-arrow"
              to=""
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
            <ul
              className="dropdown-menu myDropDown dropdown-menu-end"
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
