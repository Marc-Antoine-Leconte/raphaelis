import {combineReducers} from "redux";
import pagesContentReducer from "./pagesContentReducer";

const RootReduces = combineReducers({
    pages : pagesContentReducer
})

export default RootReduces;