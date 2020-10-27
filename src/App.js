import React, { useState } from 'react';
import { connect } from 'react-redux';

import { clearGrid, seedGrid, simulateGrid, togglePlayBtn } from './redux/Grid/grid.actions';

import './App.css';
import GridContainer from './components/GridContainer';

function App(props) {
	const [simulate, setSimulate] = useState(null);

	function start() {
		setSimulate(
			setInterval(() => {
				props.simulateGrid(props.grid);
			}, 1000)
		);
	}

	function stop() {
		setSimulate(clearInterval(simulate));
	}

	return (
		<div
			className="App"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<p>Generation: {props.generation}</p>
			<GridContainer />
			<div>
				<button onClick={() => props.simulateGrid(props.grid)}>Next Generation</button>
				<button
					onClick={() => {
						props.seedGrid(props.grid);
					}}
				>
					Seed Grid
				</button>
				<button onClick={start}>Play Simulation</button>
				<button onClick={stop}>Pause Simulation</button>
				<button onClick={props.clearGrid}>Clear Grid</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		grid: state.grid.grid,
		generation: state.grid.generation,
		isPlaying: state.grid.isPlaying,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		simulateGrid: (grid) => dispatch(simulateGrid(grid)),
		togglePlayBtn: () => dispatch(togglePlayBtn()),
		clearGrid: () => dispatch(clearGrid()),
		seedGrid: (grid) => dispatch(seedGrid(grid)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
