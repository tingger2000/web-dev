import React from "react";

const NavigationSidebarItem = ({
  nav = {
    text: "Home",
    icon: "fas fa-home",
    active: false,
  },
}) => {
  return (
    <a
      className={`list-group-item list-group-item-action ${
        nav.active ? "active" : ""
      }`}
      href={`/tuiter/${nav.link ? nav.link : ""}`}
    >
      <div className="d-none d-xl-block">
        <i className={nav.icon} /> {nav.text}
      </div>
      <div className="d-block d-xl-none">
        <i className="fas fa-home" />
      </div>
    </a>
  );
};
export default NavigationSidebarItem;
