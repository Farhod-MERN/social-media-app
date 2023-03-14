import React from "react";
import { Link } from "react-router-dom";
import "../../css/Home.css";

export default function Home() {
  return (
    <div className="row container mx-auto mt-2">
      <div className="col-md-8 px-md-5 px-lg-5">
        <main>
          <div className="my-2">
            <div className="row">
              <div className="col-md-12">
                <section className="story-container border-0 border-bottom px-0 mx-0" id="story">
                  <ul className="px-0">
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

                <section className="newsfeed my-5 ">
                  <div className="card">
                    <div className="card-body py-3">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-6">
                            <div className="d-flex story">
                              <img
                                src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                                className="rounded-circle"
                                style={{ width: "40px" }}
                                alt="Avatar"
                              ></img>
                              <div className="mt-2 mx-2">
                                <a href="/sas" className="text-dark">
                                  <strong className="mt-5 ml-2">julia_art</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6 d-flex justify-content-end text-dark">
                            <div className="nav-item dropdown me-3 me-lg-1">
                              <Link
                                className="nav-link dropdown-toggle hidden-arrow"
                                to=""
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
                                  <Link to="/profile" className="px-3">
                                    Copy Link
                                  </Link>
                                </li>
                                <li className="border border-bottom py-1">
                                  <Link to="/signin" className="px-3">
                                    Edit
                                  </Link>
                                </li>
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
                        src="https://mdbootstrap.com/img/new/standard/city/092.jpg"
                        alt="salom"
                        className="w-100"
                      ></img>
                      <a href="#!">
                        <div className="mask"></div>
                      </a>
                    </div>

                    <div className="card-body px-2 text-dark">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8">
                            <i className="bi bi-heart ml-0"></i>
                            <i className="bi bi-heart mx-2"></i>
                            <i className="bi bi-heart fa-lg"></i>
                          </div>
                          <div className="col-md-4 d-flex justify-content-end">
                            <i className="bi bi-heart"></i>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-8 mt-1">
                            <img
                              className="rounded-circle mx-2"
                              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                              alt="avatar"
                              style={{ width: "30px" }}
                            ></img>
                            <small>
                              Liked by <strong>janet_t</strong> and
                              <strong>500,678</strong> others
                            </small>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mt-1">
                            <p>
                              <strong className="text-dark">juliar.art</strong>{" "}
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Eveniet dolorem iste enim odit
                              corporis quos dolore rem...{" "}
                              <small className="my-1">more</small>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <small className="my-1">View all 2137 comments</small>
                          <p className="mb-0">
                            <strong className="text-dark">alex_123</strong> Lorem,
                            ipsum dolor.
                          </p>
                          <p>
                            <strong className="text-dark">janet_t</strong> Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus corporis omnis facilis possimus.
                          </p>
                          <small className="my-1">22 hours ago</small>
                        </div>

                        <div className="row mt-2">
                          <hr />
                          <div className="col-md-11">
                            <div className="form-outline">
                              <input
                                type="text"
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
                          <div className="col-md-1">
                            <p className="text-info mt-1">Post</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="col-md-4 border rounded mt-2 px-md-5 px-lg-5">
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
                    <strong>bill_the_programmer.js</strong>
                  </p>
                </li>
                <li>
                  <span className="ml-3 text-dark">Bill Doe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <small>Suggestions For You</small>
            <span className="float-right text-dark">See All</span>
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
                <li>
                  <span className="user-name">Followed by john_1 + 20 more</span>
                </li>
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
                <li>
                  <span className="user-name">Followed by john_1 + 35 more</span>
                </li>
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
                <li>
                  <span className="user-name">Followed by john_1 +10 more</span>
                </li>
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
                <li>
                  <span className="user-name">Followed by john_1 +10 more</span>
                </li>
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
