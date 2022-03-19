import React from "react";

const WhoToFollowListItem = ({
  who = {
    avatarIcon: "../../../images/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-2 px-0 d-flex justify-content-center">
          <img
            className="rounded-circle"
            src={who.avatarIcon}
            width="45px"
            height="45px"
            alt="..."
          />
        </div>
        <div className="col-6 col-xl-7 ps-1 pe-0">
          <div className="fw-bold">
            {who.userName} <i className="fas fa-check-circle"></i>
          </div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-4 col-xl-3 px-0 align-self-center">
          <button className="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
    </div>
  );
};
export default WhoToFollowListItem;
