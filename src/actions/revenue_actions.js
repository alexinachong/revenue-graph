export const ADD_REVENUE = 'ADD_REVENUE';

export const addRevenue = yearAndRevenue => ({
	type: ADD_REVENUE,
	yearAndRevenue: yearAndRevenue
});
