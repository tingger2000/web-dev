import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div>
      <div className="list-group">
        <a className="list-group-item" href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            active === "home" ? "active" : ""
          }`}
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-home"></i> Home
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-home"></i>
          </div>
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "active" : ""
          }`}
          aria-current="true"
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-hashtag"></i> Explore
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-hashtag"></i>
          </div>
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            active === "notifications" ? "active" : ""
          }`}
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-bell"></i> Notifications
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-bell"></i>
          </div>
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            active === "messages" ? "active" : ""
          }`}
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-envelope"></i> Messages
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-envelope"></i>
          </div>
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            active === "bookmarks" ? "active" : ""
          }`}
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-bookmark"></i> Bookmarks
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-bookmark"></i>
          </div>
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            active === "lists" ? "active" : ""
          }`}
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-list"></i> Lists
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-list"></i>
          </div>
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            active === "profile" ? "active" : ""
          }`}
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-user"></i> Profile
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-user"></i>
          </div>
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            active === "more" ? "active" : ""
          }`}
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-ellipsis-h"></i> More
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </a>
      </div>
      <div className="d-grid mt-2">
        <a className="btn btn-primary btn-block rounded-pill">Tuit</a>
      </div>
    </div>
  );
};
export default NavigationSidebar;
