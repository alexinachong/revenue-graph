import { connect } from 'react-redux';
import { addRevenue } from '../../actions/revenue_actions';
import RevenueGraph from './revenue_graph';

const mapStateToProps = (state, ownProps) => {
	return {
		revenue: state.revenue,
		state: state
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addRevenue: yearAndRevenue => dispatch(addRevenue(yearAndRevenue))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RevenueGraph);
