import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";

import LandingPage from '../components/LandingPage'
import Login from '../components/Login'
import Home from '../components/Home'
import Signup from '../components/Signup'
// import ProtectedRoute from '../protected.routes'
import { PrivateRouter } from '../protected.routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<BrowserRouter>
          <Switch>
              <Route exact path="/"  component={LandingPage}></Route>

              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={Signup}></Route>

              <PrivateRouter exact path="/home" component={Home} />
              {/*<Route exact path="/home" component={Home}></Route>*/}

              <Route path="*" component={()=><div><h2>404 Not Found</h2></div>}/>

          </Switch>
</BrowserRouter>
      </header>
    </div>
  );
}



export default App;
