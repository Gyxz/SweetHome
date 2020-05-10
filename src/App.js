import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/sidebar.component";
import Home from "./components/home.component";
import ServiceList from "./components/servise.component";
import CraftsmanList from "./components/craftsman.component";
import ContactList from "./components/contact.component";

function App() {
  return (
    <Router>
      <Sidebar />
      <div id="page-wrap">
        <Route path="/" exact component={Home} />
        <Route path="/service" exact component={ServiceList} />
        <Route path="/craftsman" exact component={CraftsmanList} />
        <Route path="/contact" exact component={ContactList} />
      </div>
      
    </Router>
  );
}

export default App;
