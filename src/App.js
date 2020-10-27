import React, { useState } from 'react';
import { connect } from 'react-redux';

import { simulateGrid, togglePlayBtn } from './redux/Grid/grid.actions';

import './App.css';
import GridContainer from './components/GridContainer';

function App(props) {
	const [isPlaying, setIsPlaying] = useState(false);
	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	function runSimulation() {
		// debugger;
		console.log(isPlaying);
		while (isPlaying) {
			sleep(1000).then(() => {
				if (isPlaying) {
					props.simulateGrid(props.grid);
				}
			});
		}
	}

	return (
		<div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
			<p>Generation: {props.generation}</p>
			<GridContainer />
			<div>
				<button onClick={() => props.simulateGrid(props.grid)}>Next</button>
				<button
					onClick={() => {
						if (!isPlaying) {
							setIsPlaying(true);
							runSimulation();
						}
					}}
				>
					Play
				</button>
				<button
					onClick={() => {
						if (isPlaying) {
							console.log(isPlaying);
							setIsPlaying(!isPlaying);
						}
					}}
				>
					Pause
				</button>
				<button>Clear</button>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
