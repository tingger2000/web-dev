import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    case "create-tuit":
      const newTuit = {
        tuit: action.tuit,
        _id: new Date().getTime() + "",
        postedBy: {
          username: "ReactJS",
        },
        handle: "kayleeg",
        avatarImage:
          "https://t3.ftcdn.net/jpg/00/75/33/10/360_F_75331081_axIcnWZnT1RbSsPGlgLQaCftelG158KV.jpg",
        stats: {
          retuits: 111,
          likes: 222,
          replies: 333,
        },
      };
      return [newTuit, ...state];
    case "delete-tuit":
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case "like-tuit":
      return state.map((tuit) => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
        }
        return tuit;
      });
    default:
      return state;
  }
};
export default tuitsReducer;
