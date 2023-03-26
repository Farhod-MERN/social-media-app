import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { MdExplore, MdOutlineAddCircle } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { RiChatSmile3Fill, RiUser2Fill } from "react-icons/ri";
import { BsSearchHeart } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../App";
import { toast } from "react-toastify";
export default function Navbar() {
  //eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [userFounded, setUserFounded] = useState([]);
  // const serchPanel = useRef(null)

  const logOut = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    history.push("/signin");
    toast.success("Log out successfully");
  };

  // useEffect(()=>{

  // })

  const serachUsers = (query)=>{
    setSearch(query)
    query ? fetch("https://socialgram-farhod.onrender.com/searchuser", {
      method: "post",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({query})
    }).then(response => response.json())
    .then(result => {
      setUserFounded(result.user)
    })
    .catch(err => console.log(err)) : setUserFounded([]);
  } 
  const renderMenus = () => {
    if (state) {
      return [
        <>
          <li className="border border-bottom py-1">
            <Link to="/profile" className="px-3">
              <RiUser2Fill /> <span className="px-2">My profile</span>
            </Link>
          </li>
          <li
            className="border border-bottom py-1"
            style={{ cursor: "pointer" }}
            onClick={() => {
              logOut();
            }}
          >
            <span className="px-3 text-primary">
              <IoLogOut />
              <span className="px-2">Log out</span>
            </span>
          </li>
        </>,
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
        </>,
      ];
    }
  };
  return (
    <nav className="sticky-top navbar myNavbar bg-dark navbar-expand-lg navbar-light bg-light px-lg-5 px-md-5">
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
          <form
            className="input-group w-auto my-auto  d-sm-flex"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <input
              autoComplete="off"
              type="search"
              className="form-control rounded"
              placeholder="Search"
              //   style="min-width: 125px;"
            />
            <span
              className="input-group-text border-0  d-lg-flex text-white pointer"
              style={{ cursor: "pointer" }}
            >
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
                <Link
                  to={state ? "/allpost" : "/signin"}
                  className="text-white"
                >
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
                src={state ? state.pic : "https://cdn-icons-png.flaticon.com/512/219/219983.png"}
                className="rounded-circle navProfile"
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // ref={serchPanel}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search users
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="navbar-nav flex-row  d-lg-flex d-md-flex">
                <form className="input-group w-auto my-auto  d-flex">
                  <input
                    autoComplete="off"
                    type="search"
                    className="form-control rounded w-100"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => {
                      serachUsers(e.target.value);
                    }}
                    //   style="min-width: 125px;"
                  />
                  <span
                    className="input-group-text border-0  d-lg-flex text-white"
                    style={{ cursor: "pointer" }}
                  >
                    <BsSearchHeart className="mySearchIco text-dark" />
                  </span>
                </form>
              </ul>
            </div>
            <div className="p-3">
              <ul className="list-group">
                {
                  userFounded.map((item)=>(
                    <li key={item._id} className="list-group-item px-2">
                      <Link to={item._id !== state._id
                            ? "/user/" + item._id
                            : "/profile"}>
                      <div className="d-flex align-items-center" aria-label="Close" data-bs-dismiss="modal">
                        <img className="mx-3 rounded" src={item.pic} alt="sa"width={30} height={30} />
                        <div className="m-0 p-0 d-flex justify-content-center flex-column">
                        <span className="m-0 p-0">{item.name}</span>
                        <small className="p-0 m-0">{item.email}</small>
                        </div>
                      </div>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
