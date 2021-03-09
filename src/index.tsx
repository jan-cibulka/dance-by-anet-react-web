import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import "./components/layout.css"
ReactDOM.render(<App />, document.querySelector('#container'));

if (module && module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
