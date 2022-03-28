import React from "react";

const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../images/react-blue.png",
  },
}) => {
  return (
    <li className="list-group-item p-0">
      <div className="card-body row">
        <div className="col-9 col-md-10">
          <div className="text-secondary">{post.topic}</div>
          <div className="d-flex">
            <div className="fw-bold">{post.userName}</div>
            <i className="fas fa-check-circle align-self-center px-1" />
            <div className="text-secondary">- {post.time}</div>
          </div>
          <div className="fw-bold">{post.title}</div>
          <div className="text-secondary">{post.tweets}</div>
        </div>
        <div className="col-3 col-md-2 p-0">
          <img
            className="rounded"
            src={post.image}
            width="80px"
            height="80px"
            alt="..."
          />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
