import * as service from "../services/tuits-service";

export const CREATE_TUIT = "CREATE_TUIT";
export const FIND_ALL_TUITS = "FIND_ALL_TUITS";
export const UPDATE_TUIT = "UPDATE_TUIT";
export const DELETE_TUIT = "DELETE_TUIT";

export const createTuit = async (dispatch, tuit, userName) => {
  const newTuit = await service.createTuit(tuit, userName);
  dispatch({
    type: CREATE_TUIT,
    newTuit,
  });
};

export const findAllTuits = async (dispatch) => {
  const tuits = await service.findAllTuits();
  dispatch({
    type: FIND_ALL_TUITS,
    tuits,
  });
};

export const deleteTuit = async (dispatch, tuit) => {
  await service.deleteTuit(tuit);
  dispatch({
    type: DELETE_TUIT,
    tuit,
  });
};

export const updateTuit = async (dispatch, tuit) => {
  await service.updateTuit(tuit);
  dispatch({
    type: UPDATE_TUIT,
    tuit,
  });
};
