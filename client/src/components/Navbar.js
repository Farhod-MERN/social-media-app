import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { MdExplore, MdOutlineAddCircle } from "react-icons/md";
import {IoLogOut} from "react-icons/io5"
import { RiChatSmile3Fill,RiUser2Fill } from "react-icons/ri";
import { BsSearchHeart } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Navbar() {
  //eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);

  const renderMenus = () => {
    if (state) {
      return [
        <>
          <li className="border border-bottom py-1">
            <Link to="/profile" className="px-3">
              <RiUser2Fill /> <span className="px-2">My profile</span>
            </Link>
          </li>
          <li className="border border-bottom py-1">
            <span className="px-3 text-primary">
            <IoLogOut /><span className="px-2">Log out</span>
            </span>
          </li>
        </>
      ];
    } else {
      return [
        <>
          <li className="border border-bottom py-1">
            <Link to="/signin" className="px-3">
              Sign in
            </Link>
          </li>
          <li className="border border-bottom py-1">
            <Link to="/signup" className="px-3">
              Sign Up
            </Link>
          </li>
        </>
      ];
    }
  };
  return (
    <nav className="sticky-top navbar bg-dark navbar-expand-lg navbar-light bg-light px-lg-5 px-md-5">
      <div className="container-fluid justify-content-between">
        <div className="d-flex">
          <Link
            to={state ? "/" : "/signin"}
            className="navbar-brand me-2 mb-1 d-flex align-items-center"
          >
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
              <BsSearchHeart className="mySearchIco" />
            </span>
          </form>
        </ul>

        <ul className="navbar-nav flex-row myMenues bg-dark">
          <li className="nav-item me-3 me-lg-1 active">
            <span className="nav-link">
              <h4>
                <Link to={state ? "/" : "/signin"} className="text-white">
                  <ImHome />
                </Link>
              </h4>
            </span>
          </li>

          <li className="nav-item me-3 me-lg-1">
            <span className="nav-link">
              <h4>
                <Link to={state ? "/allpost" : "/signin"} className="text-white">
                  <MdExplore />
                </Link>
              </h4>
            </span>
          </li>

          <li className="nav-item me-3 me-lg-1">
            <span className="nav-link">
              <h4>
                <Link to={state ? "/create" : "/signin"} className="text-white">
                  <MdOutlineAddCircle />
                </Link>
              </h4>
            </span>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <span className="nav-link">
              <h4>
                <Link to={state ? "/chat" : "/signin"} className="text-white">
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
                src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                className="rounded-circle"
                height="25"
                style={{ marginTop: "3px" }}
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
            <ul
              className="dropdown-menu myDropDown dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {renderMenus()}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
