import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../../components/Main/Main';
import './App.scss';

function Root() {
	return (
		<Router>
			<Main />
		</Router>
	);
}

export default Root;
