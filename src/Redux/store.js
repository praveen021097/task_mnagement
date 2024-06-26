import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import {reducer} from "./TaskReducer/reducer";

 const store = legacy_createStore(reducer,applyMiddleware(thunk));
 export {store};


