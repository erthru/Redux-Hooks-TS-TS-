import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducers from "./user/reducers";

const combinedReducers = combineReducers({
    userReducers: userReducers,
});

export type AppReducers = ReturnType<typeof combinedReducers>;

const store = createStore(combinedReducers, {}, applyMiddleware(...[thunk]));

export default store;
