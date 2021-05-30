import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { formReducer } from "./reducers/formreducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  form: formReducer,
});

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
