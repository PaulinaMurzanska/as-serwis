import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'workbox-routing';
import Overmenu from '../Overmenu/Overmenu';

const Main = () => {
	return (
		<Switch>
			<Route>
				<Overmenu />
			</Route>
		</Switch>
	);
};
export default Main;
