import { CLEAR, PLAY, RENDER, SEED, SIMULATE, UPDATE } from './grid.types';

export const renderGrid = (grid) => {
	grid.generateGrid();
	return {
		type: RENDER,
	};
};

export const updateGrid = (grid, x, y) => {
	grid.updateGrid(y, x);
	return {
		type: UPDATE,
	};
};

export const simulateGrid = (grid) => {
	grid.simulateGrid();
	return {
		type: SIMULATE,
	};
};

export const togglePlayBtn = () => {
	return {
		type: PLAY,
	};
};

export const clearGrid = () => {
	return {
		type: CLEAR,
	};
};

export const seedGrid = (grid) => {
	grid.seedGrid();
	return {
		type: SEED,
	};
};
