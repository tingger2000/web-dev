import PostSummaryItem from "./post-summary-item.js";
import posts from "./posts.json";

const PostSummaryList = () => {
  return (
    <ul className="list-group list-group-flush">
      {posts.map((post) => {
        return <PostSummaryItem key={post.time} post={post} />;
      })}
    </ul>
  );
};
export default PostSummaryList;
