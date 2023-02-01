import { legacy_createStore as createStore } from "redux";
import { reducer } from "./slice/ListReducer";

export const store = createStore(reducer);
