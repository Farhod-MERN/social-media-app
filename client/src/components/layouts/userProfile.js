import React, { useEffect, useState } from "react";
import "../../css/profile.css";
import "../../css/nopost.css";
import { useParams } from "react-router-dom";
import Loader from "../layouts/Loader";
import { RiUserUnfollowFill, RiUserFollowFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { UserContext } from "../../App";
import { useContext } from "react";

export default function UserProfile() {
  const { id } = useParams();
  // 640efddd6c599e64b53cdfc8
  const [data, setData] = useState(null);
  useEffect(()=>{
    
  }) //datada userni malumotlari turadi {posts: [], user: {}}
  const { state, dispatch } = useContext(UserContext);
  const [showFollow, setShowFollow] = useState(state ? !state.following.includes(id) : true);

  useEffect(() => {
    fetch(`https://socialgram-farhod.onrender.com/user/${id}`, {
      headers: {
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result); //userni malumotlari turadi {posts: [], user: {}}
      });
  });

  const followUser = () => {
    fetch("https://socialgram-farhod.onrender.com/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: id, //id paramsdan kelyapdi
      }),
    })
      .then((result) => result.json())
      .then((mydata) => {
        // mydata
        // email: "admin@gmail.com"
        // followers: []
        // following: ['640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8']
        // name: "Admin"
        // _id: "6411b0f147c93a7fbc0a534a"
        dispatch({
          type: "UPDATE",
          payload: { following: mydata.following, followers: mydata.followers },
        });
        localStorage.setItem("user", JSON.stringify(mydata));
        setData((prevState) => {
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: [...prevState.user.followers, mydata._id],
            },
          };
        });
        setShowFollow(false)
      });
      toast.success("you start following this user");
  };

  const unFollowUser = () => {
    fetch("https://socialgram-farhod.onrender.com/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        unfollowId: id, //id paramsdan kelyapdi
      }),
    })
      .then((result) => result.json())
      .then((mydata) => {
        // mydata
        // email: "admin@gmail.com"
        // followers: []
        // following: ['640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8', '640efddd6c599e64b53cdfc8']
        // name: "Admin"
        // _id: "6411b0f147c93a7fbc0a534a"
        dispatch({
          type: "UPDATE",
          payload: { following: mydata.following, followers: mydata.followers },
        });
        localStorage.setItem("user", JSON.stringify(mydata));
        setData( (prevState) => {
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: prevState.user.followers.filter(
                (s) => s !== mydata._id // bu yerda o'zimni idimni olib tashlayapman
              ),
            },
          };
        });
        setShowFollow(true)
      });
      toast.warning("you stop following this user");
  };
  return (
    <>
      {data ? (
        <section className="h-100 gradient-custom-2">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-9 col-xl-7">
                <div className="card border border-2 shadow">
                  <div className="rounded-top bg-dark text-white d-flex flex-row position-relative">
                    <div className="ms-4 mt-3 d-flex flex-column">
                      <img
                        src={data.user.pic}
                        alt="Generic placeholder"
                        className="images img-fluid img-thumbnail mt-5 mb-2 userProfileImg"
                      ></img>
                      {showFollow ? (
                        <button
                          type="button"
                          onClick={() => {
                            followUser();
                          }}
                          className="btn btn-secondary btn-floating myEditBtn"
                        >
                          <RiUserFollowFill style={{ fontSize: "1.7rem" }} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            unFollowUser();
                          }}
                          className="btn btn-secondary btn-floating myEditBtn"
                        >
                          <RiUserUnfollowFill style={{ fontSize: "1.7rem" }} />
                        </button>
                      )}
                    </div>
                    <div className="ms-3 mb-130">
                      <h5>{data.user.name}</h5>
                      <p>New York</p>
                    </div>
                  </div>
                  <div className="p-4 text-black">
                    <div className="d-flex justify-content-end text-center py-1">
                      <div>
                        <p className="mb-1 h5">{data.posts.length}</p>
                        <p className="small text-muted mb-0">Photos</p>
                      </div>
                      <div className="px-3">
                        <p className="mb-1 h5">{data.user.followers.length}</p>
                        <p className="small text-muted mb-0">Followers</p>
                      </div>
                      <div>
                        <p className="mb-1 h5">{data.user.following.length}</p>
                        <p className="small text-muted mb-0">Following</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4 text-black">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p className="lead fw-normal mb-0"></p>
                      <p className="mb-0"></p>
                    </div>
                    {data.posts.length ? (
                      <div className="grid row">
                        {data.posts.map((item) => {
                          return (
                            <div className="col-4 mb-2 d-flex align-items-center">
                              <img
                                src={item.photo}
                                alt="s"
                                className="w-100 rounded-3 profileImages"
                              ></img>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <section className="page_404">
                        <div className="w-100">
                          <div className="row">
                            <div className="text-center">
                              <div className="col-sm-offset-1 text-center">
                                <div className="four_zero_four_bg">
                                  <h3 className="text-center ">NO PHOTO</h3>
                                </div>

                                <div className="contant_box_404">
                                  <p>There aren't any photo</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
}
