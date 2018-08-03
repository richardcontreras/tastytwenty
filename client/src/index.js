import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Landing from './components/landing';
import DummyComponent from './containers/dummy_container';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Landing} />                        
        </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();