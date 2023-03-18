import React, { useEffect, useState } from "react";
import "../../css/profile.css";
import "../../css/nopost.css";
import { useParams } from "react-router-dom";
import Loader from "../layouts/Loader";

export default function UserProfile() {
  const { id } = useParams();
  // 640efddd6c599e64b53cdfc8
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${id}`, {
      headers: {
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
      //eslint-disable-next-line
  }, []);

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
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder"
                        className="img-fluid img-thumbnail mt-5 mb-2"
                      ></img>
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
                        <p className="mb-1 h5">1026</p>
                        <p className="small text-muted mb-0">Followers</p>
                      </div>
                      <div>
                        <p className="mb-1 h5">478</p>
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
                        <div className="">
                          <div className="row">
                            <div className="text-center">
                              <div className="col-sm-offset-1 text-center">
                                <div className="four_zero_four_bg">
                                  <h3 className="text-center ">NO PHOTO</h3>
                                </div>

                                <div className="contant_box_404">
                                  <p>There aren't any photp</p>
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
      ) : 
        <Loader />
      }
    </>
  );
}
