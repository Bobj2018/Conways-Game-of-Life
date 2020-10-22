import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { connect } from 'react-redux';

import { renderGrid } from '../redux/Grid/grid.actions';

function GridContainer(props) {
	const { grid } = props;
	const [renderedDOM, setRenderedDOM] = useState(null);
	const styles = {
		width: `${17 * props.grid.getSize()}px`,
		height: `${17 * props.grid.getSize()}px`,
		border: 'solid black 2px',
		display: 'flex',
		flexWrap: 'wrap',
	};

	useEffect(() => {
		if (props.grid.getCurrentGrid() === null) {
			props.renderGrid(props.grid);
		}
		setRenderedDOM(props.grid.renderDOM(Cell));
	}, [props.counter]);

	return <div style={styles}>{renderedDOM}</div>;
}

const mapStateToProps = (state) => {
	return {
		grid: state.grid.grid,
		counter: state.grid.counter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		renderGrid: (grid) => dispatch(renderGrid(grid)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
