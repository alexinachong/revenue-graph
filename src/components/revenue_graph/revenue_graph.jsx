import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class RevenueGraph extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				title: 'Year vs. Revenue',
				hAxis: { title: 'Year', minValue: 2000, maxValue: 2020 },
				vAxis: { title: 'Revenue', minValue: 0, maxValue: 1000 },
				legend: 'none',
				backgroundColor: 'transparent'
			},
			// data: [['Year', 'Revenue'], [2004, 400]]
			data: [['Year', 'Revenue']]
		};
	}

	componentDidMount() {
		this.setState({ data: this.props.revenue });
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			data: newProps.revenue
		});
	}

	render() {
		return (
			<Chart
				chartType="LineChart"
				data={this.state.data}
				options={this.state.options}
				graph_id="LineChart"
				width="100%"
				height="400px"
				legend_toggle
			/>
		);
	}
}

export default RevenueGraph;
