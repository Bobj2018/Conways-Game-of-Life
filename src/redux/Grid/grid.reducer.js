import Grid from '../../helpers/grid';
import { RENDER, UPDATE, SIMULATE, PLAY, CLEAR, SEED } from './grid.types';

const INITIAL_STATE = {
	grid: new Grid(),
	updateState: 0,
	generation: 0,
	isPlaying: false,
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
				updateState: !state.updateState,
			};
		case SIMULATE:
			return {
				...state,
				updateState: !state.updateState,
				generation: state.grid.getGeneration(),
			};
		case PLAY:
			return {
				...state,
				updateState: !state.updateState,
				isPlaying: !state.isPlaying,
			};
		case CLEAR:
			return {
				...state,
				grid: new Grid(),
				generation: 0,
				updateState: !state.updateState,
				isPlaying: false,
			};
		case SEED:
			return {
				...state,
				generation: 0,
				updateState: !state.updateState,
				isPlaying: false,
			};
		default:
			return state;
	}
};

export default reducer;
