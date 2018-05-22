import { combineReducers } from 'redux';
import revenueReducer from './revenue_reducer';

const rootReducer = combineReducers({
	revenue: revenueReducer
});

export default rootReducer;
