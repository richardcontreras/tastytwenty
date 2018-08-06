import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import ReduxPromise from "redux-promise";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import Landing from "./components/landing";
import Matchup from "./containers/matchup";
import Rankings from "./containers/rankings";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route
          path="/overall"
          render={props => (
            <Matchup category="overall" matchupHeader="Overall" />
          )}
        />
        <Route
          path="/overall"
          render={props => <Rankings category="overall" />}
        />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
