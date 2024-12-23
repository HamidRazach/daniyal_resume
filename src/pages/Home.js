import React from "react";
import Header from "../component/header";

function home() {
  return (
    <div className="main-content">
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
