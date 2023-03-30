import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "../../css/explorer.css";
import Loader from "./Loader";

export default function Explorer() {
  const { state, dispatch } = useContext(UserContext);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://socialgram-farhod.onrender.com/allpost", {
      headers: {
        Authorization: "Farhod " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);

        setData(result.reverse());
      });
  }, []);

  const renderPosts = () => {
    return data ? (
      data.map((item) => {
        return (
          <div className="col containerss myCol">
            <img
              src={item.photo}
              alt="Avatar"
              className="imagess myHoverImage"
            />
            <div className="middless">
              <div className="textss">
                <Link
                  to={
                    item.postedBy._id !== state._id
                      ? "/user/" + item.postedBy._id
                      : "/profile"
                  }
                >
                  {item.postedBy.name}
                </Link>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h2>No Photos Yet</h2>
    );
  };
  return (
    <div className="container text-center p-md-3">
      {data ? (
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5">
          {renderPosts()}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
