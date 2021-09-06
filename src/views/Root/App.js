import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../../components/Main/Main';

function Root() {
	return (
		<Router>
			<Main />
		</Router>
	);
}

export default Root;
