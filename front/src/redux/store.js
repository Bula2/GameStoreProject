import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import shopReducer from "./shop-reducer";
import basketReducer from "./basket-reducer";

let reducers =  combineReducers({
    shopPage: shopReducer,
    basketPage: basketReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));


export default store;