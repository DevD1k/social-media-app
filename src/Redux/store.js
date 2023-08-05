import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postSlice from "./postSlice";
import detailSlice from "./detailSlice";

const rootReducer = combineReducers({
  posts: postSlice,
  details: detailSlice,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
