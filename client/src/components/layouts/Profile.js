import React from "react";
import "./profile.css"

export default function Profile() {
  return (
    <section class="h-100 gradient-custom-2">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-9 col-xl-7">
            <div class="card">
              <div class="rounded-top bg-dark text-white d-flex flex-row position-relative">
                <div class="ms-4 mt-3 d-flex flex-column">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder"
                    class="img-fluid img-thumbnail mt-5 mb-2"
                  >
                  </img>
                  <button type="button" class="btn btn-secondary btn-lg btn-floating myEditBtn">
                  <i class="bi bi-gear"></i>
                  </button>
                </div>
                <div class="ms-3 mb-130">
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
                </div>
              </div>
              <div class="p-4 text-black">
                <div class="d-flex justify-content-end text-center py-1">
                  <div>
                    <p class="mb-1 h5">253</p>
                    <p class="small text-muted mb-0">Photos</p>
                  </div>
                  <div class="px-3">
                    <p class="mb-1 h5">1026</p>
                    <p class="small text-muted mb-0">Followers</p>
                  </div>
                  <div>
                    <p class="mb-1 h5">478</p>
                    <p class="small text-muted mb-0">Following</p>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 text-black">
                {/* <div class="mb-5">
                  <p class="lead fw-normal mb-1">About</p>
                  <div class="p-4">
                    <p class="font-italic mb-1">Web Developer</p>
                    <p class="font-italic mb-1">Lives in New York</p>
                    <p class="font-italic mb-0">Photographer</p>
                  </div>
                </div> */}
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <p class="lead fw-normal mb-0">Recent photos</p>
                  <p class="mb-0">
                  </p>
                </div>
                <div class="row g-2">
                  <div class="col mb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="s"
                      class="w-100 rounded-3"
                    ></img>
                  </div>
                  <div class="col mb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="s"
                      class="w-100 rounded-3"
                    ></img>
                  </div>
                </div>
                <div class="row g-2">
                  <div class="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="s"
                      class="w-100 rounded-3"
                    ></img>
                  </div>
                  <div class="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="s"
                      class="w-100 rounded-3"
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
