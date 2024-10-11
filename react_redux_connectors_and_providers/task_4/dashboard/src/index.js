import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

// Commented out: Importing Redux DevTools extension
// import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App/App";
import rootReducer, { initialState } from "./reducers/rootReducer";

// The store was initially created using `composeWithDevTools` for easier debugging
// const store = createStore(
//   uiReducer,
//   Map(initialState),
//   composeWithDevTools(applyMiddleware(thunk))
// );

// Fallback to standard Redux DevTools extension if available, otherwise use Redux's `compose`
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(rootReducer),  // Combines reducers into a single root reducer
  initialState,                 // Sets the initial state of the application
  composeEnhancers(applyMiddleware(thunk))  // Applies middleware like Redux Thunk for async actions
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provides the Redux store to the entire React app */}
      <App /> {/* Main application component */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") // Mounts the React app to the DOM element with the ID "root"
);
