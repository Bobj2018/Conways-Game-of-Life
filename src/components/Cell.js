import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateGrid } from '../redux/Grid/grid.actions';

function Cell(props) {
	const styles = {
		width: '15px',
		height: '15px',
		backgroundColor: `${props.isAlive ? 'black' : 'white'}`,
		border: `solid lightgray 1px`,
	};

	return (
		<div
			style={styles}
			onClick={() => {
				console.log(props.grid.getCurrentGrid()[props.y][props.x]);
				props.updateGrid(props.grid, props.y, props.x);
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
