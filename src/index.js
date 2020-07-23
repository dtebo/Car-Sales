import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import reducer from './reducers/reducer';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
