import { connect } from 'react-redux';
import { addRevenue } from '../../actions/revenue_actions';
import RevenueForm from './revenue_form';

const mapStateToProps = (state, ownProps) => {
	return {
		revenue: state.revenue
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addRevenue: yearAndRevenue => dispatch(addRevenue(yearAndRevenue))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RevenueForm);
