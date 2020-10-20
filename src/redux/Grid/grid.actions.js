import { RENDER, UPDATE } from './grid.types';

export const renderGrid = (grid) => {
	grid.generateGrid();
	return {
		type: RENDER,
	};
};

export const updateGrid = (grid, x, y) => {
	grid.updateGrid(y, x);
	console.log(grid);
	return {
		type: UPDATE,
	};
};
