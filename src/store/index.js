import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { reducer } from "./slice/ListReducer";
import logger from "redux-logger";

export const store = createStore(reducer, applyMiddleware(logger));
