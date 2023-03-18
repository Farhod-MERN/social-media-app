import React from "react";

function Loader(props) {
  return (
    <div class="d-flex justify-content-center align-items-center" style={{minHeight: "25vh"}}>
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  );
}

export default Loader;
