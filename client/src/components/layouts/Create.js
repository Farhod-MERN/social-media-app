import React, { useState, useEffect} from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Create() {
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const history = useHistory()

  useEffect(()=>{
    if(url){
      fetch("https://socialgram-farhod.onrender.com/createpost",{
      method: "post",
      headers: {
        "Content-Type":"application/json",
        "Authorization": "Farhod " + localStorage.getItem("jwt")
    },
      body: JSON.stringify({comment: comment, photo:url})
    }).then(res => res.json()).then(data =>{
      if(data.error){
        toast.warning(data.error);
      }else{
        toast.success("Added succesfully");
        history.push("/")
      }
    })
    }
  },//eslint-disable-next-line
  [url])

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image); // file nomi
    data.append("upload_preset", "farhodjon"); //
    data.append("cloud_name", "deusujhz4"); //

    //base url ga image/upload ni qo'shib qo'ydim
    fetch("https://api.cloudinary.com/v1_1/deusujhz4/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setUrl(data.url)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="bg-white">
        <div className="py-5 col-md-4 col-lg-4 mx-auto px-2">
          <div className="row d-flex ">
            <div className="col">
              <div className="card bg-dark card-registration my-4">
                <div className="row g-0">
                  <div className="">
                    <div className="card-body p-md-3 text-white text-center">
                      <h5 className="mb-5 text-uppercase text-center">
                        What are you thinking
                      </h5>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control outline-0 bg-dark border border-2 text-white"
                          id="inputGroupFile01"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                            // console.log(e.target.files[0]);
                          }}
                        />
                      </div>

                      <div className="form-outline mb-4 text-white">
                        <textarea
                          rows={4}
                          type="text"
                          defaultValue={comment}
                          onChange={(e) => {
                            setComment(e.target.value);
                          }}
                          id="form3Example9"
                          className="form-control form-control-lg border border-2 text-white"
                        ></textarea>
                        <label className="form-label" htmlFor="form3Example9">
                          <span className="px-3 bg-dark text-white">
                            Comment
                          </span>
                        </label>
                      </div>
                      <button
                        onClick={() => {
                          postDetails();
                        }}
                        className="btn btn-outline-secondary text-white"
                      >
                        Create
                      </button>
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
