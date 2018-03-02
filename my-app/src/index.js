import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'materialize/dist/css/materialize.css';
// import 'bootstrap/dist/css/bootstrap.css';
// importar componente App de archivo Ap
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
