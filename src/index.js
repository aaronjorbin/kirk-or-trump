import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';
import 'normalize.css';

ReactGA.initialize('UA-4410103-13',{
});

ReactGA.pageview( '/' );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
