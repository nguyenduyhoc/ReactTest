import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import { PostReducer } from "./Reducers/PostReducer";
import { CommentReducer } from "./Reducers/CommentReducer";

const rootReducer = combineReducers({
  PostReducer,
  CommentReducer,
});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
