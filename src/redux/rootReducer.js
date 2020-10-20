import { combineReducers } from 'redux';

import gridReducer from './Grid/grid.reducer';

const rootReducer = combineReducers({
	grid: gridReducer,
});

export default rootReducer;
