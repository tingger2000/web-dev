import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);

  return (
    <ul className="list-group">
      <div className="list-group-item fw-bold">Who to Follow</div>
      {who.map((item) => {
        return <WhoToFollowListItem key={item.handle} who={item} />;
      })}
    </ul>
  );
};
export default WhoToFollowList;
