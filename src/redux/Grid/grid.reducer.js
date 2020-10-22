import Grid from '../../helpers/grid';
import { RENDER, UPDATE, SIMULATE } from './grid.types';

const INITIAL_STATE = {
	grid: new Grid(),
	counter: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RENDER:
			return {
				...state,
			};
		case UPDATE:
			return {
				...state,
				counter: state.counter + 1,
			};
		case SIMULATE:
			return {
				...state,
				counter: state.counter + 1,
			};
		default:
			return state;
	}
};

export default reducer;
