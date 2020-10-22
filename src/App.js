import React from 'react';
import { connect } from 'react-redux';

import { simulateGrid } from './redux/Grid/grid.actions';

import './App.css';
import GridContainer from './components/GridContainer';

function App(props) {
	return (
		<div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
			<GridContainer />
			<button onClick={() => props.simulateGrid(props.grid)}>Next</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		grid: state.grid.grid,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		simulateGrid: (grid) => dispatch(simulateGrid(grid)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
