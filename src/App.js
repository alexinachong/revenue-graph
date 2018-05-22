import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import RevenueFormContainer from './components/revenue_form/revenue_form_container';
import RevenueGraphContainer from './components/revenue_graph/revenue_graph_container';

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>Year vs. Revenue</h1>
				<RevenueFormContainer />
				<br />
				<RevenueGraphContainer />
			</div>
		);
	}
}

export default App;
