import React from 'react';

class RevenueForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			year: '',
			revenue: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// componentWillReceiveProps(newProps) {
	// 	let newYear = newProps.year;
	// 	let newRevenue = newProps.revenue;
	// 	this.setState({
	// 		year: newYear,
	// 		revenue: newRevenue
	// 	});
	// }

	handleSubmit(e) {
		e.preventDefault();
		let year = this.state.year;
		let revenue = this.state.revenue;
		if (Number(year) && Number(revenue)) {
			this.props.addRevenue([parseInt(year), parseInt(revenue)]);
		}
		this.setState({ year: '', revenue: '' });
	}

	update(field) {
		return e =>
			this.setState({
				[field]: e.currentTarget.value
			});
	}

	render() {
		return (
			<div className="revenue-form-container">
				<form onSubmit={this.handleSubmit} className="revenue-form">
					<label>
						<input
							type="text"
							value={this.state.year}
							onChange={this.update('year')}
							placeholder="Year"
							className="revenue-input"
							id="year-field"
						/>
					</label>

					<br />
					<label>
						<input
							type="text"
							value={this.state.revenue}
							onChange={this.update('revenue')}
							placeholder="Revenue"
							className="revenue-input"
							id="revenue-field"
						/>
					</label>
					<br />
					<input type="submit" value="Plot!" className="form-buttons" />
				</form>
			</div>
		);
	}
}

export default RevenueForm;
