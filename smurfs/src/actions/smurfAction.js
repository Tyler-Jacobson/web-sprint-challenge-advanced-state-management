import axios from "axios"

export const FETCH_CLASSES_START = "FETCH_CLASSES_START"
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS"

export const fetchClasses = () => (disbatch) => {
    disbatch({ type: FETCH_CLASSES_START });
    axios
    .get("https://www.dnd5eapi.co/api/classes/")
    .then(res => {
        disbatch({ type: FETCH_CLASSES_SUCCESS, payload: res.data })
    })
    .catch((err) => console.log(err));
}