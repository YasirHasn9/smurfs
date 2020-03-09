// axios to fetch data
import axios from "axios";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

// action creator
// get the data from the api

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_DATA_FAILURE, payload: err }));
};

export const addNewSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_NEW_SMURF, payload: newSmurf });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
