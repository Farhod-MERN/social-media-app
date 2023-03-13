import React from "react";
import "../../css/profile.css"

export default function Profile() {
  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card">
              <div className="rounded-top bg-dark text-white d-flex flex-row position-relative">
                <div className="ms-4 mt-3 d-flex flex-column">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder"
                    className="img-fluid img-thumbnail mt-5 mb-2"
                  >
                  </img>
                  <button type="button" className="btn btn-secondary btn-lg btn-floating myEditBtn">
                  <i className="bi bi-gear"></i>
                  </button>
                </div>
                <div className="ms-3 mb-130">
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
                </div>
              </div>
              <div className="p-4 text-black">
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">253</p>
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
                  <p className="lead fw-normal mb-0">Recent photos</p>
                  <p className="mb-0">
                  </p>
                </div>
                <div className="row g-2">
                  <div className="col mb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="s"
                      className="w-100 rounded-3"
                    ></img>
                  </div>
                  <div className="col mb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="s"
                      className="w-100 rounded-3"
                    ></img>
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="s"
                      className="w-100 rounded-3"
                    ></img>
                  </div>
                  <div className="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="s"
                      className="w-100 rounded-3"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
