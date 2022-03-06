const NavigationSidebar = () => {
  return `
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a href="../home.html" class="list-group-item list-group-item-action">
                    <div class="d-none d-xl-block">
                        <i class="fas fa-home"></i> Home
                     </div>
                    <div class="d-block d-xl-none">
                        <i class="fas fa-home"></i>
                     </div>
                 </a> 
                 <a
                   href="../ExploreScreen/explore.html"
                   class="list-group-item list-group-item-action active"
                   aria-current="true"
                 >
                   <div class="d-none d-xl-block">
                      <i class="fas fa-hashtag"></i> Explore
                   </div>
                   <div class="d-block d-xl-none">
                      <i class="fas fa-hashtag"></i>
                   </div>
                 </a>
                <a
                   href="notifications.html"
                   class="list-group-item list-group-item-action"
                >
                   <div class="d-none d-xl-block">
                      <i class="fas fa-bell"></i> Notifications
                   </div>
                   <div class="d-block d-xl-none">
                      <i class="fas fa-bell"></i>
                   </div>
                </a>
                <a
                  href="messages.html"
                  class="list-group-item list-group-item-action"
                >
                  <div class="d-none d-xl-block">
                      <i class="fas fa-envelope"></i> Messages
                  </div>
                  <div class="d-block d-xl-none">
                      <i class="fas fa-envelope"></i>
                  </div>
                </a>
                <a
                  href="../bookmarks.html"
                  class="list-group-item list-group-item-action"
                >
                  <div class="d-none d-xl-block">
                      <i class="fas fa-bookmark"></i> Bookmarks
                  </div>
                  <div class="d-block d-xl-none">
                      <i class="fas fa-bookmark"></i>
                  </div>
                </a>
                <a href="lists.html" class="list-group-item list-group-item-action">
                   <div class="d-none d-xl-block">
                      <i class="fas fa-list"></i> Lists
                   </div>
                  <div class="d-block d-xl-none">
                      <i class="fas fa-list"></i>
                  </div>
                </a>
                <a
                  href="../profile.html"
                  class="list-group-item list-group-item-action"
                >
                  <div class="d-none d-xl-block">
                      <i class="fas fa-user"></i> Profile
                  </div>
                  <div class="d-block d-xl-none">
                      <i class="fas fa-user"></i>
                  </div>
                </a>
                <a href="more.html" class="list-group-item list-group-item-action">
                  <div class="d-none d-xl-block">
                      <i class="fas fa-ellipsis-h"></i> More
                  </div>
                  <div class="d-block d-xl-none">
                      <i class="fas fa-ellipsis-h"></i>
                  </div>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `;
};
export default NavigationSidebar;
