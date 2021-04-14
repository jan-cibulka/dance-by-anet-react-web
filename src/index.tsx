import ReactDOM from 'react-dom';
import React from 'react';

import { App } from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import "./components/layout.css"
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENTID;

ReactDOM.render(<BrowserRouter >
    <Auth0Provider
      domain={domain!}
      clientId={clientId!}
      redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
    </BrowserRouter>, document.querySelector('#root'));

if (module && module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
