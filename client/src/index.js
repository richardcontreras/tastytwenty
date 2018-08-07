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
          render={props => (
            <Rankings category="overall" rankingsHeader="Overall" />
          )}
        />
        <Route
          path="/bagel"
          render={props => <Matchup category="bagel" matchupHeader="Bagel" />}
        />
        <Route
          path="/bagel"
          render={props => <Rankings category="bagel" rankingsHeader="Bagel" />}
        />
        <Route
          path="/bbq"
          render={props => <Matchup category="bbq" matchupHeader="BBQ" />}
        />
        <Route
          path="/bbq"
          render={props => <Rankings category="bbq" rankingsHeader="BBQ" />}
        />

        <Route
          path="/breakfast"
          render={props => (
            <Matchup category="breakfast" matchupHeader="Breakfast" />
          )}
        />
        <Route
          path="/breakfast"
          render={props => (
            <Rankings category="breakfast" rankingsHeader="Breakfast" />
          )}
        />
        <Route
          path="/brewpub"
          render={props => (
            <Matchup category="brewpub" matchupHeader="Brewpub" />
          )}
        />
        <Route
          path="/brewpub"
          render={props => (
            <Rankings category="brewpub" rankingsHeader="Brewpub" />
          )}
        />
        <Route
          path="/burger"
          render={props => <Matchup category="burger" matchupHeader="Burger" />}
        />
        <Route
          path="/burger"
          render={props => (
            <Rankings category="burger" rankingsHeader="Burger" />
          )}
        />
        <Route
          path="/chicken"
          render={props => (
            <Matchup category="chicken" matchupHeader="Chicken" />
          )}
        />
        <Route
          path="/chicken"
          render={props => (
            <Rankings category="chicken" rankingsHeader="Chicken" />
          )}
        />
        <Route
          path="/chinese"
          render={props => (
            <Matchup category="chinese" matchupHeader="Chinese" />
          )}
        />
        <Route
          path="/chinese"
          render={props => (
            <Rankings category="chinese" rankingsHeader="Chinese" />
          )}
        />
        <Route
          path="/coffee"
          render={props => <Matchup category="coffee" matchupHeader="Coffee" />}
        />
        <Route
          path="/coffee"
          render={props => (
            <Rankings category="coffee" rankingsHeader="Coffee" />
          )}
        />
        <Route
          path="/deli"
          render={props => <Matchup category="deli" matchupHeader="Deli" />}
        />
        <Route
          path="/deli"
          render={props => <Rankings category="deli" rankingsHeader="Deli" />}
        />
        <Route
          path="/dessert"
          render={props => (
            <Matchup category="dessert" matchupHeader="Dessert" />
          )}
        />
        <Route
          path="/dessert"
          render={props => (
            <Rankings category="dessert" rankingsHeader="Dessert" />
          )}
        />
        <Route
          path="/dimsum"
          render={props => (
            <Matchup category="dimsum" matchupHeader="Dim Sum" />
          )}
        />
        <Route
          path="/dimsum"
          render={props => (
            <Rankings category="dimsum" rankingsHeader="Dim Sum" />
          )}
        />
        <Route
          path="/fastfood"
          render={props => (
            <Matchup category="fastfood" matchupHeader="Fast Food" />
          )}
        />
        <Route
          path="/fastfood"
          render={props => (
            <Rankings category="fastfood" rankingsHeader="Fast Food" />
          )}
        />
        <Route
          path="/foodtruck"
          render={props => (
            <Matchup category="foodtruck" matchupHeader="Food Truck" />
          )}
        />
        <Route
          path="/foodtruck"
          render={props => (
            <Rankings category="foodtruck" rankingsHeader="Food Truck" />
          )}
        />
        <Route
          path="/hawaiian"
          render={props => (
            <Matchup category="hawaiian" matchupHeader="Hawaiian" />
          )}
        />
        <Route
          path="/hawaiian"
          render={props => (
            <Rankings category="hawaiian" rankingsHeader="Hawaiian" />
          )}
        />
        <Route
          path="/icecream"
          render={props => (
            <Matchup category="icecream" matchupHeader="Ice Cream" />
          )}
        />
        <Route
          path="/icecream"
          render={props => (
            <Rankings category="icecream" rankingsHeader="Ice Cream" />
          )}
        />
        <Route
          path="/indian"
          render={props => <Matchup category="indian" matchupHeader="Indian" />}
        />
        <Route
          path="/indian"
          render={props => (
            <Rankings category="indian" rankingsHeader="Indian" />
          )}
        />
        <Route
          path="/italian"
          render={props => (
            <Matchup category="italian" matchupHeader="Italian" />
          )}
        />
        <Route
          path="/italian"
          render={props => (
            <Rankings category="italian" rankingsHeader="Italian" />
          )}
        />
        <Route
          path="/korean"
          render={props => <Matchup category="korean" matchupHeader="Korean" />}
        />
        <Route
          path="/korean"
          render={props => (
            <Rankings category="korean" rankingsHeader="Korean" />
          )}
        />
        <Route
          path="/latin"
          render={props => <Matchup category="latin" matchupHeader="Latin" />}
        />
        <Route
          path="/latin"
          render={props => <Rankings category="latin" rankingsHeader="Latin" />}
        />
        <Route
          path="/mediterranean"
          render={props => (
            <Matchup category="mediterranean" matchupHeader="Mediterranean" />
          )}
        />
        <Route
          path="/mediterranean"
          render={props => (
            <Rankings category="mediterranean" rankingsHeader="Mediterranean" />
          )}
        />
        <Route
          path="/mexican"
          render={props => (
            <Matchup category="mexican" matchupHeader="Mexican" />
          )}
        />
        <Route
          path="/mexican"
          render={props => (
            <Rankings category="mexican" rankingsHeader="Mexican" />
          )}
        />
        <Route
          path="/noodles"
          render={props => (
            <Matchup category="noodles" matchupHeader="Noodles" />
          )}
        />
        <Route
          path="/noodles"
          render={props => (
            <Rankings category="noodles" rankingsHeader="Noodles" />
          )}
        />
        <Route
          path="/pizza"
          render={props => <Matchup category="pizza" matchupHeader="Pizza" />}
        />
        <Route
          path="/pizza"
          render={props => <Rankings category="pizza" rankingsHeader="Pizza" />}
        />
        <Route
          path="/seafood"
          render={props => (
            <Matchup category="seafood" matchupHeader="Seafood" />
          )}
        />
        <Route
          path="/seafood"
          render={props => (
            <Rankings category="seafood" rankingsHeader="Seafood" />
          )}
        />
        <Route
          path="/steak"
          render={props => <Matchup category="steak" matchupHeader="Steak" />}
        />
        <Route
          path="/steak"
          render={props => <Rankings category="steak" rankingsHeader="Steak" />}
        />
        <Route
          path="/sushi"
          render={props => <Matchup category="sushi" matchupHeader="Sushi" />}
        />
        <Route
          path="/sushi"
          render={props => <Rankings category="sushi" rankingsHeader="Sushi" />}
        />
        <Route
          path="/thai"
          render={props => <Matchup category="thai" matchupHeader="Thai" />}
        />
        <Route
          path="/thai"
          render={props => <Rankings category="thai" rankingsHeader="Thai" />}
        />
        <Route
          path="/vegan"
          render={props => <Matchup category="vegan" matchupHeader="Vegan" />}
        />
        <Route
          path="/vegan"
          render={props => <Rankings category="vegan" rankingsHeader="Vegan" />}
        />
        <Route
          path="/vietnamese"
          render={props => (
            <Matchup category="vietnamese" matchupHeader="Vietnamese" />
          )}
        />
        <Route
          path="/vietnamese"
          render={props => (
            <Rankings category="vietnamese" rankingsHeader="Vietnamese" />
          )}
        />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
