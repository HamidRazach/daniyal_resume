import React from "react";
import Header from "../component/header";
import Bubbles from "../component/Bubbles";

function home() {
  return (
    <div className="main-content">
      <Bubbles />
      <div className="container">
        {/* header */}
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
