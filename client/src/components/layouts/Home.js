import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Home.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { UserContext } from "../../App";
import { useContext } from "react";
import Loader from "./Loader";

export default function Home() {
  //eslint-disable-next-line
  const { dispatch, state } = useContext(UserContext);
  const [commentText, setCommentText] = useState("");
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("https://socialgram-farhod.onrender.com/allpost", {
      headers: {
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);

        setData(result.reverse());
      });
  }, []);

  const likePost = (id) => {
    fetch("https://socialgram-farhod.onrender.com/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        //bu bitta user 1 ta like bosishi uchun , agar like bosgan bo'lsa dataga o'sha user idisi tushib qo'ladi, keyin datani tekshiraman agar id bor bo'lsa u user like bosgan
        const neewData = data.map((item) => {
          if (item._id === result._id) {
            // console.log(result);
            return result;
          } else {
            // console.log(item);
            return item; //agar postdagi likes arrayda user idisi bo'lsa eski likesni qaytar
          }
        });
        setData(neewData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unLikePost = (id) => {
    fetch("https://socialgram-farhod.onrender.com/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const neewData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(neewData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const commentPost = (text, postedBy) => {
    fetch("https://socialgram-farhod.onrender.com/comments", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postedBy,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
        console.log(result, "uraaaa");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postId) => {
    fetch(`https://socialgram-farhod.onrender.com/deletepost/${postId}`, {
      method: "delete",
      headers: {
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.filter((s) => s._id !== result._id);
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row container mx-auto mt-2">
      <div className="col-md-8 px-md-5 px-lg-5">
        <main>
          <div className="my-2">
            <div className="row">
              <div className="col-md-12">
                <section className="story-container px-0 mx-0" id="story">
                  <ul className="px-0 mb-0">
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                          className="rounded-circle"
                          height="50px"
                          alt="Avatar"
                        />
                      </div>
                      <span>billy_M</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                          className="rounded-circle"
                          height="50px"
                          alt="Avatar"
                        />
                      </div>
                      <span>billy_M</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                          className="rounded-circle"
                          height="50px"
                          alt="Avatar"
                        />
                      </div>
                      <span>John_doe</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                          className="rounded-circle"
                          height="50px"
                          alt="Avatar"
                        />
                      </div>
                      <span>judit_3</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                          className="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>paulaa</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/5.jpg"
                          className="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>julia_art</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                          className="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>berta_ng</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                          className="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>my_art</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/17.jpg"
                          className="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>photo_me</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/10.jpg"
                          className="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>rae</span>
                    </li>
                    <li>
                      <div className="story">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                          className="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>billy_M</span>
                    </li>
                  </ul>
                </section>

                {data ? (
                  <section className="newsfeed my-5 px-lg-5">
                    {data.map((item) => {
                      // console.log(item);
                      return (
                        <div className="card border border-2">
                          <div className="card-body py-2 px-1">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-6 col-6">
                                  <div className="story">
                                    <Link
                                      to={
                                        item.postedBy._id !== state._id
                                          ? "/user/" + item.postedBy._id
                                          : "/profile"
                                      }
                                      className="text-dark d-flex"
                                    >
                                      <img
                                        src={item.postedBy.pic}
                                        className="rounded-circle"
                                        style={{ width: "40px" }}
                                        alt="Avatar"
                                      ></img>
                                      <div className="mt-2 mx-1">
                                        <strong className="mt-5 ml-2">
                                          {item.postedBy.name}
                                        </strong>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-md-6 col-6 d-flex justify-content-end text-dark">
                                  <div className="nav-item dropdown me-3 me-lg-1">
                                    <Link
                                      className="nav-link dropdown-toggle hidden-arrow"
                                      to="/"
                                      id="navbarDropdownMenuLink"
                                      role="button"
                                      data-mdb-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i
                                        style={{ fontSize: "24px" }}
                                        className="bi bi-three-dots mt-2 float-right"
                                      ></i>
                                    </Link>
                                    <ul
                                      className="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="navbarDropdownMenuLink"
                                    >
                                      <li className="border border-bottom py-1">
                                        <Link to="/" className="px-3">
                                          Copy Link
                                        </Link>
                                      </li>
                                      <li className="border border-bottom py-1">
                                        <Link to="/" className="px-3">
                                          DownLoad
                                        </Link>
                                      </li>
                                      {item.postedBy._id === state._id ? (
                                        <>
                                          <li className="border border-bottom py-1">
                                            <Link to="/" className="px-3">
                                              Edit
                                            </Link>
                                          </li>
                                          <li className="border border-bottom py-1">
                                            <span
                                              className="px-3 text-danger"
                                              style={{ cursor: "pointer" }}
                                              onClick={() =>
                                                deletePost(item._id)
                                              }
                                            >
                                              Delete
                                            </span>
                                          </li>
                                        </>
                                      ) : null}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-image hover-overlay ripple shadow-1-strong rounded-0"
                            data-ripple-color="light"
                          >
                            <img
                              src={item.photo}
                              alt={item.photo}
                              className="w-100"
                            ></img>
                            <span>
                              <div className="mask"></div>
                            </span>
                          </div>

                          <div className="card-body px-2 py-2 text-dark">
                            <div className="container">
                              <div className="row">
                                <div className="col-6">
                                  {item.likes.includes(state._id) ? (
                                    <BsHeartFill
                                      className="likeBtn text-danger"
                                      onClick={() => unLikePost(item._id)}
                                    />
                                  ) : (
                                    <BsHeart
                                      className="likeBtn"
                                      onClick={() => likePost(item._id)}
                                    />
                                  )}
                                  <TfiCommentsSmiley
                                    className="likeBtn"
                                    onClick={() => {
                                      setShow(!show);
                                    }}
                                  />
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                  <FaHandHoldingHeart className="mx-2 text-danger likeBtn" />{" "}
                                  {item.likes.length} likes
                                </div>
                              </div>
                              {/* <div className="row mt-1">
                              <div className="col-md-8 mt-1">
                                <img
                                  className="rounded-circle mx-2"
                                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                                  alt="avatar"
                                  style={{ width: "30px" }}
                                ></img>
                                <small>
                                  Liked by <strong>janet_t</strong> and
                                  <strong>500,678</strong> others
                                </small>
                              </div>
                            </div> */}
                              <div className="row">
                                <div className="col-md-12 mt-1">
                                  <p>
                                    <Link
                                      to={
                                        item.postedBy._id !== state._id
                                          ? "/user/" + item.postedBy._id
                                          : "/profile"
                                      }
                                    >
                                      <strong className="text-dark">
                                        {item.postedBy.name} :
                                      </strong>
                                    </Link>
                                    {item.comment}
                                    {/* <small className="my-1 mx-2 text-primary">
                                    more
                                  </small> */}
                                    <p className="my-1">
                                      {item.comments.length} comments,{" "}
                                      <small
                                        style={{ cursor: "pointer" }}
                                        className="text-primary"
                                        onClick={() => {
                                          setShow(!show);
                                        }}
                                      >
                                        read ...
                                      </small>
                                    </p>
                                  </p>
                                </div>
                              </div>
                              {show ? (
                                <div className="row myCommentDiv">
                                  {item.comments.map((c) => {
                                    console.log(c);
                                    return (
                                      <p
                                        key={new Date().getTime}
                                        className="mb-0"
                                      >
                                        <strong className="text-dark">
                                          <Link
                                            to={
                                              c.postedBy._id !== state._id
                                                ? "/user/" + c.postedBy._id
                                                : "/profile"
                                            }
                                          >
                                            {c.postedBy.name} :
                                          </Link>
                                        </strong>
                                        {c.text}
                                      </p>
                                    );
                                  })}
                                  {/* <small className="my-1">22 hours ago</small> */}
                                </div>
                              ) : null}
                              <form
                                className="row mt-2"
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  commentPost(commentText, item._id);
                                  setCommentText("");
                                }}
                              >
                                <hr />
                                <div className="col-11">
                                  <div className="form-outline">
                                    <input
                                      type="text"
                                      value={commentText}
                                      onChange={(e) =>
                                        setCommentText(e.target.value)
                                      }
                                      id="form1"
                                      className="form-control placeholder-active"
                                      placeholder="Leave a comment"
                                    />
                                    <div className="form-notch">
                                      <div className="form-notch-leading"></div>
                                      <div className="form-notch-middle"></div>
                                      <div className="form-notch-trailing"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-1 m-0 p-0">
                                  <button className="mySendBtn text-info">
                                    <MdSend className="m-0 p-0" />
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </section>
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="col-md-4 border border-2 rounded mt-md-4 mt-lg-4 mb-2">
        <section className="mt-3">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                className="rounded-circle"
                style={{ width: "60px" }}
                alt="Avatar"
              ></img>
            </div>
            <div className="col-md-9">
              <ul className="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <p className="ml-3 text-dark mb-0 mt-1">
                    <strong>{userInfo ? userInfo.name : "name"}</strong>
                  </p>
                </li>
                <li>
                  <span className="ml-3 text-dark"> {userInfo ?  userInfo.email : "email" }</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <small>Suggestions For You</small>
            {/* <span className="float-right text-dark">See All</span> */}
          </div>

          <div className="row">
            <div className="col-md-2 col-2">
              <img
                src="https://mdbootstrap.com/img/new/avatars/10.jpg"
                className="rounded-circle mt-2"
                style={{ width: "40px" }}
                alt="Avatar"
              ></img>
            </div>
            <div className="col-md-8 col-8">
              <ul className="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <small className="user-name">
                    <strong>john_23</strong>
                  </small>
                </li>
                {/* <li>
                  <span className="user-name">
                    Followed by john_1 + 20 more
                  </span>
                </li> */}
              </ul>
            </div>
            <div className="col-md-2 col-2">
              <p className="user-name mt-4 text-primary">Follow</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://mdbootstrap.com/img/new/avatars/11.jpg"
                className="rounded-circle mt-2"
                style={{ width: "40px" }}
                alt="Avatar"
              ></img>
            </div>
            <div className="col-md-8">
              <ul className="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <small className="user-name">
                    <strong>donald_the_duck</strong>
                  </small>
                </li>
                {/* <li>
                  <span className="user-name">
                    Followed by john_1 + 35 more
                  </span>
                </li> */}
              </ul>
            </div>
            <div className="col-md-2">
              <p className="user-name mt-4 text-primary">Follow</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                className="rounded-circle mt-2"
                style={{ width: "40px" }}
                alt="Avatar"
              ></img>
            </div>
            <div className="col-md-8">
              <ul className="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <small className="user-name">
                    <strong>bill_the_programmer.js</strong>
                  </small>
                </li>
                {/* <li>
                  <span className="user-name">Followed by john_1 +10 more</span>
                </li> */}
              </ul>
            </div>
            <div className="col-md-2">
              <p className="user-name mt-4 text-primary">Follow</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                className="rounded-circle mt-2"
                style={{ width: "40px" }}
                alt="Avatar"
              ></img>
            </div>
            <div className="col-md-8">
              <ul className="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <small className="user-name">
                    <strong>bill_the_programmer.js</strong>
                  </small>
                </li>
                {/* <li>
                  <span className="user-name">Followed by john_1 +10 more</span>
                </li> */}
              </ul>
            </div>
            <div className="col-md-2">
              <p className="user-name mt-4 text-primary">Follow</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
