import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import UsersPage from "./pages/UsersPage";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootSaga);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UsersPage />
      </Provider>
    );
  }
}

export default App;