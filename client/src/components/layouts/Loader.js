import React from "react";

function Loader(props) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: "25vh"}}>
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Loader;
