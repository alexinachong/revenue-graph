import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	let store = configureStore();
	window.store = store;
	window.getState = store.getState;
	ReactDOM.render(<Root store={store} />, root);
	registerServiceWorker();
});
