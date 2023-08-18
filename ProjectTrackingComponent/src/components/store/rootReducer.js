import UserReducer from "./reducer";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({ user: UserReducer });
