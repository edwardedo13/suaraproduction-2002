import { combineReducers } from "redux";
import GlobalReducer from "./globalReducer";
import HomeReducer from "./homeReducer";
// import HomeReducer from './homeReducer';
// import CreateBlogReducer from './createBlogReducer';

const reducer = combineReducers({ GlobalReducer, HomeReducer });

export default reducer;
