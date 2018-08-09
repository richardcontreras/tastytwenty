import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import ReduxPromise from "redux-promise";
import registerServiceWorker from "./registerServiceWorker";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import Landing from "./components/landing";
import About from "./components/about";
import NavigationBar from "./components/navbar.js";
import Voting from "./containers/voting";
import Rankings from "./containers/rankings";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Container>
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/rankings" component={Rankings} />
        <Route path="/voting" component={Voting} />
      </Container>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
