import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTuit } from "../actions/tuits-action";
import "../tuiter.css";

const WhatsHappening = () => {
  const [newTuit, setNewTuit] = useState({ tuit: "New tuit" });
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
