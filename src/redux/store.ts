import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import usersReducer from "./reducers/users-reducer";

const rootReducer = combineReducers({
    usersReducer,
    // ..and another reducers here
});

type RootReducerType = typeof rootReducer;
export type AppStateType =  ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
));

export default store;
