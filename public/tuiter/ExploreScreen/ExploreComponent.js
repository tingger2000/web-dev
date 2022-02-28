import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
           <!-- search bar -->
           <div class="row mb-2 px-2">
            <div
              class="col-10 col-md-11 wd-height-40 bg-white rounded-pill border p-0 d-flex align-self-center"
            >
              <i class="fas fa-search px-3 align-self-center"></i>
              <input
                class="border-0 p-0 wd-input-no-outline"
                placeholder="Search Tuiter"
              />
            </div>
            <div class="col-2 col-md-1 d-flex justify-content-end align-self-center p-0">
              <i class="fas fa-cog fa-2x text-primary"></i>
            </div>
          </div>
          
          <!-- navigation tabs-->
           <div class="row mb-2 px-3">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
              </li>
              <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
              </li>
            </ul>
          </div>
          
           <!-- image with overlaid text -->
           <div class="card border-0">
            <img
              class="card-img rounded-0"
              src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
              alt="..."
            />
            <div
              class="card-img-overlay flex-column d-flex justify-content-end px-2 py-2"
            >
              <h3 class="card-title text-light fw-bold mb-0">
                SpaceX's Starship
              </h3>
            </div>
          </div>
          
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
