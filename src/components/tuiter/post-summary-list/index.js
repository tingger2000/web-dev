import PostSummaryItem from "./post-summary-item.js";
import posts from "./posts.json";

const PostSummaryList = () => {
  return (
    <ul class="list-group list-group-flush">
      {posts.map((post) => {
        return <PostSummaryItem post={post} />;
      })}
    </ul>
  );
};
export default PostSummaryList;
