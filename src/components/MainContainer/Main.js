import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTE_CONTACT, ROUTE_MAIN_PAGE, ROUTE_PRICES, ROUTE_PRIVACY_POLICY, ROUTE_SERVICES } from '../../constants/routes/Routes';
import Contact from '../Contact/Contact';
import Prices from '../Prices/Prices';
import PrivacyPolicy from '../Privacy/PrivacyPolicy';
import Services from '../Services/Services';
import WelcomePage from '../WelcomePage/WelcomePage';

const Main = () => {
	return (
		<Switch>
			<Route exact path={ROUTE_MAIN_PAGE}>
				<WelcomePage />
			</Route>
			<Route exact path={ROUTE_CONTACT}>
				<Contact/>
			</Route>
			<Route exact path={ROUTE_PRICES}>
				<Prices/>
			</Route>
			<Route exact path={ROUTE_SERVICES}>
				<Services/>
			</Route>
			<Route exact path={ROUTE_PRIVACY_POLICY}>
				<PrivacyPolicy/>
			</Route>

		</Switch>
	);
};
export default Main;
