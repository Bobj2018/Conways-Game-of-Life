import React from 'react';
import { connect } from 'react-redux';

import { simulateGrid } from './redux/Grid/grid.actions';

import './App.css';
import GridContainer from './components/GridContainer';

function App(props) {
	return (
		<div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
			<p>Generation: {props.generation}</p>
			<GridContainer />
			<div>
				<button onClick={() => props.simulateGrid(props.grid)}>Next</button>
				<button>Play</button>
				<button>Pause</button>
				<button>Clear</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		grid: state.grid.grid,
		generation: state.grid.generation,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		simulateGrid: (grid) => dispatch(simulateGrid(grid)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
