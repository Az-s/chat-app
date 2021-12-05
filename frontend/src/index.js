import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "./history";
import store from "./store/configureStore";
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));