const PostSummaryItem = (post) => {
  return `
          <li class="list-group-item p-0">
                <div class="card-body row">
                  <div class="col-9 col-md-10">
                    <div class="text-secondary">${post.topic}</div>
                    <div class="d-flex">
                      <div class="fw-bold">${post.userName}</div>
                      <i class="fas fa-check-circle align-self-center px-1"></i>
                      <div class="text-secondary">- ${post.time}</div>
                    </div>
                    <div class="fw-bold">${post.title}</div>
                    <div class="text-secondary">${post.tweets}</div>
                  </div>
                  <div class="col-3 col-md-2 p-0">
                    <img
                      class="rounded"
                      src=${post.image}
                      width="80px"
                      height="80px"
                    />
                  </div>
                </div>
          </li>
  `;
};
export default PostSummaryItem;
