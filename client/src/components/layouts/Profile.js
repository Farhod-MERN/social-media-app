import React, { useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import "../../css/profile.css";
import "../../css/nopost.css";
import Loader from "./Loader";
import { UserContext } from "../../App";
import { useContext } from "react";
import {MdAddPhotoAlternate, MdClose} from "react-icons/md"
import {toast} from "react-toastify"

export default function Profile() {
  // eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);
  useRef.current = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState(null);
  const [modalshow, setmodalshow] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [myname, setMyName] = useState(useRef.current.name);

  const [image, setImage] = useState("");
  // const [url, setUrl] = useState("");

  useEffect(() => {
    fetch("https://socialgram-farhod.onrender.com/mypost", {
      headers: {
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.reverse());
      });
  }, []);

  useEffect(()=>{
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
        fetch("https://socialgram-farhod.onrender.com/updatepic", {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Farhod " + localStorage.getItem("jwt"),
          },
          body: JSON.stringify({
            pic: data.url
          })
        }).then((response)=> response.json()).then(
          result => {
            console.log(result);
            localStorage.setItem("user",
            JSON.stringify({...useRef.current, pic: result.pic})) //? result.url : useRef.current.pic
            useRef.current = JSON.parse(localStorage.getItem("user"));
            
            dispatch({type: "UPDATEPIC", payload: result.pic})
          } 
        ).catch(err =>{
          console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      });
      //eslint-disable-next-line
  }, [image])

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
          <div class="w-100">
            <div class="row">
              <div class="text-center">
                <div class="col-sm-offset-1 text-center">
                  <div class="four_zero_four_bg">
                    <h3 class="text-center ">NO PHOTO</h3>
                  </div>

                  <div class="contant_box_404">
                    <p>There aren't any photo</p>

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

  const updatePhoto = ()=>{
      setmodalshow(false)
      toast.success("Saved successfully")
  }
  const setProfile = ()=>{
            fetch("https://socialgram-farhod.onrender.com/updatename", {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Farhod " + localStorage.getItem("jwt"),
              },
              body: JSON.stringify({
                myname: myname
              })
            }).then((response)=> response.json()).then(
              result => {
                console.log(result);
                localStorage.setItem("user",
                JSON.stringify({...useRef.current, name: result.name})) //? result.url : useRef.current.pic
                useRef.current = JSON.parse(localStorage.getItem("user"));
  
                dispatch({type: "UPDATEPIC", payload: result.name})
                 toast.success("Saved successfully")
              } 
            ).catch(err =>{
              console.log(err);
            })

            setisEdit(false)
  }
  return (
    <>
      {data ? (<section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card border border-2 shadow">
              <div className="rounded-top bg-dark text-white d-flex flex-row position-relative">
                <div className="ms-4 mt-3 d-flex flex-column">
                <div class="containers">
                  <img src={useRef.current.pic ? useRef.current.pic : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="Avatar" class="images img-fluid img-thumbnail mt-5 mb-2"/>
                  <div class="middles">
                    <button 
                    onClick={()=>{setmodalshow(true)}}
                    class="btn btn-primary texts"><MdAddPhotoAlternate/>
                    </button>
                  </div>
                </div>
                  <button
                    type="button"
                    onClick={()=>{setisEdit(true)}}
                    className="btn btn-secondary btn-floating myEditBtn"
                  >
                    <i className="bi bi-gear"></i>
                  </button>
                </div>
                <div className="ms-3 mb-130">
                  <h5>{useRef.current.name}</h5>
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
                    <Link to="/followerspost">
                    <p className="mb-1 h5">{useRef.current.followers.length ? useRef.current.followers.length : 0}</p>
                    <p className="small text-muted mb-0">Followers</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/followingpost">
                    <p className="mb-1 h5">{useRef.current.following.length ? useRef.current.following.length : 0}</p>
                    <p className="small text-muted mb-0">Following</p>
                    </Link>
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
        {
          isEdit ? 
          <div className="myModal"
          onClick={()=>{setisEdit(false)}}
          >
          <div className="modal__content bg-dark p-3"
          onClick={(e)=>{e.stopPropagation()}}
          >
                <div className="modalHeader">
                  <span className="text-white">Settings</span>
                  <MdClose  className="closeBtn" onClick={()=>{setisEdit(false)}}/>
                </div>
                <div className="modalCenter">
                <div class="mb-3 mt-3">
                  <input 
                    class="form-control" 
                    type="file" 
                    id="formFile"
                    onChange={(e)=>{
                      setImage(e.target.files[0]);
                      }} />
                     <input type="text" class="form-control mt-3" value={myname} onChange={
                      (e)=>{setMyName(e.target.value)}
                     }/> 
                </div>
                </div>
                <div className="modalFooter">
                  <button className="btn btn-primary"
                  onClick={()=>{setProfile()}}
                  >
                    Save
                  </button>
                </div>
          </div>
        </div>
        : null
        }
        {
          modalshow ? 
          <div className="myModal"
          onClick={()=>{setmodalshow(false)}}
          >
          <div className="modal__content bg-dark p-3"
          onClick={(e)=>{e.stopPropagation()}}
          >
                <div className="modalHeader">
                  <span className="text-white">Upload your avatar</span>
                  <MdClose  className="closeBtn" onClick={()=>{setmodalshow(false)}}/>
                </div>
                <div className="modalCenter">
                <div class="mb-3 mt-3">
                  <input 
                    class="form-control" 
                    type="file" 
                    id="formFile"
                    onChange={(e)=>{
                      setImage(e.target.files[0]);
                      }} />
                </div>
                </div>
                <div className="modalFooter">
                  <button className="btn btn-primary"
                  onClick={()=>{updatePhoto()}}
                  >
                    Save
                  </button>
                </div>
          </div>
        </div>
        : null
        }
      </div>
    </section>) : 
    <Loader />}
    </>
  );
}
