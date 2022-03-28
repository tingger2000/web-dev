import React from "react";

const NavigationSidebar = ({ active = "home" }) => {
  return (
    <div>
      <div className="list-group">
        <a key="tuiter" className="list-group-item" href="/">
          <i className="fab fa-twitter" />
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            active === "home" ? "active" : ""
          }`}
          href="/tuiter"
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-home" /> Home
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-home" />
          </div>
        </a>
        <a
          key="explore"
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "active" : ""
          }`}
          href="explore"
          aria-current="true"
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-hashtag" /> Explore
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-hashtag" />
          </div>
        </a>
        <a
          key="notifications"
          className={`list-group-item list-group-item-action ${
            active === "notifications" ? "active" : ""
          }`}
          href="notifications"
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-bell" /> Notifications
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-bell" />
          </div>
        </a>
        <a
          key="messages"
          className={`list-group-item list-group-item-action ${
            active === "messages" ? "active" : ""
          }`}
          href="/messages"
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-envelope" /> Messages
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-envelope" />
          </div>
        </a>
        <a
          key="bookmarks"
          className={`list-group-item list-group-item-action ${
            active === "bookmarks" ? "active" : ""
          }`}
          href="/bookmarks"
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-bookmark" /> Bookmarks
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-bookmark" />
          </div>
        </a>
        <a
          key="lists"
          className={`list-group-item list-group-item-action ${
            active === "lists" ? "active" : ""
          }`}
          href="/lists"
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-list" /> Lists
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-list" />
          </div>
        </a>
        <a
          key="profile"
          className={`list-group-item list-group-item-action ${
            active === "profile" ? "active" : ""
          }`}
          href="/profile"
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-user" /> Profile
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-user" />
          </div>
        </a>
        <a
          key="more"
          className={`list-group-item list-group-item-action ${
            active === "more" ? "active" : ""
          }`}
          href="/more"
        >
          <div className="d-none d-xl-block">
            <i className="fas fa-ellipsis-h" /> More
          </div>
          <div className="d-block d-xl-none">
            <i className="fas fa-ellipsis-h" />
          </div>
        </a>
      </div>
      <div className="d-grid mt-2">
        <a className="btn btn-primary btn-block rounded-pill" href="/tuit">
          Tuit
        </a>
      </div>
    </div>
  );
};
export default NavigationSidebar;
