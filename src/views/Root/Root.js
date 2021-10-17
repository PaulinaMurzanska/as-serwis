import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/MainContainer/Main';
import Menu from '../../components/Menu/Menu';
import Overmenu from '../../components/Overmenu/Overmenu';
import CookieConsent from 'react-cookie-consent';

function Root() {
	return (
		<>
			<Router>
				<Overmenu />
				<Menu />
				<Main />
				<Footer />
			</Router>
			<CookieConsent
				debug={true}
				buttonText="Akceptuję"
				style={{ fontSize: '1.2rem' }}
				buttonStyle={{ backgroundColor: '#e4052e' }}
			>
				W ramach naszej witryny stosujemy pliki cookies w celu
				świadczenia Państwu usług na najwyższym poziomie, w tym w sposób
				dostosowany do indywidualnych potrzeb. Korzystanie z witryny bez
				zmiany ustawień dotyczących cookies oznacza, że będą one
				zamieszczane w Państwa urządzeniu końcowym. Możecie Państwo
				dokonać w każdym czasie zmiany ustawień dotyczących cookies.
				Więcej szczegółów w naszej.
				<a href="/polityka_prywatności">Polityce cookies</a>
			</CookieConsent>
		</>
	);
}

export default Root;
