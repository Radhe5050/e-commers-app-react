import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/main-bg.jpg"
          className="card-img"
          alt="Main Background"
          height="683px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVAL
            </h5>
            <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
