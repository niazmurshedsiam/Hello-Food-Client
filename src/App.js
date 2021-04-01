import React from 'react';
import logo from "./logo.svg";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProducts from "./component/AddProducts/AddProducts";
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddProducts">Add Product</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addProducts">
            <AddProducts />
          </Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
