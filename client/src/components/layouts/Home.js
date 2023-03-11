import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="row container mx-auto mt-2">
      <div className="col-md-8 px-md-5 px-lg-5">
        <main>
          <div class="my-2">
            <div class="row">
              <div class="col-md-12">
                <section class="story-container border-0 border-bottom" id="story">
                  <ul>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                          class="rounded-circle"
                          height="50px"
                          alt="Avatar"
                        />
                      </div>
                      <span>billy_M</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                          class="rounded-circle"
                          height="50px"
                          alt="Avatar"
                        />
                      </div>
                      <span>billy_M</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                          class="rounded-circle"
                          height="50px"
                          alt="Avatar"
                        />
                      </div>
                      <span>John_doe</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                          class="rounded-circle"
                          height="50px"
                          alt="Avatar"
                        />
                      </div>
                      <span>judit_3</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                          class="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>paulaa</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/5.jpg"
                          class="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>julia_art</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                          class="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>berta_ng</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                          class="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>my_art</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/17.jpg"
                          class="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>photo_me</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/10.jpg"
                          class="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>rae</span>
                    </li>
                    <li>
                      <div class="story">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                          class="rounded-circle"
                          height="50"
                          alt="Avatar"
                        />
                      </div>
                      <span>billy_M</span>
                    </li>
                  </ul>
                </section>

                <section class="newsfeed my-5">
                  <div class="card">
                    <div class="card-body py-3">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-6 col-6">
                            <div class="d-flex story">
                              <img
                                src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                                class="rounded-circle"
                                style={{ width: "40px" }}
                                alt="Avatar"
                              ></img>
                              <div class="mt-2 mx-2">
                                <a href="/sas" class="text-dark">
                                  <strong class="mt-5 ml-2">julia_art</strong>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-6 d-flex justify-content-end">
                            <div class="nav-item dropdown me-3 me-lg-1">
                              <Link
                                class="nav-link dropdown-toggle hidden-arrow"
                                to=""
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i
                                  style={{ fontSize: "24px" }}
                                  class="bi bi-three-dots mt-2 float-right"
                                ></i>
                              </Link>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
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
                      class="bg-image hover-overlay ripple shadow-1-strong rounded-0"
                      data-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/new/standard/city/092.jpg"
                        alt="salom"
                        class="w-100"
                      ></img>
                      <a href="#!">
                        <div class="mask"></div>
                      </a>
                    </div>

                    <div class="card-body px-2">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-8">
                            <i class="bi bi-heart ml-0"></i>
                            <i class="bi bi-heart mx-2"></i>
                            <i class="bi bi-heart fa-lg"></i>
                          </div>
                          <div class="col-md-4 d-flex justify-content-end">
                            <i class="bi bi-heart"></i>
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="col-md-8 mt-1">
                            <img
                              class="rounded-circle mx-2"
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
                        <div class="row">
                          <div class="col-md-12 mt-1">
                            <p>
                              <strong class="text-dark">juliar.art</strong>{" "}
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Eveniet dolorem iste enim odit
                              corporis quos dolore rem...{" "}
                              <small class="my-1">more</small>
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <small class="my-1">View all 2137 comments</small>
                          <p class="mb-0">
                            <strong class="text-dark">alex_123</strong> Lorem,
                            ipsum dolor.
                          </p>
                          <p>
                            <strong class="text-dark">janet_t</strong> Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus corporis omnis facilis possimus.
                          </p>
                          <small class="my-1">22 hours ago</small>
                        </div>

                        <div class="row mt-2">
                          <hr />
                          <div class="col-md-11">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="form1"
                                class="form-control placeholder-active"
                                placeholder="Leave a comment"
                              />
                              <div class="form-notch">
                                <div class="form-notch-leading"></div>
                                <div class="form-notch-middle"></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-1">
                            <p class="text-info mt-1">Post</p>
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
        <section class="mt-3">
          <div class="row">
            <div class="col-md-3">
              <img
                src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                class="rounded-circle"
                style={{ width: "60px" }}
                alt="Avatar"
              ></img>
            </div>
            <div class="col-md-9">
              <ul class="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <p class="ml-3 text-dark mb-0 mt-1">
                    <strong>bill_the_programmer.js</strong>
                  </p>
                </li>
                <li>
                  <span class="ml-3 text-dark">Bill Doe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <small>Suggestions For You</small>
            <span class="float-right text-dark">See All</span>
          </div>

          <div class="row">
            <div class="col-md-2 col-2">
              <img
                src="https://mdbootstrap.com/img/new/avatars/10.jpg"
                class="rounded-circle mt-2"
                style={{ width: "40px" }}
                alt="Avatar"
              ></img>
            </div>
            <div class="col-md-8 col-8">
              <ul class="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <small class="user-name">
                    <strong>john_23</strong>
                  </small>
                </li>
                <li>
                  <span class="user-name">Followed by john_1 + 20 more</span>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-2">
              <p class="user-name mt-4 text-primary">Follow</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img
                src="https://mdbootstrap.com/img/new/avatars/11.jpg"
                class="rounded-circle mt-2"
                style={{ width: "40px" }}
                alt="Avatar"
              ></img>
            </div>
            <div class="col-md-8">
              <ul class="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <small class="user-name">
                    <strong>donald_the_duck</strong>
                  </small>
                </li>
                <li>
                  <span class="user-name">Followed by john_1 + 35 more</span>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <p class="user-name mt-4 text-primary">Follow</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img
                src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                class="rounded-circle mt-2"
                style={{ width: "40px" }}
                alt="Avatar"
              ></img>
            </div>
            <div class="col-md-8">
              <ul class="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <small class="user-name">
                    <strong>bill_the_programmer.js</strong>
                  </small>
                </li>
                <li>
                  <span class="user-name">Followed by john_1 +10 more</span>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <p class="user-name mt-4 text-primary">Follow</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img
                src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                class="rounded-circle mt-2"
                style={{ width: "40px" }}
                alt="Avatar"
              ></img>
            </div>
            <div class="col-md-8">
              <ul class="ml-0 pl-1 mt-1 list-unstyled">
                <li>
                  <small class="user-name">
                    <strong>bill_the_programmer.js</strong>
                  </small>
                </li>
                <li>
                  <span class="user-name">Followed by john_1 +10 more</span>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <p class="user-name mt-4 text-primary">Follow</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
