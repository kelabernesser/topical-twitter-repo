import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {ThemeContextProvider} from "./ThemeContext"
import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.render(
  <Router>
  <ThemeContextProvider>
    <App/>
  </ThemeContextProvider>
  </Router>
,document.getElementById("root"))
