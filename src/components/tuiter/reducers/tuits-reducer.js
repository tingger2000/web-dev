import {
  CREATE_TUIT,
  DELETE_TUIT,
  FIND_ALL_TUITS,
  UPDATE_TUIT,
} from "../actions/tuits-action";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TUIT:
      return [...state, action.newTuit];
    case FIND_ALL_TUITS:
      return action.tuits;
    case DELETE_TUIT:
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case UPDATE_TUIT:
      return state.map((tuit) =>
        tuit._id === action.tuit._id ? action.tuit : tuit
      );
    default:
      return state;
  }
};
export default tuitsReducer;
