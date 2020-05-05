import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/sidebar.component";
import Home from "./components/home.component";

function App() {
  return (
    <Router>
      <Sidebar />
      <div id="page-wrap">
        <Route path="/" exact component={Home} />
      </div>
      
    </Router>
  );
}

export default App;
