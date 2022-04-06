import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTuit } from "../actions/tuits-action";
import "../tuiter.css";

const WhatsHappening = () => {
  const [newTuit, setNewTuit] = useState({
    tuit: "New tuit",
    postedBy: { username: "kaylee" },
  });
  const dispatch = useDispatch();

  return (
    <div className="row m-0 py-3">
      <div className="col-2 col-md-1 d-flex justify-content-center">
        <img
          className="rounded-circle"
          src="./../../images/react-blue.png"
          width="48px"
          height="48px"
          alt="..."
        />
      </div>
      <div className="col-10 col-md-11">
        Username:
        <input
          className="mx-2 mb-3 bg-transparent wd-text-area-no-outline 2-100"
          placeholder="Enter username"
          value={newTuit.postedBy.username}
          onChange={(e) =>
            setNewTuit({ ...newTuit, postedBy: { username: e.target.value } })
          }
        />
        <textarea
          className="bg-transparent wd-text-area-no-outline w-100"
          placeholder="What's happening?"
          value={newTuit.tuit}
          onChange={(e) => setNewTuit({ ...newTuit, tuit: e.target.value })}
        />
        <hr />
        <div>
          <i className="far fa-image pe-3" />
          <i className="far fa-chart-bar pe-3" />
          <i className="far fa-smile pe-3" />
          <i className="far fa-calendar" />
          <div className="float-end">
            <button
              className="btn btn-primary rounded-pill"
              onClick={() => createTuit(dispatch, newTuit)}
            >
              Tuit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;
