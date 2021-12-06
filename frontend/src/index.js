import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from "react-toastify";
import { Router } from "react-router-dom";
import theme from './theme';
import history from "./history";
import store from "./store/configureStore";
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const app = (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));