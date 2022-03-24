import React from "react";
import ExploreComponent from "./explore-component.js";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";

const ExploreScreen = () => {
  return (
    <div class="row mt-2">
      <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="explore" />
      </div>
      <div class="col-10 col-lg-7 col-xl-6 px-3">
        <ExploreComponent />
      </div>
      <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList />
      </div>
    </div>
  );
};
export default ExploreScreen;
