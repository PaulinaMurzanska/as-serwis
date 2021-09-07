import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { ROUTE_CONTACT, ROUTE_MAIN_PAGE } from '../../constants/routes/Routes';

const Menu = () => {
	return (
		<section className="header">
			<div className="container">
				<div className="logo">
					AS <small>serwis</small>
				</div>
				<div className="menu-wrapper">
					<ul className="menu-list">
						<Link to={ROUTE_MAIN_PAGE}>
							<li className="menu-item">o nas</li>
						</Link>
						<Link to={ROUTE_MAIN_PAGE}>
							<li className="menu-item">usługi</li>
						</Link>
						<Link to={ROUTE_MAIN_PAGE}>
							<li className="menu-item">cennik</li>
						</Link>
						<Link to={ROUTE_CONTACT}>
							<li className="menu-item">kontakt</li>
						</Link>
					</ul>
				</div>
			</div>
		</section>
	);
};
export default Menu;
