import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import who from "./who.json";

const WhoToFollowList = () => {
  return (
    <ul class="list-group">
      <div class="list-group-item fw-bold">Who to Follow</div>
      {who.map((item) => {
        return <WhoToFollowListItem who={item} />;
      })}
    </ul>
  );
};
export default WhoToFollowList;
