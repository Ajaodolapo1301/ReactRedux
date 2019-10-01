import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-less/semantic.less'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "tachyons"

import App from "./App" 

ReactDOM.render(<App/>,
    document.getElementById('root'));
registerServiceWorker();
