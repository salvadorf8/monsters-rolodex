import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App increment={1} />
    </React.StrictMode>,
    document.getElementById('root')
);
