import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actionCreator/index";

const initialState = {
  smurfs: [],
  error: "",
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ""
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
