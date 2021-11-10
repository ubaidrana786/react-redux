import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
const reduers = combineReducers({
    amount : amountReducer
})
export default reduers;