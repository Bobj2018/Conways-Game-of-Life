import React from 'react';

import './App.css';
import GridContainer from './components/GridContainer';

function App(props) {
	return (
		<div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
			<GridContainer />
		</div>
	);
}

export default App;
