import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/MainContainer/Main';
import Menu from '../../components/Menu/Menu';
import Overmenu from '../../components/Overmenu/Overmenu';

function Root() {
	return (
		<Router>
			<Overmenu />
			<Menu/>
			<Main />
			<Footer/>
		</Router>
	);
}

export default Root;
