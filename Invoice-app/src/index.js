import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App url="http://localhost:3001/api/Info" pollInterval={2000} />,
  document.getElementById('root')
);
