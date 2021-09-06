import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'workbox-routing';
import Menu from '../Menu/Menu';
import Overmenu from '../Overmenu/Overmenu';

const Main = () => {
	return (
		<Switch>
			<Route>
				<div>
					<Overmenu />
					<Menu />
				</div>
			</Route>
		</Switch>
	);
};
export default Main;
