import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";
const allreducers = combineReducers({
    counter: counterReducer,
    islogged: loggedReducer,
});
export default allreducers;