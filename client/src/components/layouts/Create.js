import React from "react";

export default function Create() {
  return (
    <div>
      <section class="bg-white">
        <div class="py-5 col-md-4 col-lg-4 mx-auto px-2">
          <div class="row d-flex ">
            <div class="col">
              <div class="card bg-dark card-registration my-4">
                <div class="row g-0">
                  <div class="">
                    <div class="card-body p-md-3 text-white text-center">
                      <h5 class="mb-5 text-uppercase text-center">
                        What are you thinking
                      </h5>
                      <div class="form-outline mb-4 text-white">
                        <input
                          type="file"
                          id="form3Example90"
                          class="form-control form-control-lg border border-2 text-white"
                        />
                      </div>

                      <div class="form-outline mb-4 text-white">
                        <textarea
                        rows={4}
                          type="text"
                          id="form3Example9"
                          class="form-control form-control-lg border border-2 text-white"
                        >

                        </textarea>
                        <label class="form-label" for="form3Example9">
                        <span className="px-3 bg-dark text-white">Comment</span>
                        </label>
                      </div>
                      <button className="btn btn-outline-secondary text-white">Create</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
