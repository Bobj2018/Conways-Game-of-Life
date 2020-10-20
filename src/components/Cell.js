import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateGrid } from '../redux/Grid/grid.actions';

function Cell(props) {
	const styles = {
		width: '15px',
		height: '15px',
		backgroundColor: `${false} ? 'black' : 'white'}`,
		border: `solid lightgray 1px`,
	};

	return (
		<div
			style={styles}
			onClick={() => {
				props.updateGrid(props.grid, props.x, props.y);
			}}
		></div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateGrid: (grid, x, y) => dispatch(updateGrid(grid, x, y)),
	};
};

const mapStateToProps = (state) => {
	return {
		grid: state.grid.grid,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Cell);
