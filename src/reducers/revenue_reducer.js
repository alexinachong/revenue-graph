import { merge } from 'lodash';
import { ADD_REVENUE } from '../actions/revenue_actions';

let initialData = [['Year', 'Revenue']];

const revenueReducer = (state = initialData, action) => {
	Object.freeze(state);

	switch (action.type) {
		case ADD_REVENUE:
			let newState = state.slice(0);
			return newState.concat([action.yearAndRevenue]);

		default:
			return state;
	}
};

export default revenueReducer;
