import React from "react";
import loaderlogo from "../../assets/loaderlogo.png";
import "./Loader.css";

function Loader() {
  return (
    // style={{width:"100vw", height:"100vh", backgroundColor:"white"}}
    <div  className="loadercontainer">
      <div className="loader">
        <img src={loaderlogo} alt="Custom Loader" />
      </div>
    </div>
  );
}

export default Loader;
