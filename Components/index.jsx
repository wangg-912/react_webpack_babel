import 'babel-polyfill';
import'bootstrap/scss/bootstrap.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Deskmark from '../Components/components/DeskMark';

// const app = document.createElement('div');
// document.body.appendChild(app);
// ReactDOM.render(<Deskmark />, app);

const app = document.getElementById('root');
ReactDOM.render(<Deskmark />,app);