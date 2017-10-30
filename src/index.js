import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import BaseLayout from './Components/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import foxy from './images/foxy2.jpg'

ReactDOM.render(

<BrowserRouter>
  <BaseLayout>

  <App />
</BaseLayout>
</BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
