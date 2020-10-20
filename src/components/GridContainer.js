import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { connect } from 'react-redux';

import { renderGrid } from '../redux/Grid/grid.actions';

function renderDOM(obj, size, grid) {
	const arr = [];
	for (const key in obj) {
		// eslint-disable-next-line array-callback-return
		obj[key].map((value, index) => {
			arr.push(<Cell key={`${key} ${index}`} x={index} y={parseInt(key)} size={size} />);
		});
	}

	return arr;
}

function GridContainer([grid, renderGrid]) {
	const [renderedDOM, setRenderedDOM] = useState(null);
	const styles = {
		width: `${17 * grid.getSize()}px`,
		height: `${17 * grid.getSize()}px`,
		border: 'solid black 2px',
		display: 'flex',
		flexWrap: 'wrap',
	};

	useEffect(() => {
		renderGrid(grid);
		setRenderedDOM(renderDOM(grid.getCurrentGrid(), grid.getSize(), grid));
	}, []);

	return <div style={styles}>{renderedDOM}</div>;
}

const mapStateToProps = (state) => {
	return {
		grid: state.grid.grid,
		counter: state.counter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		renderGrid: (grid) => dispatch(renderGrid(grid)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
