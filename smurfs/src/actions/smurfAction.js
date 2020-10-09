import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";

export const CREATE_SMURF_START = "CREATE_SMURF_START";
export const CREATE_SMURF_SUCCESS = "CREATE_SMURF_SUCCESS";

export const fetchSmurfs = () => (disbatch) => {
  disbatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      // console.log(res)
      disbatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const createSmurf = (data) => (disbatch) => {
  disbatch({ type: CREATE_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", data)
    .then((res) => {
      console.log(res.data);
      disbatch({ type: CREATE_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      debugger;
    });
};
