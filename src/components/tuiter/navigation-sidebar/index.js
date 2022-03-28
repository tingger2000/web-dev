import React from "react";
import navigations from "../data/navigation-sidebar.json";
import NavigationSidebarItem from "./nagivation-sidebar-item";

const NavigationSidebar = () => {
  return (
    <div>
      <div className="list-group">
        <a key="tuiter" className="list-group-item" href="/">
          <i className="fab fa-twitter" />
        </a>
        {navigations.map((nav) => {
          return <NavigationSidebarItem key={nav.link} nav={nav} />;
        })}
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
