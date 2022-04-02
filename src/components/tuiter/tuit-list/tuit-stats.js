import { useDispatch } from "react-redux";
import React from "react";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({ type: "like-tuit", tuit });
  };

  return (
    <div className="row py-2">
      <div className="col-3">
        <i className="far fa-comment me-1" /> {tuit.stats.comments}
      </div>
      <div className="col-3">
        <i className="fas fa-retweet me-1" /> {tuit.stats.retuits}
      </div>
      <div onClick={likeTuit} className="col-3">
        {tuit.liked && (
          <i className="fas fa-heart me-1" style={{ color: "red" }} />
        )}
        {!tuit.liked && <i className="far fa-heart me-1" />}
        {tuit.stats && tuit.stats.likes}
      </div>
      <div className="col-3">
        <i className="fas fa-external-link-alt me-1" />
      </div>
    </div>
  );
};
export default TuitStats;
