import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../actions/tuits-action";
import TuitStats from "./tuit-stats";
import "../tuiter.css";

const TuitListItem = ({
  tuit = {
    liked: false,
    postedBy: {},
    handle: "ReactJS",
    tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    attachments: {},
    avatarImage: "../../../images/react-blue.png",
    likes: 0,
    dislikes: 0,
  },
}) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item px-4">
      <div className="row">
        <div className="col-11 pe-0">
          <div className="d-flex">
            <div className="fw-bold">
              {tuit.postedBy && tuit.postedBy.username}
            </div>
            <div className="text-secondary ps-1">
              {tuit.handle && `@${tuit.handle}`}
            </div>
          </div>
          <div>{tuit.tuit}</div>
        </div>
        <div className="col-1 p-0">
          <i
            onClick={() => deleteTuit(dispatch, tuit)}
            className="btn py-0 fas fa-times"
          />
        </div>
      </div>
      <div>
        {tuit.attachments && tuit.attachments.video && (
          <iframe
            className="wd-rounded-corners-20 w-100 py-2"
            height="315"
            src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="fullscreen"
          />
        )}
        {tuit.attachments && tuit.attachments.image && (
          <img
            className="wd-rounded-corners-20 w-100 py-2"
            height="315px"
            src={tuit.attachments.image}
            alt="..."
          />
        )}
      </div>
      <TuitStats tuit={tuit} />
    </li>
  );
};
export default TuitListItem;
