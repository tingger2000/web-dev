import { useDispatch } from "react-redux";
import { updateTuit } from "../actions/tuits-action";
import React from "react";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <div className="row py-2">
      <div className="col-6">
        Likes: {tuit.likes}
        <i
          onClick={() =>
            updateTuit(dispatch, {
              ...tuit,
              likes: tuit.likes + 1,
            })
          }
          className="far fa-thumbs-up ms-2"
        />
      </div>
      <div className="col-6">
        Dislikes: {tuit.dislikes}
        <i
          onClick={() =>
            updateTuit(dispatch, {
              ...tuit,
              dislikes: tuit.dislikes + 1,
            })
          }
          className="far fa-thumbs-down ms-2"
        />
      </div>
    </div>
  );
};
export default TuitStats;
