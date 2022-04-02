import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
  return (
    <div>
      <div className="row mb-2 px-2">
        <div
          className="col-10 col-md-11 bg-white rounded-pill border p-0 d-flex align-self-center"
          style={{ height: "40px" }}
        >
          <i className="fas fa-search px-3 align-self-center"></i>
          <input
            className="border-0 p-0"
            style={{ outlineStyle: "none" }}
            placeholder="Search Tuiter"
          />
        </div>
        <div className="col-2 col-md-1 d-flex justify-content-end align-self-center p-0">
          <i className="fas fa-cog fa-2x text-primary"></i>
        </div>
      </div>

      <div className="row mb-2 px-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="for-you.html">
              For you
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="trending.html">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="news.html">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sports.html">
              Sports
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" href="entertainment.html">
              Entertainment
            </a>
          </li>
        </ul>
      </div>

      <div className="card border-0">
        <img
          className="card-img rounded-0"
          src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
          alt="..."
        />
        <div className="card-img-overlay flex-column d-flex justify-content-end px-2 py-2">
          <h3 className="card-title text-light fw-bold mb-0">
            SpaceX's Starship
          </h3>
        </div>
      </div>
      {PostSummaryList()}
    </div>
  );
};
export default ExploreComponent;
