import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class AppNavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
                <div className="container">   
                            <Link to="/" className="navbar-brand">
                            clientPanel
                            </Link>
                        <button className="navbar-toggler"
                             type="button" data-toggle="collapse" 
                             data-target="#navbarTogglerDemo01">
                             <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">
                                    Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item active" style={{textJustify:"right"}}>
                                    <Link to="/login" className="nav-link">
                                    Login
                                    </Link>
                                </li>
                                
                                
                    </ul>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default AppNavBar;