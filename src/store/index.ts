import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {todoReducer} from "./reducers/todoReducer";
import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducer = combineReducers({
    todos: todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))