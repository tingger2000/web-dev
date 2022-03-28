const WhoToFollowListItem = (who) => {
  return `
        <div class="list-group-item">
              <div class="row">
                <div class="col-2 px-0 d-flex justify-content-center">
                  <img
                    class="rounded-circle"
                    src=${who.avatarIcon}
                    width="45px"
                    height="45px"
                  />
                </div>
                <div class="col-6 col-xl-7 ps-1 pe-0">
                  <div class="fw-bold">
                    ${who.userName} <i class="fas fa-check-circle"></i>
                  </div>
                  <div>@${who.handle}</div>
                </div>
                <div class="col-4 col-xl-3 px-0 align-self-center">
                  <button class="btn btn-primary rounded-pill">Follow</button>
                </div>
              </div>
        </div>
    `;
};
export default WhoToFollowListItem;
