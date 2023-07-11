import changeTheNumber from "./Updown";
import changeTheName from "./name";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    changeTheName
})

export default rootReducer