import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
  return `
            <ul class="list-group">
                <div class="list-group-item fw-bold">Who to Follow</div>
                ${who
                  .map((item) => {
                    return WhoToFollowListItem(item);
                  })
                  .join("")}
            </ul>
    `;
};
export default WhoToFollowList;
