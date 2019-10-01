import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AppNavBar from "./component/layout/AppNavbar"
import Dashboard from "./component/layout/Dashboard"
import Login from "./component/auth/Login"
       

class App extends Component {
    state = {  }
    render() { 
        return (
            <Router>
             <div className="App">  
                    <AppNavBar/>   
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/login" component={Login}/>
                    </Switch>
                </div>
            </div>
            </Router>
         );
    }
}
 
export default App;
