import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class RevenueGraph extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				hAxis: { title: 'Year', minValue: 2000, maxValue: 2020 },
				vAxis: { title: 'Revenue', minValue: 0, maxValue: 1000 },
				legend: 'none',
				pointSize: 5,
				backgroundColor: '#f3f3f3'
			},
			// data: [['Year', 'Revenue'], [2004, 400]]
			data: [['Year', 'Revenue']]
		};

		this.sortData = this.sortData.bind(this);
	}

	componentDidMount() {
		this.setState({ data: this.props.revenue });
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			data: newProps.revenue
		});
	}

	sortData(points) {
		let noHeader = points.slice(1);
		let sorted = noHeader.sort();
		return points.slice(0, 1).concat(sorted);
	}

	render() {
		if (this.props.revenue.length == 1) {
			return <h2>Please enter a datapoint above.</h2>;
		} else {
			return (
				<Chart
					className="chart"
					chartType="LineChart"
					data={this.sortData(this.state.data)}
					options={this.state.options}
					graph_id="LineChart"
					width="80%"
					height="400px"
					legend_toggle
				/>
			);
		}
	}
}

export default RevenueGraph;
