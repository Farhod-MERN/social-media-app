import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../../css/profile.css";
import "../../css/nopost.css";
import Loader from "./Loader";


export default function Profile() {
  const [data, setData] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    fetch("http://localhost:5000/mypost", {
      headers: {
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.reverse());
      });
  }, []);

  const userPosts = () => {
    if (data.length) {
      return [
        <div className="grid row">
          {data.map((item) => {
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
        </div>,
      ];
    } else {
      return [
        <section class="page_404">
          <div class="">
            <div class="row">
              <div class="text-center">
                <div class="col-sm-offset-1 text-center">
                  <div class="four_zero_four_bg">
                    <h3 class="text-center ">NO PHOTO</h3>
                  </div>

                  <div class="contant_box_404">
                    <p>There aren't any photp</p>

                    <Link to="/create" class="link_404">
                      Add photo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>,
      ];
    }
  };
  return (
    <>
      {data ? (<section className="h-100 gradient-custom-2">
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
                  <button
                    type="button"
                    className="btn btn-secondary btn-floating myEditBtn"
                  >
                    <i className="bi bi-gear"></i>
                  </button>
                </div>
                <div className="ms-3 mb-130">
                  <h5>{userInfo.name}</h5>
                  <p>New York</p>
                </div>
              </div>
              <div className="p-4 text-black">
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">{data.length}</p>
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
                {/* <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4">
                    <p className="font-italic mb-1">Web Developer</p>
                    <p className="font-italic mb-1">Lives in New York</p>
                    <p className="font-italic mb-0">Photographer</p>
                  </div>
                </div> */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0"></p>
                  <p className="mb-0"></p>
                </div>

                {userPosts()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>) : 
    <Loader />}
    </>
  );
}
