import React, { useState } from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import {
	ROUTE_CONTACT,
	ROUTE_MAIN_PAGE,
	ROUTE_PRICES,
	ROUTE_SERVICES,
} from '../../constants/routes/Routes';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Menu = () => {
	const [navbar, setNavbar] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const changeNavbar = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener('scroll', changeNavbar);

	return (
		<section className={navbar ? 'header scrolled' : 'header'}>
			<div className="container">
				<div className="logo">
					AS <small>serwis</small>
				</div>

				<div
					className={
						menuOpen
							? 'menu-wrapper collapse-custom'
							: 'menu-wrapper'
					}
				>
					<div className={menuOpen ? 'bars open' : 'bars'}>
						<GiHamburgerMenu onClick={() => setMenuOpen(true)} />
					</div>
					<div className={menuOpen ? 'ex open' : 'ex'}>
						<ImCross onClick={() => setMenuOpen(false)} />
					</div>
					<ul
						className={
							menuOpen ? 'menu-list collapse-custom' : 'menu-list'
						}
					>
						<Link
							to={ROUTE_MAIN_PAGE}
							onClick={() => setMenuOpen(false)}
						>
							<li className="menu-item">o nas</li>
						</Link>
						<Link
							to={ROUTE_SERVICES}
							onClick={() => setMenuOpen(false)}
						>
							<li className="menu-item">usługi</li>
						</Link>
						<Link
							to={ROUTE_PRICES}
							onClick={() => setMenuOpen(false)}
						>
							<li className="menu-item">cennik</li>
						</Link>
						<Link
							to={ROUTE_CONTACT}
							onClick={() => setMenuOpen(false)}
						>
							<li className="menu-item">kontakt</li>
						</Link>
					</ul>
				</div>
			</div>
		</section>
	);
};
export default Menu;
