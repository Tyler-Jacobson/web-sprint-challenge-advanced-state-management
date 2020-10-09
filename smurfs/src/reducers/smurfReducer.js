import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  CREATE_SMURF_START,
  CREATE_SMURF_SUCCESS,
} from "../actions/smurfAction";

const intialState = {
  smurfs: [],
  isLoading: false,
};

export const smurfReducer = (state = intialState, action) => {
  // console.log(state)
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case CREATE_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_SMURF_SUCCESS:
        console.log("SMURFS",state.smurfs)
        console.log("PAYLOAD",action.payload)
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
