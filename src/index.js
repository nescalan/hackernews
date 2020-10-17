import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './error404';

import * as serviceWorker from './serviceWorker';
// import Badge from './pruebasNel/Badge';

const container = document.getElementById('root');

ReactDOM.render(
    <App />, 
    container
);

if (module.hot) {
    module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
