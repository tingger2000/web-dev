import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../tuiter.css";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({ type: "create-tuit", tuit: whatsHappening });
  };

  return (
    <div className="row m-0 py-3">
      <div className="col-2 col-md-1 d-flex justify-content-center">
        <img
          className="rounded-circle"
          src="https://t3.ftcdn.net/jpg/00/75/33/10/360_F_75331081_axIcnWZnT1RbSsPGlgLQaCftelG158KV.jpg"
          width="48px"
          height="48px"
          alt="..."
        />
      </div>
      <div className="col-10 col-md-11">
        <textarea
          className="bg-transparent wd-text-area-no-outline w-100"
          placeholder="What's happening?"
          value={whatsHappening}
          onChange={(event) => setWhatsHappening(event.target.value)}
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
              onClick={tuitClickHandler}
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
