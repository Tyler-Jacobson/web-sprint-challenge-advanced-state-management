import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from "../actions"

const intialState = {
    smurfs: [],
    isLoading: false
}

export const smurfReducer = (state = intialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                classes: action.payload.results
            }
        default:
            return state
    }
}